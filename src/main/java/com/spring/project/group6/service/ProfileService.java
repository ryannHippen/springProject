package com.spring.project.group6.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.project.group6.model.Profile;
import com.spring.project.group6.repository.ProfileRepository;

import org.springframework.beans.factory.annotation.Autowired;



@Service
@Transactional
public class ProfileService {

	@Autowired
    private ProfileRepository repo;
    
    public List<Profile> listAll() {
        return repo.findAll();
    }
     
    public Profile save(Profile profile) {
        return repo.save(profile);
    }
     
    public Profile get(long id) {
        return repo.findById(id).get();
    }
     
    public void delete(long id) {
        repo.deleteById(id);
    }

	public List<Profile> getByQuery(String name) {
		return repo.getByQuery(name);
	}
    
	
}
