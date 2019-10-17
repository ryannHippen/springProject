package com.spring.project.group6.controller;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.project.group6.model.Profile;
import com.spring.project.group6.service.EvaluationService;

import ch.qos.logback.classic.Logger;

@RestController
public class EmailController {
	
	
	
	private Logger logger = (Logger) LoggerFactory.getLogger(EmailController.class);
	
	@Autowired
	private EvaluationService evaluationService;
	
	@RequestMapping("/email")	
	public String interviewDate() {
		return "Please send email";
	}
	
	@RequestMapping("/email-success")
	public String interviewDateSuccess() {
		
		
		Profile profile = new Profile();
		profile.setFirstName("owen");
		profile.setEmail("thueycarp@gmail.com");
		
		try {
			//evaluationService.save();
			
		}catch(MailException e) {
			
			logger.info("email failed" + e.getMessage());
		}
	
		return "email was sent";
	}

}
