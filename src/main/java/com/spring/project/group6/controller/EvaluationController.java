package com.spring.project.group6.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.project.group6.model.Evaluation;
import com.spring.project.group6.service.EvaluationService;

public class EvaluationController {

    @Autowired
    private EvaluationService service;
     
    
    @RequestMapping("/evaluations")
    public String viewHomePage(Model model) {
        List<Evaluation> listEvaluation = service.listAll();
        model.addAttribute("listEvaluation", listEvaluation);
         
        return "index";
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
    
    @RequestMapping("/editEvaluation/{id}")
    public ModelAndView showEditProfilePage(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit_evaluation");
        Evaluation evaluation = service.get(id);
        mav.addObject("evaluation", evaluation);
         
        return mav;
    }
    
    @RequestMapping("/deleteEvaluation/{id}")
    public String deleteEvaluation(@PathVariable(name = "id") int id) {
        service.delete(id);
        
        return "redirect:/";       
    }
    
}
