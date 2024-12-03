package com.jeffrey.jeffreysblog.mapper;


import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface PostMapper {

    Boolean addPost(@Param("post") Post post);

    Boolean deletePost(Integer id);

    Boolean updatePost(@Param("post") Post post);

    Post getPostById(Integer id);

    Post getRangePosts(Integer beginIndex, Integer count);
}
