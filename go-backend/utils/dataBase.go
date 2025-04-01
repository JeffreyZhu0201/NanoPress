/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:21:29
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-01 13:21:38
 * @FilePath: \go-backend\utils\dataBase.go
 * @Description: File Description Here...
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */

package utils

import (
	"fmt"
	"go-backend/models"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

// InitDB 初始化数据库连接并返回数据库实例
func InitDB() *gorm.DB {
	cfg := GetDatabaseConfig()
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		cfg.DBUser, cfg.DBPassword, cfg.DBHost, cfg.DBPort, cfg.DBName)
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("数据库连接失败: %v", err)
	}

	// 自动迁移数据库表
	err = DB.AutoMigrate(&models.User{}, &models.Post{}, &models.Comment{})

	if err != nil {
		log.Fatalf("数据库迁移失败: %v", err)
	}

	return DB
}

// GetDB 获取数据库实例
func GetDB() *gorm.DB {
	return DB
}
