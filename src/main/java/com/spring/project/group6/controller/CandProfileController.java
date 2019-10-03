package com.spring.project.group6.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.project.group6.model.Profile;
import com.spring.project.group6.service.ProfileService;

@Controller
public class CandProfileController {
 
    @Autowired
    private ProfileService service;
     
    
    @RequestMapping("/profiles")
    public String viewHomePage(Model model) {
        List<Profile> listProfiles = service.listAll();
        model.addAttribute("listProfiles", listProfiles);
         
        return "profiles";
    }
    
    @RequestMapping("/newProfile")
    public String showNewProfilePage(Model model) {
        Profile profile = new Profile();
        model.addAttribute("profile", profile);
         
        return "newProfile";
    }
    
    @RequestMapping(value = "/saveProfile", method = RequestMethod.POST)
    public String saveProfile(@ModelAttribute("profile") Profile profile) {
    	service.save(profile);
        System.out.println("Saved:" + profile.toString());
        return "redirect:/profiles";
    }
    
    @RequestMapping("/editProfile/{id}")
    public ModelAndView showEditProfilePage(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit_profile");
        Profile profile = service.get(id);
        mav.addObject("profile", profile);
         
        return mav;
    }
    
    @RequestMapping("/deleteProfile/{id}")
    public String deleteProfile(@PathVariable(name = "id") int id) {
        service.delete(id);
        
        return "redirect:/";       
    }
    
}
