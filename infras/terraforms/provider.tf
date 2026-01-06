terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Uncomment and configure if using remote state
  # backend "s3" {
  #   bucket = "notetaker-terraform-state"
  #   key    = "terraform.tfstate"
  #   region = "ap-southeast-1"
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = var.project_prefix
      ManagedBy   = "Terraform"
      Environment = var.environment
    }
  }
}

