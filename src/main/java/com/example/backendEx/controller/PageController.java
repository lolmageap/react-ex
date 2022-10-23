package com.example.backendEx.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class PageController {

    @GetMapping("/CreateStory")
    public String CreateStory(){
        return "/createBoard";
    }

}
