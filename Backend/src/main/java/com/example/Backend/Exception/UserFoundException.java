package com.example.Backend.Exception;

public class UserFoundException  extends Exception {
	
	public  UserFoundException() {
		super("user with this username is already prasent in DB try with another userName !!");
	}
	
	public UserFoundException(String msg) {
		super(msg);
	}

}
