package com.example.Backend.services;

import java.util.List;

import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;
import com.example.Backend.Exception.UserFoundException;

public interface UserServices {
	
	 //create-user
	 User createUser(User user);
	 
	 //login-user
	 
	 boolean loginUser(Login loginUser);
	 
	 //check if user is exist by username
	 
	 boolean existsByUserNameUser(String userName);
	 
 //check if user is exist by email
	 
	 boolean existsByUserEmailUser(String email);
	 
        //update-user
     User updateUser(User user,int userId);
     
     //delete-user-by-id
	 void deleteUser(Integer userId);
	 
	 //find-user-by-id
	 User findByUserId(Integer userId);
	 
	 //find-all-user
	List<User>findAllUser();
	
	
	

}
