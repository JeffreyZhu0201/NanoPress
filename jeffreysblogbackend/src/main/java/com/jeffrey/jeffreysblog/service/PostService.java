package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.entity.Post;
import org.springframework.stereotype.Service;

@Service
public interface PostService {

    Boolean addPost(Post post);

    Boolean deletePost(Integer id);

    Boolean updatePost(Post post);

    Post getPostById(Integer id);


}
