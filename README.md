# Whosay Serverless Infrastructure

## Repo Structure

Each root folder contains lambda and gateway definitions for per product.
These are: [core](./core) for whosay-core and [dataslinger](./datasligner) related lambda functions.

Each of the above root folders is in turn a root [Servless](https://github.com/serverless/serverless) project.

## Getting Started

A [Vagrantfile](./Vagrantfile) is provided which will provision an ubuntu VM along with Node 4.3.x.

1. Copy the [provision/aws.sample.sh](./provision/aws.sample.sh) into `provision/aws.sh`
2. Obtain the required AWS Access ID and Key and set in `provision/aws.sh`
3. Provision the VM `vagrant up` - this will provision and sync the repo to `/home/vagrant/files`
4. `vagrant ssh` to SSH into the VM then `cd files/core && sls init` to initialize the **core** Serverless project

## Projects

* [whosay-core](./core)
* [Dataslinger](./dataslinger)

## Deployment

`gulp deploy:core:all`
`gulp deploy:core:functions`
`gulp deploy:core:gateways`

`gulp deploy:ds:all`
`gulp deploy:ds:functions`
`gulp deploy:ds:gateways --function=dummy`

