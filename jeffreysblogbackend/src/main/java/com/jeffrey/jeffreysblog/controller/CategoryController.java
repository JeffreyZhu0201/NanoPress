package com.jeffrey.jeffreysblog.controller;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Category;
import com.jeffrey.jeffreysblog.service.CategoryService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Resource
    private CategoryService categoryService;

    @GetMapping("/getcategorybyid")
    public Result getCategoryById(@RequestParam(value = "categoryId") String categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

    @PostMapping("/addcategory")
    public Result addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @PostMapping("/deletecategory")
    public Result deleteCategory(@RequestParam(value = "categoryId") String categoryId) {
        return categoryService.deleteCategory(categoryId);
    }

    @PostMapping("/updatecategory")
    public Result updateCategory(Category category) {
        return categoryService.updateCategory(category);
    }

}
