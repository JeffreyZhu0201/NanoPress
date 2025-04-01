package models

import "gorm.io/gorm"

type Tag struct {
	gorm.Model
	Id      uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	TagName string `json:"tag_ame"`
}
