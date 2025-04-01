/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:24:11
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-01 13:27:43
 * @FilePath: \go-backend\models\Post.go
 * @Description: File Description Here...
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */

package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	AutherID uint   `json:"auther_id"`
	PostID   uint   `json:"post_id"`
	Content  string `json:"content"`
	Likes    uint   `json:"likes"`
	Read     uint   `json:"read"`
}
