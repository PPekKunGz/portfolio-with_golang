package models

type Project struct {
	ID           int      `json:"id"`
	Title        string   `json:"title"`
	Description  string   `json:"description"`
	URL          string   `json:"url"`
	Image        string   `json:"image"` // เพิ่มฟิลด์ image
	Technologies []string `json:"technologies"`
}
