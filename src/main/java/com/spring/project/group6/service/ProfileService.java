package com.spring.project.group6.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.project.group6.Group6Application;
import com.spring.project.group6.controller.CandProfileController;
import com.spring.project.group6.model.Profile;
import com.spring.project.group6.repository.ProfileRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;



@Service
@Transactional
public class ProfileService {

	@Autowired
    private ProfileRepository repo;
    
    public List<Profile> listAll() {
        return repo.findAll();
    }
     
    public void save(Profile profile) {
        repo.save(profile);
    }
     
    public Profile get(long id) {
        return repo.findById(id).get();
    }
     
    public void delete(long id) {
        repo.deleteById(id);
    }
    
	
}
