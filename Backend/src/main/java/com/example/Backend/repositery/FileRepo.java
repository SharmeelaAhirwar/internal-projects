package com.example.Backend.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Backend.Entity.FileDB;

public interface FileRepo extends JpaRepository<FileDB, String> {

}
