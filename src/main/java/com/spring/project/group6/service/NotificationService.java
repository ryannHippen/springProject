package com.spring.project.group6.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.spring.project.group6.model.Evaluation;


@Service
public class NotificationService {
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public NotificationService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendNotification(Evaluation evaluation) throws MailException {
		
		SimpleMailMessage mail = new SimpleMailMessage();
		
		String interviewDate = evaluation.getInterviewDate();
		String reviewer = evaluation.getReviewer();
		
		mail.setTo(evaluation.getEmail());
		mail.setFrom("group6emailservice@gmail.com");
		mail.setSubject("Interview Date: " + interviewDate);
		mail.setText("This message is being sent to inform you that you have"
		+" an interview scheduled for "+ interviewDate+"."
		+" Contact "+reviewer+" for more information.");
		
		javaMailSender.send(mail);
				
		
	}
	

}
