package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Account;
import com.jeffrey.jeffreysblog.mapper.AccountMapper;
import com.jeffrey.jeffreysblog.service.AccountService;
import com.jeffrey.jeffreysblog.utils.CryptoUtil;
import com.jeffrey.jeffreysblog.utils.jwtUtils.JWTUtils;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class AccountServiceImpl implements AccountService {

    @Resource
    AccountMapper accountMapper;

    CryptoUtil cryptoUtil;

    public Result login(String dataBase, Account account) {
        Map<String, String> payload = new HashMap<>();
        try{
            Account dbAccount =  accountMapper.getAccountByUserEmail(dataBase,account);
            if(dbAccount == null){
                return Result.error("登陆失败,用户未注册!");
            }
            else {
                if(!dbAccount.getUserPassword().equals(CryptoUtil.encrypt(account.getUserPassword()))){
                    return Result.error("用户名或密码错误!");
                }
                payload.put("userEmail", dbAccount.getUserEmail());
                String token = JWTUtils.getToken(payload);
                return Result.success("200","登录成功",token);
            }
        } catch (Exception e) {
            log.error(e.getMessage());
            return Result.error("发生未知错误,请重试!");
        }
    }

    public Result register(String dataBase, Account account) {

        Map<String, String> payload = new HashMap<>();
        try{
            account.setRegisterDatetime(new Date());
            account.setUserPassword(CryptoUtil.encrypt(account.getUserPassword()));
            if(accountMapper.getAccountByUserEmail(dataBase,account) == null){
                if(accountMapper.insertAccount(dataBase,account)){
                    payload.put("userEmail", account.getUserEmail());
                    String token = JWTUtils.getToken(payload);
                    return new Result("200","注册成功,请登录!",token);
                }
                return Result.error("注册失败");
            }
            return new Result("403","该用户已注册,请登录!",null);
        }
        catch(Exception e){
            log.error(e.getMessage());
            return new Result("403","发生未知错误!");
        }
    }

    public Result getAccount(String dataBase, Account account){
        return new Result("200","123",accountMapper.getAccountByUserEmail(dataBase,account));
    }
}
