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
     
    
    @RequestMapping("/files")
    public String viewHomePage(Model model) {
        List<File> listFiles = service.listAll();
        model.addAttribute("listFiles", listFiles);
         
        return "index";
    }
    
    @RequestMapping("/newFile")
    public String showNewFilePage(Model model) {
        File file = new File();
        model.addAttribute("file", file);
         
        return "new_file";
    }
    
    @RequestMapping(value = "/saveFile", method = RequestMethod.POST)
    public String saveFile(@ModelAttribute("file") File file) {
        service.save(file);
         
        return "redirect:/";
    }
    
    @RequestMapping("/editFile/{id}")
    public ModelAndView showEditFilePage(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit_file");
        File file = service.get(id);
        mav.addObject("file", file);
         
        return mav;
    }
    
    @RequestMapping("/deleteFile/{id}")
    public String deleteFile(@PathVariable(name = "id") int id) {
        service.delete(id);
        return "redirect:/";       
    }
}
