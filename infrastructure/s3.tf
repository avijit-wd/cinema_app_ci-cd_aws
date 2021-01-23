############################
# s3 resources
############################

# We can add "Action": [
#                "s3:*"                    
#            ],       if our app has crud operation

resource "aws_s3_bucket" "cinema_app_s3_bucket" {
  bucket        = local.prefix
  acl           = "public-read"
  force_destroy = true

  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"                    
            ],
            "Resource": "arn:aws:s3:::${local.prefix}/*"
        }
    ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
  versioning {
    enabled = true
  }
  tags = local.common_tags
}
