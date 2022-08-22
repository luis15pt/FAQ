===========================================
Billing / Credit auto invoicing
===========================================

With credit auto invoicing, end users are able to configure a client so whenever certain conditions are met,
he'll be invoiced before reaching the credit limit (before a certain number of hours Fleio admin chooses) with the
amount necessary for him to be able to keep his services active for the next month without having to pay in the
meantime any other invoice if his credit consumption remains the same.

Thus, a client that would reach the credit limit every 3 days, will have an invoice generated with an estimated amount
that will make sure no other invoice will be needed in the next 30 days. However, users will also have the option to
choose a fixed amount, rather than the estimated one.

The feature is enabled by default but you can disable it using the
:doc:`advanced settings file </configuring/settings-file>`, setting "False" for related feature
('billing.credit_auto_invoicing'). If enabled, the following page will be accessible from end users profile page.

On the profile page, for each client end-users can enter a page where they can choose to enable the following setting:

.. image:: /_static/images/billing/auto-invoicing/credit_auto_invoicing.png

* Enable auto invoicing

Based on the above setting, the following radio buttons will be enabled and users can choose the scenario that best
fits him

Invoiced amount:

* Estimated monthly consumption
* Fixed amount: _________ USD (or default client currency)

`Estimated monthly consumption` radio button will be selected by default.

Using fleio settings, Fleio administrator can decide on the number of hours before a client runs out of credit and the
automatic invoice is issued (if client has auto invoicing enabled).

The setting designated for this purpose is:

.. code-block:: python

    AUTO_INVOICE_LEAD_TIME_HOURS = 120

Again, you can override this setting using the :doc:`advanced settings file </configuring/settings-file>`.

Auto invoicing will work either inside Fleio or outside it, using an external billing system like fleio-whmcs plugin. If
the ``Generate invoices`` setting from fleio configurations is checked, the external billing system is not used and
invoice generation is done inside Fleio. If the setting is unchecked and an external billing system is used, the
invoices will be created there as long as the related feature is activated and clients are using it.

Considerations
--------------

* If there was an invoice already created for cycle ending/credit addition and was left unpaid it will be taken into
  consideration when trying to auto invoice. For example, if Fleio decides that an invoice of $100 has to be generated
  for a client that uses the auto invoicing feature in order for his services to remain active in the following month
  without reaching the credit limit, but he already has an UNPAID invoice of $30, the auto invoicing feature will
  generate an invoice of the difference, meaning $70.
* The estimated amount for the client to last another 30 days without suspension is affected by the billable seconds
  per month setting. Thus, estimated amount may be somewhat less than one would expect (e.g. one may expect it to be
  24h * 30days * real time consumption cost).
