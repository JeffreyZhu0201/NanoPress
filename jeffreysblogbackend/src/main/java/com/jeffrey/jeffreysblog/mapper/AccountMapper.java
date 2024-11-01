package com.jeffrey.jeffreysblog.mapper;

import com.jeffrey.jeffreysblog.entity.Account;
import com.jeffrey.jeffreysblog.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface AccountMapper {

    @Select("SELECT * FROM #{dataBase} WHERE id=#{id}")
    public Account getAccountById(String dataBase,Integer id);

    @Select("SELECT * FROM #{dataBase} WHERE userName=#{account.userName}")
    public Account getAccountByUserName(String dataBase,@Param("account") Account account);

    @Select("SELECT * FROM #{dataBase} WHERE userEmail=#{account.userEmail};")
    public Account getAccountByUserEmail(@Param("dataBase") String dataBase,@Param("account") Account account);

    @Insert("INSERT INTO user (userName,userEmail,userPassword,registerDatetime) VALUES (#{account.userName},#{account.userEmail},#{account.userPassword},#{account.registerDatetime});")
    @Options(useGeneratedKeys = true,keyProperty = "account.id")
    public Account insertAccount(String dataBase,@Param("account") Account account);
}
