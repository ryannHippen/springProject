package com.spring.project.group6;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import com.spring.project.group6.model.Notification;

@SpringBootApplication
public class Group6Application {

	public static void main(String[] args) {
		SpringApplication.run(Group6Application.class, args);	
		Notification notification = new Notification();
	}

}
