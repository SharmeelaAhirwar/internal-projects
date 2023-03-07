package com.example.Backend.repositery;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	User findByEmail(String email);
    User findByUserNameOrEmail(String username, String email);
    User findByUserName(String username);
    Boolean existsByUserName(String username);
    Boolean existsByEmail(String email);
    Boolean existsByEmailAndPassword(String email,String password);
	

}
