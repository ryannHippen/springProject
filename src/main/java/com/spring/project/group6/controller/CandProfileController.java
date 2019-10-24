package com.spring.project.group6.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.project.group6.model.Profile;
import com.spring.project.group6.service.ProfileService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/api/pro"})
public class CandProfileController {
 
    @Autowired
    private ProfileService service;
    
    @GetMapping(path = {"/profiles"})
    public List<Profile> findAll(){
        return service.listAll();
    }
    
    @PostMapping
    public Profile create(@RequestBody Profile profile){
        return service.save(profile);
    }
    
    @PutMapping
    public Profile update(@RequestBody Profile profile){
        return service.save(profile);
    }
    
    @RequestMapping("/profile/{id}")
    public Profile getProfile(@PathVariable(name = "id") int id) {
		return service.get(id);
    }
    
    @DeleteMapping("/profile/{id}")
    public void deleteProfile(@PathVariable("id") int id) {
        service.delete(id);      
    }
    
    @GetMapping("/profiles/search")
    public List<Profile> getAllByQuery(
    		@RequestParam(value = "firstName", required = false) String name
	) {
    	System.out.println("NAME: "+name);
        return service.getByQuery(name);      
    }
    
}
