variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "project_prefix" {
  description = "Prefix for all resources"
  type        = string
  default     = "notetaker"
}

variable "backend_port" {
  description = "Port for backend service"
  type        = number
  default     = 3000
}

variable "frontend_port" {
  description = "Port for frontend service"
  type        = number
  default     = 3000
}

variable "backend_cpu" {
  description = "CPU units for backend task (1024 = 1 vCPU)"
  type        = number
  default     = 256
}

variable "backend_memory" {
  description = "Memory for backend task (MB)"
  type        = number
  default     = 512
}

variable "frontend_cpu" {
  description = "CPU units for frontend task (1024 = 1 vCPU)"
  type        = number
  default     = 256
}

variable "frontend_memory" {
  description = "Memory for frontend task (MB)"
  type        = number
  default     = 512
}

variable "desired_count" {
  description = "Desired number of tasks for each service"
  type        = number
  default     = 1
}

variable "dynamodb_table_name" {
  description = "DynamoDB table name"
  type        = string
  default     = "todos"
}

variable "domain_name" {
  description = "Root domain name for the application (e.g., example.com)"
  type        = string
  default     = ""
}

variable "frontend_domain" {
  description = "Domain name for frontend (e.g., app.example.com or example.com)"
  type        = string
  default     = ""
}

variable "backend_domain" {
  description = "Domain name for backend API (e.g., api.example.com)"
  type        = string
  default     = ""
}

variable "create_route53_zone" {
  description = "Whether to create a Route53 hosted zone"
  type        = bool
  default     = false
}

variable "route53_zone_id" {
  description = "Existing Route53 zone ID (leave empty if creating new zone)"
  type        = string
  default     = ""
}

variable "backend_image_tag" {
  description = "Docker image tag for backend"
  type        = string
  default     = "latest"
}

variable "frontend_image_tag" {
  description = "Docker image tag for frontend"
  type        = string
  default     = "latest"
}

