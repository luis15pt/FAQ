Cloud / Security Groups
=======================


On this page the end user can manage security groups and security rules to manage network traffic.
By default all network traffic is blocked and you define security groups and rules to allow specific network traffic.

When you access this page a list of existing security groups are displayed in card or table format:

.. image:: /_static/images/enduser/cloud/security-groups/list.png
    :scale: 50%


Details
-------

Clicking on a security group will take you to a security group details page:

.. image:: /_static/images/enduser/cloud/security-groups/details.png

Here you can see details for a security group and all the rules belonging to that group


Add a new group
---------------

To add a new security group click the add button on the bottom right of the page:

.. image:: /_static/images/enduser/cloud/security-groups/add-new.png

After you click the add button a create security group dialog will be displayed:

.. image:: /_static/images/enduser/cloud/security-groups/create.png

To create the security group select openstack region, fill up the group name and description and click ``Create``.


Edit a new group
----------------

To edit an existing group click edit button on groups list or on group details.
When you click the edit button the edit group dialog will be displayed:

.. image:: /_static/images/enduser/cloud/security-groups/edit.png

In this dialog you can change group name or description.


Delete a security group
-----------------------

To delete an existing group click delete button on group list or on group details.
When you click the delete button a confirmation dialog will be displayed:

.. image:: /_static/images/enduser/cloud/security-groups/delete.png

Clicking ``Delete security group`` will delete the group.


Creating security rules
-----------------------

In order to allow network traffic you will need to add some security rules.
To add a new security rule click ``Add rule`` button on security group list or details pages.
When you click add a dialog will appear that allows you to create a new security rule:

.. image:: /_static/images/enduser/cloud/security-groups/add-rule-DNS.png

The following fields are available for a rule:

* ``Rule`` - The type of rule
* ``Direction`` - The direction of network traffic for the rule - can be `Ingress` or `Egress`
* ``Remote`` - You can select here a CIDR or another security group
* ``CIDR`` - The CIDR to apply the rule for
* ``Remote security group`` - The remote security group to apply this rule for
* ``Ether type`` - Here you can select ethernet protocol, can be either `IPv4` or `IPv6`

For specific kinds of rules more fields are available.


The custom ICMP rule create dialog looks like this:

.. image:: /_static/images/enduser/cloud/security-groups/add-rule-custom-ICMP.png

and has the following extra fields:

* ``ICMP Type`` - type of ICMP packet
* ``ICMP Code`` - the ICMP error codes


The custom TCP rule create dialog looks like this:

.. image:: /_static/images/enduser/cloud/security-groups/add-rule-custom-TCP.png

and has the following extra fields:

* ``Port`` - the TCP port to apply this rule to
* ``All ports`` - checkbox allowing you to apply this rule to all TCP ports


The custom other protocol create dialog looks like this:

.. image:: /_static/images/enduser/cloud/security-groups/add-rule-other-protocol.png

and has the following extra fields:

* ``Protocol`` - the protocol code
* ``Port`` - the port to apply this rule to
* ``All ports`` - checkbox allowing you to apply this rule to all ports


Deleting security rules
-----------------------

Security rules can be deleted on security group details page.
