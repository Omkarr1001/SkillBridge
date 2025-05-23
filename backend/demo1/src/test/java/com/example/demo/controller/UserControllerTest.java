package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class UserControllerTest {

    private UserController userController;

    @BeforeEach
    void setup() {
        userController = new UserController();
    }

    @Test
    void testAddAndGetUsers() {
        User user = new User(1L, "Omkar", "omkar@example.com");
        userController.addUser(user);

        List<User> users = userController.getUsers();
        assertEquals(1, users.size());
        assertEquals("Omkar", users.get(0).getName());
        assertEquals("omkar@example.com", users.get(0).getEmail());
    }
}
