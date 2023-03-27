package com.example.Backend.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Backend.Entity.Login;
import com.example.Backend.Entity.User;
import com.example.Backend.payLoads.ApiResponse;
import com.example.Backend.repositery.UserRepo;
import com.example.Backend.services.UserServices;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	
	@Autowired
	UserServices userService;
	
	
	//create-user
	@PostMapping("/create")
	public ResponseEntity<ApiResponse>createdUser(  @RequestBody User user){
		//check if username is already taken
		
		
		
		
		 if(userService.existsByUserNameUser(user.getUserName())){
			
			 return  new ResponseEntity(new ApiResponse("userName is already taken !!:",false),HttpStatus.BAD_REQUEST);
	     }

	     // add check for email exists in DB
	     if(userService.existsByUserEmailUser(user.getEmail())){
	    	 return  new ResponseEntity(new ApiResponse("Email is already taken !!:",true),HttpStatus.BAD_REQUEST);
	     }


	     User userSave=this.userService.createUser(user);

	     return new ResponseEntity(new ApiResponse("User registered successfully !!",true), HttpStatus.OK);

		

		
//		return new ResponseEntity<>(userSave,HttpStatus.CREATED);	
	}
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse>LoginUsers(@RequestBody Login login){
		if(userService.loginUser(login))
		return  new ResponseEntity(new ApiResponse("Loggin Successfully:",true),HttpStatus.OK);
		
		else
			return  new ResponseEntity(new ApiResponse("Invalid Credentials:",false),HttpStatus.BAD_REQUEST);
			
		
	}

	//update-user
	@PutMapping("/update/{id}")
	public ResponseEntity<User>updateUsers( @RequestBody User user,@PathVariable("id") Integer id){
		 User  updatedUser=this.userService.updateUser( user, id);
		 return ResponseEntity.ok(updatedUser);
		
	}
	
	
	//delete-user-by-id
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ApiResponse>deleteUsers(@PathVariable Integer id){
		
		
		this.userService.deleteUser(id);
		return  new ResponseEntity(new ApiResponse("User Deleted Successfully:",true),HttpStatus.OK);
		
	}
	//get-all-user
	@GetMapping("/allUser")
	public ResponseEntity<List<User>>getAllUsers(){
		List<User>allUsers=this.userService.findAllUser();
		return ResponseEntity.ok(allUsers);
	}
	//get-user-by-id
	@GetMapping("/getById/{id}")
	public ResponseEntity<User>getByIdUsers(@PathVariable Integer id){
		User users=this.userService.findByUserId(id);
		return ResponseEntity.ok(users);
	}
	
	

	
}
