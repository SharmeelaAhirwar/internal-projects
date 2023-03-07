package com.example.Backend.services;

import java.util.List;

import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;
import com.example.Backend.Exception.UserFoundException;

public interface UserServices {
	
	 //create-user
	 User createUser(User user);
	 
	 //login-user
	 
	 User loginUser(Login loginUser);
	 
        //update-user
     User updateUser(User user,int userId);
     
     //delete-user-by-id
	 void deleteUser(Integer userId);
	 
	 //find-user-by-id
	 User findByUserId(Integer userId);
	 
	 //find-all-user
	List<User>findAllUser();
	
	
	

}
