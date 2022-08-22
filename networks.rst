================
Cloud / Networks
================

In this page, you can do as follow:

    * :ref:`get-me-a-network`
    * :ref:`create-new-networks`
    * :ref:`search-networks`
    * :ref:`sort-networks`
    * :ref:`edit-networks`
    * :ref:`add-subnet`
    * :ref:`remove-subnet`
    * :ref:`delete-networks`

.. _get-me-a-network:

Get me a network
================

**Important**: For the "Get me a network feature to work" staff must configure it. More details at :doc:`Staff Networks </staff/networks>`.

A simple way to create a private network connected to the outside world, is to use this feature.
Go to **Networks** from the Main Menu, Cloud and then to **Get me a network** (bottom right).

.. image:: /_static/images/enduser/cloud/networks/networks-get-me.png

You only have to chose the region. A network will be created with with the name 'auto_allocated_network', a router with the name
'auto_allocated_router' with external gateway to the default external network, and an interface to the created network.

.. _create-new-networks:

Create new network
==================

To create a new network go to **Networks** from the Main Menu, Cloud and then to **Create network** (bottom right).

.. image:: /_static/images/enduser/cloud/networks/networks.png

You have to set here a name for the new network, select the region, and optionally give description and creation for a subnet.
If you wish to create a subnet you have two more forms to complete.

.. _search-networks:

Search networks
===============

To search a network, just type the network in the search box from the top of the **Networks** page.

.. image:: /_static/images/enduser/cloud/networks/network-search.png

.. _sort-networks:

Sort networks
=============

From the top-right of the page, you can sort networks by:

    * Name
    * Created at
    * Region

.. image:: /_static/images/enduser/cloud/networks/networks-sort.png

Also you can switch from **Card View** to **List View** by clicking on the grid from top-right. Examples are shown below:

.. image:: /_static/images/enduser/cloud/networks/networks-cards.png
.. image:: /_static/images/enduser/cloud/networks/networks-list.png

.. _edit-networks:

Edit networks
=============

To edit a network select it from your list. You can edit name, description and admin state up properties.

.. image:: /_static/images/enduser/cloud/networks/edit-networks.png

.. _add-subnet:

Add subnet
==========

You can add a network subnet by clicking on **Add subnet** button.

.. image:: /_static/images/enduser/cloud/networks/networks-add-subnet.png

.. _remove-subnet:

Remove subnet
=============

You remove a subnet by clicking on **Delete subnet** button.

.. image:: /_static/images/enduser/cloud/networks/networks-remove-subnet.png

.. _delete-networks:

Delete networks
===============

To delete a network select it from your list and hit **Delete**.

.. image:: /_static/images/enduser/cloud/networks/networks-delete.png
