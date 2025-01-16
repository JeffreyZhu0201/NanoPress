package com.jeffrey.jeffreysblog.controller;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.service.AuthorService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/author")
@CrossOrigin
public class AuthorController {

    @Resource
    private AuthorService authorService;

    @GetMapping("/getauthornamebyid")
    public Result getAuthorNameById(@RequestParam(value = "authorId") String authorId) {

        return authorService.getAuthorNameById(authorId);
    }

}
