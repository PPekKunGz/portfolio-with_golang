package routes

import (
	"database/sql"
	"encoding/json"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)

func RegisterRoutes(app *fiber.App, db *sql.DB) {
	// Route สำหรับดึงข้อมูลโปรเจกต์ทั้งหมด
	app.Get("/projects", func(c *fiber.Ctx) error {
		log.Println("Fetching projects from database...") // เพิ่มข้อความ Debug
		rows, err := db.Query("SELECT id, title, description, url, image, technologies FROM projects")
		if err != nil {
			log.Printf("Error querying database: %v", err)
			return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch projects"})
		}
		defer rows.Close()

		var projects []fiber.Map
		for rows.Next() {
			var id int
			var title, description, url, image string
			var technologies string

			if err := rows.Scan(&id, &title, &description, &url, &image, &technologies); err != nil {
				log.Printf("Error scanning row: %v", err)
				continue
			}

			log.Printf("Fetched project: %v", title) // Debug ข้อมูลที่ดึงมา
			projects = append(projects, fiber.Map{
				"id":           id,
				"title":        title,
				"description":  description,
				"url":          url,
				"image":        image,
				"technologies": technologies,
			})
		}

		return c.JSON(projects)
	})

	// Route สำหรับเพิ่มโปรเจกต์ใหม่
	app.Post("/projects", func(c *fiber.Ctx) error {

		apiKey := os.Getenv("API_KEY")
		if apiKey == "" {
			log.Fatalf("API_KEY not set in .env")
		}
		// ตรวจสอบ API Key จาก Header
		requestAPIKey := c.Get("X-API-Key")
		if requestAPIKey != apiKey {
			return c.Status(401).JSON(fiber.Map{"error": "Unauthorized"})
		}

		var project struct {
			Title        string   `json:"title"`
			Description  string   `json:"description"`
			URL          string   `json:"url"`
			Image        string   `json:"image"`
			Technologies []string `json:"technologies"`
		}

		if err := c.BodyParser(&project); err != nil {
			return c.Status(400).JSON(fiber.Map{"error": "Invalid input"})
		}

		// แปลง Technologies Array ให้เป็น JSON String (กรณีใช้ MariaDB)
		technologiesJSON, err := json.Marshal(project.Technologies)
		if err != nil {
			return c.Status(500).JSON(fiber.Map{"error": "Failed to parse technologies"})
		}

		// เพิ่มโปรเจกต์ใน Database
		_, err = db.Exec(
			"INSERT INTO projects (title, description, url, image, technologies) VALUES (?, ?, ?, ?, ?)",
			project.Title, project.Description, project.URL, project.Image, string(technologiesJSON),
		)
		if err != nil {
			log.Printf("SQL Error: %v", err) // เพิ่มข้อความ Debug Logs
			return c.Status(500).JSON(fiber.Map{"error": "Failed to add project", "details": err.Error()})
		}

		return c.JSON(fiber.Map{"message": "Project added successfully!"})
	})

}
