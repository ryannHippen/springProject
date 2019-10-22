package com.spring.project.group6.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.spring.project.group6.model.File;
import com.spring.project.group6.repository.FileRepository;

import org.springframework.beans.factory.annotation.Autowired;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;



@Service
@Transactional
public class FileService {

	@Autowired
    private FileRepository repo;
	
	private static final String FILE_DIRECTORY = "/var/files";
	 
	public void storeFile(MultipartFile file) throws IOException {
		Path filePath = Paths.get(FILE_DIRECTORY + "/" + file.getOriginalFilename());
 
		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
	}
    
    public List<File> listAll() {
        return repo.findAll();
    }
     
    public File save(File resume) {
    	/*
    	try {
    		System.out.println("in save");
			convertFileContentToBlob(resume.getFilepath(), resume);
		} catch (SerialException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
        return repo.save(resume);
    }
     
    public File get(long id) {
        return repo.findById(id).get();
    }
     
    public void delete(long id) {
        repo.deleteById(id);
    }
	
    public static void convertFileContentToBlob(String filePath, File file)throws IOException, SerialException, SQLException {
    	   byte[] fileContent = null;
    	   // initialize string buffer to hold contents of file
    	   StringBuffer fileContentStr = new StringBuffer("");
    	   BufferedReader reader = null;
    	   try {
    	        // initialize buffered reader  
    		reader = new BufferedReader(new FileReader(filePath));
    		String line = null;
    	        // read lines of file
    		while ((line = reader.readLine()) != null) {
    	           //append line to string buffer
    	           fileContentStr.append(line).append("\n");
    		}
    	        // convert string to byte array
    		fileContent = fileContentStr.toString().trim().getBytes();
    	   } catch (IOException e) {
    		throw new IOException("Unable to convert file to byte array. " + 
    	              e.getMessage());
    	   } finally {
    		if (reader != null) {
    	           reader.close();
    		}
    	   }
       	byte[] myArray = fileContent;
       	Blob blob =  new SerialBlob(myArray );
       	// file.setFile(blob);
    	}
}
