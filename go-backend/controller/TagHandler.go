package controller

import (
	"go-backend/Var"
	"go-backend/models"
	"go-backend/utils"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateTag(c *gin.Context) {

	//获取标签参数
	tagName, exist := c.GetQuery("tag_name")
	if !exist {
		c.JSON(http.StatusBadRequest, models.Response{Code: 500, Message: Var.PARAMS_ERR})
		return
	}
	log.Default().Println(tagName)
	var existingTag models.Tag
	if err := utils.DB.Model(&models.Tag{}).Where("tag_name = ?", tagName).First(&existingTag).Error; err == nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_EXIST})
		return
	}

	var tag models.Tag
	tag.TagName = tagName
	if err := utils.DB.Create(&tag).Error; err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_ADD_FAILED})
		return
	}
	c.JSON(http.StatusAccepted, models.Response{Code: 200, Message: Var.TAG_ADD_SUCCESSFULLY})
}

func DeleteTag(c *gin.Context) {

	// 获取tag id
	id, exist := c.GetQuery("tag_id")
	if !exist {
		c.JSON(http.StatusBadRequest, models.Response{Code: 500, Message: Var.PARAMS_ERR})
		return
	}
	//将string转换为uint
	parsedID, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}
	var tag models.Tag
	tag.Id = uint(parsedID)
	log.Default().Println(tag.Id)

	if err := utils.DB.Where("id = ?", tag.Id).Delete(&models.Tag{}).Error; err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_DELETE_FAILED})
		return
	} else {
		c.JSON(http.StatusAccepted, models.Response{Code: 200, Message: Var.TAG_DELETE_SUCCESSFULLY})
	}
}
func UpdateTag() {
	// Update the tag in the database
	// Return the updated tag as a JSON response
}

func GetTags(c *gin.Context) {
	var tagsArray []models.Tag

	if err := utils.DB.Find(&tagsArray).Error; err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_GET_FAILED})
		return
	} else {
		c.JSON(http.StatusAccepted, models.Response{Code: 200, Message: Var.TAG_GET_SUCCESSFULLY, Data: map[string]interface{}{"tags": tagsArray}})
		return
	}
}
