##########Set up the Provider##############
provider "aws" {
  region = "ap-south-1"
}

##########Set up terraform backend ########
terraform {
  backend "s3" {
    bucket  = "cinema-terraform-app-state"
    key     = "app-cinema.tfstate"
    region  = "ap-south-1"
    encrypt = true
  }
}


############prefix to create s3 buckets######
locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Avijit Biswas"
  }
}

