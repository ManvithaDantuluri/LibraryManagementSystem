package com.library.controller;

import com.library.entity.Role;
import com.library.entity.User;
import com.library.jwt.JwtUtil;
import com.library.repository.RoleRepository;
import com.library.repository.UserRepository;
import com.library.dto.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        Optional<User> existing = userRepository.findByEmail(request.getEmail());
        if (existing.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists!");
        }

        // Validate role
        Optional<Role> dbRole = roleRepository.findByName(request.getRole().toUpperCase());
        if (dbRole.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid role provided");
        }

        // Create User entity
        User newUser = new User();
        newUser.setFullName(request.getFullName());
        newUser.setEmail(request.getEmail());
        newUser.setPassword(passwordEncoder.encode(request.getPassword())); // ✅ Encode password
        newUser.setRole(dbRole.get());

        userRepository.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        Optional<User> existing = userRepository.findByEmail(loginRequest.getEmail());

        if (existing.isPresent() && passwordEncoder.matches(loginRequest.getPassword(), existing.get().getPassword())) {
            User user = existing.get();
            String token = jwtUtil.generateToken(user.getEmail(), user.getRole().getName());

            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("role", user.getRole().getName());

            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials!");
    }
}



