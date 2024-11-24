package main

import (
	"backend/config"
	"backend/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	// โหลด environment variables
	config.LoadEnv()

	// เชื่อมต่อกับ MariaDB
	db := config.ConnectDB()
	defer db.Close()

	// สร้าง Fiber app
	app := fiber.New()

	// เพิ่ม Middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",                              // อนุญาต Origin ของ Frontend
		AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH", // อนุญาต Methods
	}))

	// เพิ่ม routes
	routes.RegisterRoutes(app, db)

	app.Static("/data", "./public")
	routes.LanguageRoutes(app)

	// รันเซิร์ฟเวอร์
	log.Fatal(app.Listen(":3001"))
}
