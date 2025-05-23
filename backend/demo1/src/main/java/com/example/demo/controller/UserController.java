package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService = new UserService();

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
 
    
    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }
}
