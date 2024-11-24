package routes

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

func LanguageRoutes(app *fiber.App) {
	app.Get("/post-json", func(c *fiber.Ctx) error {
		// Path to JSON file in the "public" folder
		filePath := "./public/data.json"

		// Read JSON file
		jsonData, err := ioutil.ReadFile(filePath)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to read JSON file")
		}

		// Prepare POST request
		url := "http://localhost:3000/receive" // Replace with your desired endpoint
		resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to POST JSON")
		}
		defer resp.Body.Close()

		// Read response from POST request
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("Failed to read response from POST request")
		}

		// Return the response received from POST
		return c.SendString(fmt.Sprintf("Response from POST: %s", string(body)))
	})

	// Route for receiving posted JSON
	app.Post("/receive", func(c *fiber.Ctx) error {
		var data map[string]interface{}
		if err := json.Unmarshal(c.Body(), &data); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString("Invalid JSON")
		}

		// Print received JSON
		fmt.Printf("Received JSON: %v\n", data)

		// Return success message
		return c.JSON(fiber.Map{
			"status":  "success",
			"message": "JSON received successfully",
			"data":    data,
		})
	})
}
