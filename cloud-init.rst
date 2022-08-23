.. _change-string:

==============================
Cloud / Cloud-Init
==============================

This script is there to assist you with instance configuration at boot
time. It communicates with the meta-data agent of our cloud and, for example,
configures the network of your compute instance as defined by you via our APIs.

Cloud-init is very powerful. It's a de facto multi-distribution and multi-cloud
way of handling the early initialisation of a cloud instance.

When you launch a compute instance on HyperStack, you can pass
initialisation configuration to cloud-init

Examples that illustrate how to perform
common initialisation tasks with cloud-init




 Cloud config

      The cloud config format is the simplest way to accomplish initialisation tasks
      using the cloud-config syntax. The example below illustrates how to upgrade
      all packages on the first boot.

      .. code-block:: bash

        #cloud-config
        # Run a package upgrade on the first boot
        package_upgrade: true

      The example below shows cloud-init being used to change various configuration
      options during boot time, such as the hostname, locale and timezone.

      .. code-block:: bash

        #cloud-config

        # On the Catalyst Cloud, the default username for access to your instances is:
        # - CentOS: centos
        # - CoreOS: core
        # - Debian: debian
        # - Ubuntu: ubuntu
        # - Instances deployed by Heat: ec2-user
        # You can chose a different username with the "user" parameter as shown below.
        user: username

        # Set the hostname and FQDN
        fqdn: hostname.example.com
        manage_etc_hosts: true

        # Set the timezone to UTC (strongly recommended)
        timezone: UTC

        # Set the locale
        locale: en_US.UTF-8

        # Run package update and upgrade on first boot
        package_upgrade: true

        # Mount additional volumes
        mounts:
         - [ /dev/vdb, /mnt, auto ]

        # Install packages
        packages:
         - git
         - sysstat
         - htop
         - apache2

        # Run commands (in order, output displayed on the console)
        runcmd:
         - echo "Sample command"

        # Reboot when finished
        power_state:
         mode: reboot
         message: Rebooting to apply new settings

        # Save a copy of cloud-init's process output (info & errors) to a logfile
        output: {all: '| tee -a /var/log/cloud-init-output.log'}


	
	
Cloud-init official docs
========================

For other formats and more detailed information on how to use cloud-init to
initialise your compute instances, please refer to the `cloud-init official
documentation <http://cloudinit.readthedocs.org/en/latest/index.html>`_.