package com.example.Backend.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.example.Backend.Entity.FileDB;

public interface FileSer {
	
	 public FileDB store(MultipartFile file) throws IOException;
	 public FileDB getFile(String id);

}
