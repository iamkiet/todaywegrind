# Security Group for Frontend ALB
resource "aws_security_group" "alb_frontend" {
  name        = "${var.project_prefix}-frontend-alb-sg"
  description = "Security group for Frontend Application Load Balancer"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_prefix}-frontend-alb-sg"
  }
}

# Security Group for Backend ALB
resource "aws_security_group" "alb_backend" {
  name        = "${var.project_prefix}-backend-alb-sg"
  description = "Security group for Backend Application Load Balancer"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_prefix}-backend-alb-sg"
  }
}

# Security Group for Frontend ECS Tasks
resource "aws_security_group" "ecs_frontend" {
  name        = "${var.project_prefix}-frontend-ecs-sg"
  description = "Security group for Frontend ECS tasks"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "Allow traffic from Frontend ALB"
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_frontend.id]
  }

  ingress {
    description = "Allow self-referential traffic for health checks"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    self        = true
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_prefix}-frontend-ecs-sg"
  }
}

# Security Group for Backend ECS Tasks
resource "aws_security_group" "ecs_backend" {
  name        = "${var.project_prefix}-backend-ecs-sg"
  description = "Security group for Backend ECS tasks"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "Allow traffic from Backend ALB"
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_backend.id]
  }

  ingress {
    description = "Allow self-referential traffic for health checks"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    self        = true
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_prefix}-backend-ecs-sg"
  }
}

