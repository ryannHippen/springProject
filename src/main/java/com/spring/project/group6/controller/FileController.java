package com.spring.project.group6.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.project.group6.model.File;

import com.spring.project.group6.service.FileService;
@RestController
@RequestMapping(value="/api/files")
public class FileController {
 
    @Autowired
    private FileService service;
     
    
    @GetMapping(path = {"/files"})
    public List<File> findAll(){
        return service.listAll();
    }
    
    @PostMapping
    public File create(@RequestParam("file") MultipartFile file) throws IOException{
    	File f = new File();
    	f.setFile(file.getBytes());
        return service.save(f);
    }
    
    @PutMapping
    public File update(@RequestPart("file") MultipartFile file, @RequestPart("id") String id) throws IOException{
    	File f = new File();
    	f.setFile(file.getBytes());
    	f.setFileId(Integer.parseInt(id));
        return service.update(Integer.parseInt(id), file.getBytes());
    }
    
    @RequestMapping(value ="/file/{id}")
    public ResponseEntity<byte[]>getFile(@PathVariable(name = "id") int id) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG);
        return new ResponseEntity<>(service.get(id).getFile(), headers, HttpStatus.OK);
    }
    
    @DeleteMapping("/file/{id}")
    public void deleteFile(@PathVariable("id") int id) {
        service.delete(id);      
    }
}
