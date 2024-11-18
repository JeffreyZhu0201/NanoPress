package com.jeffrey.jeffreysblog.mapper;

import com.jeffrey.jeffreysblog.entity.Account;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface AccountMapper {

    Account getAccountById(@Param("dataBase") String dataBase,Integer id);

    Account getAccountByUserName(@Param("dataBase") String dataBase,@Param("account") Account account);

    Account getAccountByUserEmail(@Param("dataBase") String dataBase,@Param("account") Account account);

    Boolean insertAccount(String dataBase,@Param("account") Account account);


}
