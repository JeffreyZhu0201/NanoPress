package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.jeffrey.jeffreysblog.mapper.CategoryMapper;
import com.jeffrey.jeffreysblog.service.CategoryService;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Category;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Resource
    private CategoryMapper categoryMapper;

    @Override
    public Result addCategory(Category category) {
        category.setId(String.valueOf(UUID.randomUUID()));
        if(categoryMapper.addCategory(category)){
            return Result.success("200","success",category);
        }
        return Result.error("403","add failed",null);
    }

    @Override
    public Result deleteCategory(String categoryId) {
        if(categoryMapper.deleteCategory(categoryId)){
            return Result.success("200","success",null);
        }
        return Result.error("403","delete failed",null);
    }

    @Override
    public Result updateCategory(Category category) {
        if(categoryMapper.updateCategory(category)){
            return Result.success("200","success",category);
        }
        return Result.error("403","update failed",null);
    }

    @Override
    public Result getCategoryById(String categoryId) {
        Category category = categoryMapper.getCategoryById(categoryId);
        if(category != null){
            return Result.success("200","success",category);
        }
        return Result.error("403","update failed",null);
    }

    @Override
    public Result getAllCategories() {
        List<Category> allCategories = categoryMapper.getAllCategories();
        if(allCategories != null){
            return Result.success("200","success",allCategories);
        }
        return Result.error("403","update failed",null);
    }
}
