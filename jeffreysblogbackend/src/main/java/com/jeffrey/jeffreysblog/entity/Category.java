package com.jeffrey.jeffreysblog.entity;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Category {
    private String categoryId;
    private String categoryName;
    private String textColor;
    private String bgColor;

    public Category() {
    }

    public Category(String categoryId, String categoryName, String textColor, String bgColor) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.textColor = textColor;
        this.bgColor = bgColor;
    }

    @Override
    public String toString() {
        return "Category{" +
                "categoryId='" + categoryId + '\'' +
                ", categoryName='" + categoryName + '\'' +
                ", textColor='" + textColor + '\'' +
                ", bgColor='" + bgColor + '\'' +
                '}';
    }
}
