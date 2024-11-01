package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Account;

import org.springframework.stereotype.Service;

@Service
public interface AccountService {

    public Result login(String dataBase, Account account);

    public Result register(String dataBase, Account account);
}
