package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Account;
import com.jeffrey.jeffreysblog.mapper.AccountMapper;
import com.jeffrey.jeffreysblog.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    AccountMapper accountMapper;

    public Result login(String dataBase, Account account) {
        Account dbAccount =  accountMapper.getAccountByUserName(dataBase,account);

        if(dbAccount == null){
            return Result.error("登陆失败,用户未注册!");
        }
        else {
            if(!dbAccount.getUserPassword().equals(account.getUserPassword())){
                return Result.error("用户名或密码错误!");
            }
            else{
                return Result.success(dbAccount);
            }
        }
    }
}
