package com.example.Backend.services;

import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;

public interface UserServices {
	public User createUser (User user);
	public User login(Login userLogin);

}
