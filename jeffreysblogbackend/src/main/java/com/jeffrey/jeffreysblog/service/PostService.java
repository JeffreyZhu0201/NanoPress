package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import org.springframework.stereotype.Service;

@Service
public interface PostService {
    Post stringfyParam(Post post);

    Post parseParam(Post post);

    Result addPost(Post post);

    Result deletePost(String postId);

    Result updatePost(Post post);

    Result getPostById(String postId);

    Result getRangePosts(Integer beginPage, Integer count);
}
