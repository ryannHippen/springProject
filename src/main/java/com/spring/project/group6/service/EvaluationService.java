package com.spring.project.group6.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.project.group6.repository.EvaluationRepository;
import com.spring.project.group6.model.Evaluation;

@Service
@Transactional
public class EvaluationService {

	@Autowired
	private EvaluationRepository repo;
	
	public List<Evaluation>listAll(){
		return repo.findAll();
	}
	
	public void save(Evaluation eval) {
		repo.save(eval);
	}
	
	public Evaluation get(Long id) {
		return repo.getOne(id);
	}
	
	public void delete(Evaluation eval) {
		repo.delete(eval);
	}
	
}
