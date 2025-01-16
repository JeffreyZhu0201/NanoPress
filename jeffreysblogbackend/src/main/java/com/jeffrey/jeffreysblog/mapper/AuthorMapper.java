package com.jeffrey.jeffreysblog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface AuthorMapper {

    @Select("SELECT userName FROM user WHERE id = #{authorId}")
    String getAuthorNameById(String authorId);

}
