package com.spring.project.group6.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.spring.project.group6.model.Evaluation;
import com.spring.project.group6.model.Profile;
import com.spring.project.group6.service.EvaluationService;

@RestController
@RequestMapping({"/api"})
public class EvaluationController {

    @Autowired
    private EvaluationService service;
     
    @GetMapping(path = {"/evaluations"})
    public List findAll(){
        return service.listAll();
    }
    
    

    @RequestMapping("/newEvaluation")
    public String showNewProfilePage(Model model) {
    	Evaluation evaluation = new Evaluation();
        model.addAttribute("evaluation", evaluation);
         
        return "new_evaluation";
    }
    
    @RequestMapping(value = "/saveEvaluation", method = RequestMethod.POST)
    public String saveEvaluation(@ModelAttribute("evaluation") Evaluation evaluation) {
        service.save(evaluation);
        return "redirect:/";
    }
    

    
    @RequestMapping("/evaluations/{id}")
    public Evaluation getEvaluation(@PathVariable(name = "id") int id) {
		return service.get(id);
    }
    
    
    
    
    @DeleteMapping("/evaluation/{id}")
    public void deleteEvaluation(@PathVariable("id") int id) {
        service.delete(id);      
    }
    
}
