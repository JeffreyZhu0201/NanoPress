package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Account;

import org.springframework.stereotype.Service;

@Service
public interface AccountService {

    Result login(String dataBase, Account account);

    Result register(String dataBase, Account account);

    Result getAccount(String dataBase, Account account);

}
