package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// LoadEnv โหลด environment variables จากไฟล์ .env
func LoadEnv() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found. Using system environment variables")
	}
}

// GetEnv คืนค่าของ environment variable
func GetEnv(key string) string {
	return os.Getenv(key)
}
