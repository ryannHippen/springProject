package com.spring.project.group6.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Register {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long registrationId;
	private String email;
	private String password;
	
	public Register(Long registrationId, String email, String password) {
		super();
		this.registrationId = registrationId;
		this.email = email;
		this.password = password;
	}
	
	
	public Long getRegistrationId() {
		return registrationId;
	}
	public void setRegistrationId(Long registrationId) {
		this.registrationId = registrationId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	
	
	
}
