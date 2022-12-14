==================
Billing / Services
==================

On this page the end user can preview his services after an order was submitted.

.. image:: /_static/images/enduser/billing/services/sort-and-switch-view.png

Using the controls from the top right corner of the screen (represented in the above image) you can:

-Sort the services by:

* **Name**: name of the service
* **Created at**: the date when the service was generated
* **Next due date**: next date when the service is due
* **Status**: status of the service ( can be: Active, Pending, Suspended, Terminated, Canceled, Fraud, Archived )

-Switch the items view to:

* **Card view**

.. image:: /_static/images/enduser/billing/services/services-cards.png

* **List view**

.. image:: /_static/images/enduser/billing/services/services-list.png


The enduser has the possibility to request cancellation of any service. To do so, hover over any card on the list page or use the button from the top right corner of the card on the service details page. ( the following image shows the button hovered )

.. image:: /_static/images/enduser/billing/services/service-cancellation-button.png

After clicking the button the following popup is triggered where the user can submit the cancellation request.

.. image:: /_static/images/enduser/billing/services/service-cancellation-request.png

Fields:

* **Cancellation reason** (required): details about the request
* **Cancellation type** (required) - multiple choices:
    * Immediate: service is immediately cancelled
    * On service due date: service will be cancelled on the service due date

After submitting the form the service will be marked with the following label:

.. image:: /_static/images/enduser/billing/services/service-cancellation-label.png

On list view the cancel button is disabled and a warning tooltip informs the user that the service cancellation was already requested

.. image:: /_static/images/enduser/billing/services/cancelled-service-tableview.png