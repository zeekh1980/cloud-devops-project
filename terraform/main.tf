provider "aws" {
  region = "eu-north-1"
}

# Create ECR repository
resource "aws_ecr_repository" "devops-app-terraform" {
  name = "devops-app-terraform"
}

# Create ECS cluster
resource "aws_ecs_cluster" "devops_cluster" {
  name = "devops-cluster"
}

# ECS Task definition
resource "aws_ecs_task_definition" "app_task" {
  family                   = "devops-app"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name  = "devops-app"
      image = "nginx"
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
        }
      ]
    }
  ])
}
