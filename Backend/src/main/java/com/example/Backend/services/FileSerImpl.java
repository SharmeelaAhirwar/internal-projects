package com.example.Backend.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.Backend.Entity.FileDB;
import com.example.Backend.repositery.FileRepo;
@Service
public class FileSerImpl implements FileSer {
	
	
	@Autowired
	private FileRepo fileRepo;
	

	@Override
	public FileDB store(MultipartFile file) throws IOException {
		String fileName=StringUtils.cleanPath(file.getOriginalFilename());
		FileDB fileDB=new FileDB(fileName,file.getContentType(),file.getBytes());
		
		return fileRepo.save(fileDB);
	}

	@Override
	public FileDB getFile(String id) {
		return fileRepo.findById(id).get();
	}

}
