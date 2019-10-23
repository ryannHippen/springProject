package com.spring.project.group6.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.project.group6.model.Register;
import com.spring.project.group6.repository.RegistrationRepository;

@Service
@Transactional
public class RegistrationService {

	@Autowired
	private RegistrationRepository repo;

    public Register save(Register register) {
        return repo.save(register);
    }

}
