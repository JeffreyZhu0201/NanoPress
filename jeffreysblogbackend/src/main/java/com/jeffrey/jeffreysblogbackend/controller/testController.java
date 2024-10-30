package com.jeffrey.jeffreysblogbackend.controller;


@RestController
public class testController {
    @RequestMapping(value = "/test")
    public String test(){
        return "Hello, world!";
    }
}
