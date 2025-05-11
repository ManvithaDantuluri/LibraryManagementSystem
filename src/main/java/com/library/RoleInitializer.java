package com.library;

import com.library.entity.Role;
import com.library.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RoleInitializer {

    @Bean
    CommandLineRunner initRoles(RoleRepository roleRepository) {
        return args -> {
            if (roleRepository.findByName("STUDENT").isEmpty())
                roleRepository.save(new Role("STUDENT"));
            if (roleRepository.findByName("FACULTY").isEmpty())
                roleRepository.save(new Role("FACULTY"));
            if (roleRepository.findByName("ADMIN").isEmpty())
                roleRepository.save(new Role("ADMIN"));
        };
    }
}
