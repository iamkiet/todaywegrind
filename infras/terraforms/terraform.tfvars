aws_region          = "ap-southeast-1"
environment         = "dev"
project_prefix      = "notetaker"
backend_port        = 3000
frontend_port       = 3000
backend_cpu         = 256
backend_memory      = 512
frontend_cpu        = 256
frontend_memory     = 512
desired_count       = 1
dynamodb_table_name = "todos"

# Docker image tags
backend_image_tag  = "0048060126"
frontend_image_tag = "0048060126"

# Domain configuration
domain_name     = "todaywegrind.com"
frontend_domain = "app.todaywegrind.com"
backend_domain  = "api.todaywegrind.com"

# Route53 configuration
create_route53_zone = true
route53_zone_id     = "" # Leave empty to create new zone

