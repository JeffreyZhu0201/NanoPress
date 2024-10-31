package com.jeffrey.jeffreysblog.mapper;

import com.jeffrey.jeffreysblog.entity.Account;
import com.jeffrey.jeffreysblog.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface AccountMapper {

    @Select("SELECT FROM #{dataBase} WHERE id=#{id}")
    public Account getAccountById(String dataBase,Integer id);

    @Select("SELECT FROM #{dataBase} WHERE userName=#{account.userName}")
    public Account getAccountByUserName(String dataBase,@Param("account") Account account);


}
