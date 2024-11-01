package com.jeffrey.jeffreysblog.mapper;

import com.jeffrey.jeffreysblog.entity.Account;
import com.jeffrey.jeffreysblog.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface AccountMapper {

    public Account getAccountById(@Param("dataBase") String dataBase,Integer id);

    public Account getAccountByUserName(@Param("dataBase") String dataBase,@Param("account") Account account);

    public Account getAccountByUserEmail(@Param("dataBase") String dataBase,@Param("account") Account account);

    public Boolean insertAccount(String dataBase,@Param("account") Account account);


}
