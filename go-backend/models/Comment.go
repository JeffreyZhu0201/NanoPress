/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:24:20
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 21:50:49
 * @FilePath: \NanoPress\go-backend\models\Comment.go
 * @Description: File Description Here...
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */

package models

import "gorm.io/gorm"

type Comment struct {
	gorm.Model
	PostID   uint   `json:"post_id"`
	Content  string `json:"content"`
	AutherID uint   `json:"auther_id"`
	ParentID uint   `json:"parent_id"`
	Like     uint   `json:"like"`
}
