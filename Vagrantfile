# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = false

  config.vm.network :forwarded_port, guest: 22, host: 5012, id: 'ssh'

  config.vm.network "private_network", ip: "192.168.50.12"

  #RSYNC based one-way file sharing
  config.vm.synced_folder ".", "/home/vagrant/files",
    type: "rsync",
    rsync__exclude: [".git", "node_modules"]

  config.vm.provider "virtualbox" do |vb|
      # Customize the amount of memory on the VM:
      vb.memory = "768"
      vb.cpus = 1
  end

  # provision VM
  config.vm.provision "shell", path: "provision/swapfile.sh", privileged: true
  config.vm.provision "shell", path: "provision/base.sh", privileged: false

end
