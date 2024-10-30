package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.entity.Post;
import org.springframework.stereotype.Service;

@Service
public interface PostService {

    boolean addPost(Post post);

}
