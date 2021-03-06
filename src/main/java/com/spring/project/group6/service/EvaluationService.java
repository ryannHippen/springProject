package com.spring.project.group6.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.project.group6.model.Evaluation;
import com.spring.project.group6.repository.EvaluationRepository;


@Service
@Transactional
public class EvaluationService {

	@Autowired
	private EvaluationRepository repo;
	
	public List<Evaluation>listAll(){
		return repo.findAll();
	}
	
    public Evaluation save(Evaluation evaluation) {
        return repo.save(evaluation);
    }
	
	public Evaluation get(long id) {
		return repo.findById(id).get();
	}
	
	public void delete(long id) {
		repo.deleteById(id);
	}
	
	
}
