package com.example.Backend.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;
import com.example.Backend.Exception.ResourceNotFoundException;
import com.example.Backend.Exception.UserFoundException;
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
	public boolean loginUser(Login loginUser) {
		
		if(userRepo.existsByEmailAndPassword(loginUser.getEmail(), loginUser.getPassword()))
			return true;
		else
			
			return false;
		
		
	}

	@Override
	public User updateUser(User user, int userId) {
		User users=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("user","id",userId));
		users.setEmail(user.getEmail());
		users.setFirstName(user.getFirstName());
		users.setLastName(user.getLastName());
		users.setPassword(user.getPassword());
		users.setUserName(user.getUserName());
		users.setPhoneNumber(user.getPhoneNumber());
		User updatedUser=this.userRepo.save(users);
		return updatedUser;
	}

	@Override
	public void deleteUser(Integer userId) {
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("user","id",userId));
		this.userRepo.delete(user);
		
	}

	@Override
	public User findByUserId(Integer userId) {
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("user","id",userId));
		return user;
	}

	@Override
	public List<User> findAllUser() {
		List<User>users=this.userRepo.findAll();
		
		return users;
	}

	@Override
	public boolean existsByUserNameUser(String userName) {
		
		return userRepo.existsByUserName(userName);
	}

	@Override
	public boolean existsByUserEmailUser(String email) {
		
		return userRepo.existsByEmail(email);
	}

	
}
