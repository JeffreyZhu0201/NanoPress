package models

import "gorm.io/gorm"

type Tag struct {
	gorm.Model
	TagName string `json:"tag_name"`
}
