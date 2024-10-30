package com.jeffrey.jeffreysblog.mapper;


import com.jeffrey.jeffreysblog.entity.Post;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Mapper
@Repository
public interface PostMapper {

    @Insert("INSERT INTO posts (authorId,title,createDatetime,content) VALUES (#{authorId},#{title},#{createDatetime},#{content});")
    boolean addPost(String authorId, String title, Date createDatetime, String content);

}
