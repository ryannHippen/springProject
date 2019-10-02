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

import com.spring.project.group6.model.File;
import com.spring.project.group6.service.FileService;

@Controller
public class FileController {
 
    @Autowired
    private FileService service;
     
    
    @RequestMapping("/")
    public String viewHomePage(Model model) {
        List<File> listFiles = service.listAll();
        model.addAttribute("listFiles", listFiles);
         
        return "index";
    }
    
    @RequestMapping("/new")
    public String showNewFilePage(Model model) {
        File file = new File();
        model.addAttribute("file", file);
         
        return "new_file";
    }
    
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String saveProduct(@ModelAttribute("product") File file) {
        service.save(file);
         
        return "redirect:/";
    }
    
    @RequestMapping("/edit/{id}")
    public ModelAndView showEditProfilePage(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit_file");
        File file = service.get(id);
        mav.addObject("file", file);
         
        return mav;
    }
    
    @RequestMapping("/delete/{id}")
    public String deleteFile(@PathVariable(name = "id") int id) {
        service.delete(id);
        return "redirect:/";       
    }
}
