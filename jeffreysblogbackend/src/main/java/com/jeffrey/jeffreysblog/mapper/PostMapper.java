package com.jeffrey.jeffreysblog.mapper;


import com.jeffrey.jeffreysblog.entity.Post;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface PostMapper {

    @Insert("INSERT INTO posts (authorId,title,createDatetime,content) VALUES (#{post.authorId},#{post.title},#{post.createDatetime},#{post.content});")
    @Options(useGeneratedKeys = true, keyProperty = "post.id")
    Boolean addPost(@Param("post") Post post);

    @Delete("DELETE FROM posts WHERE id = #{id}")
    Boolean deletePost(Integer id);

    @Update("UPDATE posts SET title=#{post.title},content=#{post.content} WHERE id=#{post.id}")
    Boolean updatePost(@Param("post") Post post);

    @Select("SELECT * FROM posts WHERE id=#{id};")
    Post getPostById(Integer id);

}
