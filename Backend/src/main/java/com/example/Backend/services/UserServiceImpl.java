package com.example.Backend.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;
import com.example.Backend.repositery.UserRepo;

@Service
public class UserServiceImpl implements UserServices {
	
	@Autowired
	UserRepo userRepo;

	@Override
	public User createUser(User user) {
		 User users=userRepo.save(user);
		return users;
	}

	@Override
	public User login(Login user) {
		
		return null;
	}

}
