=================
Cloud / API Users
=================

Behind the scenes, all of the access methods to HyperStack are just accessing the OpenStack APIs. They just provide convenient abstractions to do so. Every action you perform on the HyperStack can be performed via the APIs. This means that you can incorporate custom logic into your applications to modify your infrastructure. This is important for SaaS applications, or applications that otherwise need to scale to meet demand. To make this integration easier, the OpenStack community has developed a range of software development kits (SDKs) for numerous languages. You can find a list here.

HyperStack will accept API requests (including those from the Command Line Interface or Automation tools mentioned above) from anywhere on the Internet.

We limit the rate at which you can make API requests, to ensure that the service is accessible to everyone equally. If you make too many requests in a short amount of time, we will send back an HTTP error message indicating you have exceeded the limits. You may need to configure your software using the API to retry in response to this error message.


To create a new user, access the floating button present in the lower right corner and enter the
user name, password and an optional description as shown below:

.. image:: /_static/images/add_api_user.png


Once a user is created, you will be able to access OpenStack endpoints directly with your project ID, username
and password.

To delete an api user, just click on the delete button in the card or list view as shown below:


.. image:: /_static/images/delete_api_user.png
