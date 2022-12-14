================
Cloud / SSH Keys
================

In this page, you can do as follow:

    * :ref:`add-new-ssh-key`
    * :ref:`generate-new-ssh-key`
    * :ref:`search-ssh-key`
    * :ref:`sort-ssh-keys`
    * :ref:`edit-ssh-key`
    * :ref:`delete-ssh-key`
    * :ref:`view-ssh-key-details`
    * :ref:`warnings`

.. important::

   * SSH keys added in Fleio are saved only in the HyperStack database and they are not added in the Openstack keypair
   * On new instance creation the key is deployed trough cloud init

.. _add-new-ssh-key:

Add new SSH key
===============

To add a SSH key which is already created, click on the plus (+) button from the bottom right  **Add SSH Key**.

.. image:: /_static/images/ssh-add-new.png

On the next page fill in these fields:

    * **Name**: *This will set a name for the key, so you can identify it easier.*
    * **Key Content**: *In this field you will add/paste your public key.*
    * Hit "**Add Key**" and a new SSH key will be added.*
  
.. image:: /_static/images/ssh-fields.png


.. _generate-new-ssh-key:

Generate new SSH key
====================

In order to generate a new SSH key from the Fleio interface, click on the plus (+) button from the bottom-right **Add SSH Key**, hit **Generate Key**, then wait a few moments.

.. image:: /_static/images/ssh-generate-new.png

On the next page you can view these fields:

    * **Name**: *This will set a name for the key, so you can identify it easier. Only letters and numbers are accepted.*
    * **Key Content**: *In this field you will see the generated Public Key.*
    * **Private Key**: *This field will provide you the Private Key.*
    * Hit **Add Key** and the new generated SSH key will be added.*
  
.. image:: /_static/images/ssh-generate-new2.png
    
.. note:: **You need to copy your Private Key as it will not be saved on the server.**
  
.. _search-ssh-key:

Search for a SSH key
====================

To search a SSH key from your dashboard, type the name in the search box from the top of the SSH keys page.

.. image:: /_static/images/ssh-search.png

.. _sort-ssh-keys:

Sort SSH keys
=============

From the top-right of the page, you can sort SSH keys by:

    * Name
    * Date created
	
.. image:: /_static/images/ssh-sort3.png
	
Also, you can switch from **Card View** to **List View** by clicking on the grid from top-right. Examples are shown below:

.. image:: /_static/images/ssh-sort.png
.. image:: /_static/images/ssh-sort2.png

.. _edit-ssh-key:

Edit a SSH key
==============

To edit a SSH key, click "Edit" and you will be able to change the "Name" and/or "Key Content". To finish and save the changes press "Save Key".

.. image:: /_static/images/ssh-edit.png

.. _delete-ssh-key:

Delete a SSH key
================

To remove a SSH key you have to identify it in the dashboard and select **Delete**.

.. image:: /_static/images/ssh-delete.png

.. _view-ssh-key-details:

View SSH key details (name, creation date, fingerprint)
=======================================================

SSH key details area
--------------------
	
    - **SSH key name**.
    - **Creation date**: Shows when a SSH key was created in month-day-year format.
    - **Fingerprint**: Shows each Public Key fingerprint which is a sequence of bytes used to identify a longer public key. Fingerprints are created by applying a cryptographic hash function to a Public Key .
   
  .. image:: /_static/images/ssh-details.png

.. _warnings:

Warning - "Invalid SSH public key"
=====================================

If you are prompted with the following message "Invalid SSH public key", when trying to add a new SSH key, you have to check:

    - ``Name``, as there might be some unsafe characters() used - **"Name contains unsafe characters"**
    - ``Key Content``, as the SSH public key added might be invalid - **"Invalid SSH public key."**

.. image:: /_static/images/ssh-warning.png

.. note:: **Before copying your Public Key from a text editor it is recommended to save it as a single line text without empty spaces between characters and then paste it in Fleio interface.**
