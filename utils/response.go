package utils

import "github.com/gofiber/fiber/v2"

// SuccessResponse ส่ง response เมื่อสำเร็จ
func SuccessResponse(c *fiber.Ctx, data interface{}) error {
	return c.JSON(fiber.Map{
		"success": true,
		"data":    data,
	})
}

// ErrorResponse ส่ง response เมื่อเกิดข้อผิดพลาด
func ErrorResponse(c *fiber.Ctx, message string) error {
	return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
		"success": false,
		"error":   message,
	})
}
