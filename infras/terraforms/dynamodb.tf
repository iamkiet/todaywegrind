# DynamoDB Table for Todos
resource "aws_dynamodb_table" "todos" {
  name           = var.dynamodb_table_name
  billing_mode   = "PAY_PER_REQUEST"  # On-demand pricing
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"  # String
  }

  tags = {
    Name        = "${var.project_prefix}-todos-table"
    Environment = var.environment
  }
}

