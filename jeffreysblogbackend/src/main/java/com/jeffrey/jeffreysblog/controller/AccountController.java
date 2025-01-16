package com.jeffrey.jeffreysblog.controller;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Account;
import com.jeffrey.jeffreysblog.service.AccountService;
import jakarta.annotation.Resource;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/account")
public class AccountController {

    @Resource
    AccountService accountService;

    @PostMapping("/login")
    public Result login(@RequestBody Account account, @Param("role") String role) {
        return accountService.login(role, account);
    }

    @PostMapping("/register")
    public Result register(@RequestBody Account account, @Param("role") String role) {
        return accountService.register(role,account);
    }

    @GetMapping("/get")
    public Result getAccount(@RequestBody Account account, @Param("role") String role) {
        return accountService.getAccount(role,account);
    }


}
