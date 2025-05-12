package com.library.config;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.library.entity.Role;
import com.library.repository.RoleRepository;

@Component
public class RoleSeeder implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role("STUDENT"));
            roleRepository.save(new Role("FACULTY"));
            roleRepository.save(new Role("LIBRARIAN"));
        }
    }
}
