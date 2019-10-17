package com.spring.project.group6.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.spring.project.group6.model.Profile;

@Service
public class NotificationService {
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public NotificationService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendNotification(Profile profile) throws MailException {
		
		SimpleMailMessage mail = new SimpleMailMessage();
		
		
		mail.setTo(profile.getEmail());
		mail.setFrom("group6emailservice@gmail.com");
		mail.setSubject("Big Lips Owen");
		mail.setText("This is a test of things");
		
		javaMailSender.send(mail);
				
		
	}
	

}
