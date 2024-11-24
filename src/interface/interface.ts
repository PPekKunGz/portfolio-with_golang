import { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: string;
}

export interface Languages {
  name: string,
  icon: IconType
  link: string
  enabled: boolean
}

export interface GithubUser {
  description?: string;
  name?: string;
  avatar_url?: string;
  html_url?: string;
  bio: string;
  login: string;
}