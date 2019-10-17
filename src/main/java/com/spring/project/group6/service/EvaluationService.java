package com.spring.project.group6.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.project.group6.model.Evaluation;
import com.spring.project.group6.model.Profile;
import com.spring.project.group6.repository.EvaluationRepository;


@Service
@Transactional
public class EvaluationService {
	
	private JavaMailSender javaMailSender;
	
	@Autowired
	public EvaluationService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	

	@Autowired
	private EvaluationRepository repo;
	
	public List<Evaluation>listAll(){
		return repo.findAll();
	}
	
    public Evaluation save(Evaluation evaluation) {
    	
    	
		SimpleMailMessage mail = new SimpleMailMessage();
		
		
		mail.setTo(evaluation.getEmail());
		mail.setFrom("group6emailservice@gmail.com");
		mail.setSubject("Hire date " + evaluation.getInterviewDate());
		mail.setText("This is a test of things");
		
		javaMailSender.send(mail);
				
    	
    	
    	
        return repo.save(evaluation);
    }
	
	public Evaluation get(long id) {
		return repo.findById(id).get();
	}
	
	public void delete(long id) {
		repo.deleteById(id);
	}
	
	
}
