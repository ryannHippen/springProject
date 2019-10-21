package com.spring.project.group6.controller;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.project.group6.model.Evaluation;
import com.spring.project.group6.service.NotificationService;

import ch.qos.logback.classic.Logger;

@RestController
@RequestMapping({"/api/eval"})
public class EmailController {
	
	private Logger logger = (Logger) LoggerFactory.getLogger(EmailController.class);
	
	@Autowired
	private NotificationService service;
	
	@RequestMapping("/email")	
	public void sendEmail(@RequestBody Evaluation evaluation) {
		try {
			service.sendNotification(evaluation);
		} catch(MailException e) {
			// haven't tested throwing of exception
			logger.info("email failed" + e.getMessage());
		}
		
	}

}
