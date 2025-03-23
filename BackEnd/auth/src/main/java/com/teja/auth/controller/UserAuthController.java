package com.teja.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teja.auth.service.UserAuthService;

@RestController
public class UserAuthController {
    @Autowired
    private UserAuthService authService;
    @GetMapping("/login")
    public ResponseEntity<String> userLogin(@RequestParam(name = "code") String code){
        return ResponseEntity.ok(authService.userLogin(code));
    }
}
