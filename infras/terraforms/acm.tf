# ACM Certificate for Frontend
resource "aws_acm_certificate" "frontend" {
  count             = var.frontend_domain != "" ? 1 : 0
  domain_name       = var.frontend_domain
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "${var.project_prefix}-frontend-certificate"
  }
}

# ACM Certificate for Backend
resource "aws_acm_certificate" "backend" {
  count             = var.backend_domain != "" ? 1 : 0
  domain_name       = var.backend_domain
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "${var.project_prefix}-backend-certificate"
  }
}

# Route53 Hosted Zone (if domain is in Route53)
resource "aws_route53_zone" "main" {
  count = var.create_route53_zone ? 1 : 0
  name  = var.domain_name

  tags = {
    Name = "${var.project_prefix}-zone"
  }
}

# Route53 Record for Frontend Certificate Validation
resource "aws_route53_record" "frontend_cert_validation" {
  for_each = var.frontend_domain != "" && (var.create_route53_zone || var.route53_zone_id != "") ? {
    for dvo in aws_acm_certificate.frontend[0].domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  } : {}

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = var.route53_zone_id != "" ? var.route53_zone_id : (var.create_route53_zone ? aws_route53_zone.main[0].zone_id : "")
}

# Route53 Record for Backend Certificate Validation
resource "aws_route53_record" "backend_cert_validation" {
  for_each = var.backend_domain != "" && (var.create_route53_zone || var.route53_zone_id != "") ? {
    for dvo in aws_acm_certificate.backend[0].domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  } : {}

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = var.route53_zone_id != "" ? var.route53_zone_id : (var.create_route53_zone ? aws_route53_zone.main[0].zone_id : "")
}

# ACM Certificate Validation for Frontend
resource "aws_acm_certificate_validation" "frontend" {
  count           = var.frontend_domain != "" ? 1 : 0
  certificate_arn = aws_acm_certificate.frontend[0].arn

  validation_record_fqdns = var.create_route53_zone || var.route53_zone_id != "" ? [
    for record in aws_route53_record.frontend_cert_validation : record.fqdn
  ] : []

  timeouts {
    create = "5m"
  }
}

# ACM Certificate Validation for Backend
resource "aws_acm_certificate_validation" "backend" {
  count           = var.backend_domain != "" ? 1 : 0
  certificate_arn = aws_acm_certificate.backend[0].arn

  validation_record_fqdns = var.create_route53_zone || var.route53_zone_id != "" ? [
    for record in aws_route53_record.backend_cert_validation : record.fqdn
  ] : []

  timeouts {
    create = "5m"
  }
}

# Route53 A Record for Frontend ALB
resource "aws_route53_record" "frontend" {
  count   = var.frontend_domain != "" && (var.create_route53_zone || var.route53_zone_id != "") ? 1 : 0
  zone_id = var.route53_zone_id != "" ? var.route53_zone_id : (var.create_route53_zone ? aws_route53_zone.main[0].zone_id : "")
  name    = var.frontend_domain
  type    = "A"

  alias {
    name                   = aws_lb.frontend.dns_name
    zone_id                = aws_lb.frontend.zone_id
    evaluate_target_health = true
  }
}

# Route53 A Record for Backend ALB
resource "aws_route53_record" "backend" {
  count   = var.backend_domain != "" && (var.create_route53_zone || var.route53_zone_id != "") ? 1 : 0
  zone_id = var.route53_zone_id != "" ? var.route53_zone_id : (var.create_route53_zone ? aws_route53_zone.main[0].zone_id : "")
  name    = var.backend_domain
  type    = "A"

  alias {
    name                   = aws_lb.backend.dns_name
    zone_id                = aws_lb.backend.zone_id
    evaluate_target_health = true
  }
}

