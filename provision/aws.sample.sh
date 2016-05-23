#!/usr/bin/env bash

mkdir /home/vagrant/.aws

cat >/home/vagrant/.aws/credentials <<EOF
[default]
aws_access_key_id=YOU_ACCESS_ID
aws_secret_access_key=YOUR_ACCESS_KEY
EOF

cat >/home/vagrant/.aws/config <<EOF
[default]
region=us-east-1
EOF
