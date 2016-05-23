#!/usr/bin/env bash

mkdir /home/vagrant/.aws

cat >/home/vagrant/.aws/credentials <<EOF
[default]
aws_access_key_id=AKIAI7D4PZX5PTJTIKKQ
aws_secret_access_key=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
EOF

cat >/home/vagrant/.aws/config <<EOF
[default]
region=us-east-1
EOF
