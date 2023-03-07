package com.example.Backend.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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
public class UserController {
	
	
	@Autowired
	UserServices userService;
	
	@Autowired
	UserRepo userRepo;
	
	//create-user
	@PostMapping("/create")
	public ResponseEntity<?>createdUser(  @RequestBody User user){
		
		 if(userRepo.existsByUserName(user.getUserName())){
	         return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
	     }

	     // add check for email exists in DB
	     if(userRepo.existsByEmail(user.getEmail())){
	         return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
	     }


	     User userSave=this.userService.createUser(user);

	     return new ResponseEntity<>("User registered successfully", HttpStatus.OK);

		

		
//		return new ResponseEntity<>(userSave,HttpStatus.CREATED);	
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
