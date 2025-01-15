package com.jeffrey.jeffreysblog.mapper;

import com.jeffrey.jeffreysblog.entity.Category;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
@Repository
public interface CategoryMapper {
    Boolean addCategory(@Param("category") Category category);
    Boolean deleteCategory(String categoryId);
    Boolean updateCategory(@Param("category") Category category);
    Category getCategoryById(String categoryId);
    List<Category> getAllCategories();
}
