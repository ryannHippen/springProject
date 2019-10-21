package com.spring.project.group6.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.project.group6.model.File;

import com.spring.project.group6.service.FileService;

@RestController
@RequestMapping({"/api/file"})
public class FileController {
 
    @Autowired
    private FileService service;
     
    /*
    @GetMapping(path = {"/files"})
    public List findAll(){
        return service.listAll();
    }
    */
    @PostMapping
    public void create (@RequestParam("file") MultipartFile file) throws IOException, SerialException, SQLException{
        service.save(file);
    }
    /*
    @PutMapping
    public File update(@RequestBody File file) {
        return service.save(file);
    }
    */
    @RequestMapping("/file/{id}")
    public File getFile(@PathVariable(name = "id") int id) {
		return service.get(id);
    }
    
    @DeleteMapping("/file/{id}")
    public void deleteFile(@PathVariable("id") int id) {
        service.delete(id);      
    }
}
