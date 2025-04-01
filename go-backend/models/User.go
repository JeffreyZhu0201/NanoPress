/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:24:00
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-01 19:47:13
 * @FilePath: \go-backend\models\User.go
 * @Description: File Description Here...
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */

package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id       uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Email    string `json:"email" gorm:"unique"`
	Password string `json:"password"`
	Username string `json:"username"`
	Avatar   string `json:"avatar"`
}
