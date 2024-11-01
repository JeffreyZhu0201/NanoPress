package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Account;
import com.jeffrey.jeffreysblog.mapper.AccountMapper;
import com.jeffrey.jeffreysblog.service.AccountService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class AccountServiceImpl implements AccountService {

    @Resource
    AccountMapper accountMapper;

    public Result login(String dataBase, Account account) {
        Account dbAccount =  accountMapper.getAccountByUserEmail(dataBase,account);

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

    public Result register(String dataBase, Account account) {
        account.setRegisterDatetime(new Date());
        Account dbAccount =  accountMapper.getAccountByUserEmail(dataBase,account);
        if(dbAccount == null){
            Account newAccount = accountMapper.insertAccount(dataBase,account);
            if(newAccount == null){
                return Result.error("注册失败");
            }
            else{
                return new Result("200","注册成功!请登录",newAccount);
            }
        }
        else {
            return new Result("400","该用户已注册,请登录!",null);
        }
    }

}
