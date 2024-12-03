package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import org.springframework.stereotype.Service;

@Service
public interface PostService {

    Result addPost(Post post);

    Result deletePost(Integer id);

    Result updatePost(Post post);

    Result getPostById(Integer id);

    Result getRangePosts(Integer beginPage, Integer count);
}
