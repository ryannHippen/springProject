package com.spring.project.group6.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.project.group6.model.Register;
import com.spring.project.group6.service.RegistrationService;

@RestController
@RequestMapping({"/api/reg"})
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
	
    @PostMapping
    public Register create(@RequestBody Register register){
        return service.save(register);
    }

}
