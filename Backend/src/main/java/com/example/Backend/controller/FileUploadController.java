package com.example.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.Backend.Entity.FileDB;
import com.example.Backend.services.FileSer;

@RestController
@RequestMapping("/file")
@CrossOrigin(origins = "http://localhost:3000")
public class FileUploadController {
	
	
	@Autowired
	private FileSer fileSer;
	
	@PostMapping("/upload")
	 public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
		 
		 String message = "";
		    try {
		      fileSer.store(file);

//		      message = "Uploaded the file successfully: " + file.getOriginalFilename();
		      return ResponseEntity.status(HttpStatus.OK).body("Uploaded the file successfully: "+ file.getOriginalFilename());
		    } catch (Exception e) {
//		      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
		      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not upload the file: " + file.getOriginalFilename() + "!");
		    }
		
		 
	 }

}
