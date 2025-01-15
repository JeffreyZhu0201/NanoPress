package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Category;
import org.springframework.stereotype.Service;

@Service
public interface CategoryService {

    Result addCategory(Category category);
    Result deleteCategory(String categoryId);
    Result updateCategory(Category category);
    Result getCategoryById(String categoryId);
    Result getAllCategories();
}
