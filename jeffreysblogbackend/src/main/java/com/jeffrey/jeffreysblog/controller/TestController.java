package com.jeffrey.jeffreysblog.controller;


import com.jeffrey.jeffreysblog.common.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//TestController.java
@RestController
public class TestController {
    @RequestMapping(value = "/test")
    public Result test(){

        return new Result("200","成功!",null);
    }
}
