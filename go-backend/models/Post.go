/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:24:11
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 21:48:45
 * @FilePath: \NanoPress\go-backend\models\Post.go
 * @Description: File Description Here...
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */

package models

import (
	"gorm.io/gorm"
)

type Post struct {
	gorm.Model
	Title    string `json:"title" binding:"required"`
	AutherID *uint  `json:"auther_id" binding:"required"`
	TagId    *uint  `json:"tag_id" binding:"required"`
	Content  string `json:"content" binding:"required"`
	Likes    *uint  `json:"likes" binding:"required"`
	Read     *uint  `json:"read" binding:"required"`
}
