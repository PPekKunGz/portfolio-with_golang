package config

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql" // Import MySQL Driver
)

// ConnectDB เชื่อมต่อกับ MariaDB
func ConnectDB() *sql.DB {
	// อ่าน Environment Variables
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	// สร้าง Data Source Name (DSN)
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", dbUser, dbPassword, dbHost, dbPort, dbName)

	// เชื่อมต่อ Database
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatalf("Failed to connect to MariaDB: %v", err)
	}

	// ทดสอบการเชื่อมต่อ
	err = db.Ping()
	if err != nil {
		log.Fatalf("Failed to ping MariaDB: %v", err)
	}

	log.Println("Connected to MariaDB successfully!")
	return db
}
