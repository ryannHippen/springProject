package com.spring.project.group6.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Notification {
	public Notification() {
		super();
	}
	
	public static void sendEmail(String interviewDate,String recipient) {
		//TODO:
		//Call some email api that sends a message to recipient using message fields
	}
}
