package com.spring.project.group6.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.PutMapping;

import com.spring.project.group6.model.Evaluation;

import com.spring.project.group6.service.EvaluationService;

@RestController
@RequestMapping({"/api/eval"})
public class EvaluationController {

    @Autowired
    private EvaluationService service;
     
    @GetMapping(path = {"/evaluations"})
    public List findAll(){
        return service.listAll();
    }
    
    @PostMapping
    public Evaluation create(@RequestBody Evaluation evaluation){
        return service.save(evaluation);
    }   

    
    @PutMapping
    public Evaluation update(@RequestBody Evaluation evaluation){
        return service.save(evaluation);
    }
    
    @RequestMapping("/evaluation/{id}")
    public  Evaluation getEvaluation(@PathVariable(name = "id") int id) {
		return service.get(id);
    }
    
    @DeleteMapping("/evaluation/{id}")
    public void deleteEvaluation(@PathVariable("id") int id) {
        service.delete(id);      
    }
    
}
