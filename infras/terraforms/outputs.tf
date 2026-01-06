output "ecr_backend_repository_url" {
  description = "URL of the backend ECR repository"
  value       = aws_ecr_repository.backend.repository_url
}

output "ecr_frontend_repository_url" {
  description = "URL of the frontend ECR repository"
  value       = aws_ecr_repository.frontend.repository_url
}

output "ecs_cluster_name" {
  description = "Name of the ECS cluster"
  value       = aws_ecs_cluster.main.name
}

output "ecs_backend_service_name" {
  description = "Name of the backend ECS service"
  value       = aws_ecs_service.backend.name
}

output "ecs_frontend_service_name" {
  description = "Name of the frontend ECS service"
  value       = aws_ecs_service.frontend.name
}

output "frontend_alb_dns_name" {
  description = "DNS name of the Frontend Application Load Balancer"
  value       = aws_lb.frontend.dns_name
}

output "backend_alb_dns_name" {
  description = "DNS name of the Backend Application Load Balancer"
  value       = aws_lb.backend.dns_name
}

output "frontend_url" {
  description = "Frontend URL"
  value       = var.frontend_domain != "" ? "https://${var.frontend_domain}" : "http://${aws_lb.frontend.dns_name}"
}

output "backend_url" {
  description = "Backend API URL"
  value       = var.backend_domain != "" ? "https://${var.backend_domain}" : "http://${aws_lb.backend.dns_name}"
}

output "frontend_certificate_arn" {
  description = "Frontend ACM Certificate ARN"
  value       = var.frontend_domain != "" ? aws_acm_certificate.frontend[0].arn : null
}

output "backend_certificate_arn" {
  description = "Backend ACM Certificate ARN"
  value       = var.backend_domain != "" ? aws_acm_certificate.backend[0].arn : null
}

output "route53_zone_id" {
  description = "Route53 Zone ID"
  value       = var.create_route53_zone ? aws_route53_zone.main[0].zone_id : (var.route53_zone_id != "" ? var.route53_zone_id : null)
}

output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

