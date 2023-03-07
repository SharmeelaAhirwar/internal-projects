package com.example.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;
import com.example.Backend.services.UserServices;

@RestController
@RequestMapping("/user")
public class UserController {
	
	
	@Autowired
	UserServices userService;
	
	@PostMapping("/register")
	public User createUser(@RequestBody User user) {
		 User users=userService.createUser(user);
		return users;
	}

	
	

}
