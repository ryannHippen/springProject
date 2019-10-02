package com.spring.project.group6.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.project.group6.model.File;
import com.spring.project.group6.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;



@Service
@Transactional
public class FileService {

	@Autowired
    private FileRepository repo;
    
    public List<File> listAll() {
        return repo.findAll();
    }
     
    public void save(File resume) {
        repo.save(resume);
    }
     
    public File get(long id) {
        return repo.findById(id).get();
    }
     
    public void delete(long id) {
        repo.deleteById(id);
    }
	
}
