How to connect from Tableau Desktop
============
Modified *11 December 2021*

Get address of your eMondrian XMLA service
-----------------------------
See [here](/eMondrian/docs/xmla_address) how to get your eMondrian XMLA service address.

In this example an address is
``` plaintext
http://192.168.100.4:8080/emondrian/xmla
```
Connect from Tableau Desktop
-----------------------------
Open **Tableau Desktop**, select the **Data** menu item, then **New Data Source**. Select **To a Server** -> **More...** -> **Microsoft Analysis Services**.

Paste address of Mondrian XMLA service as **Server** and click **Sign In**.

![](__contentFolder__/tableau_datasource.png)

Then choose a cube and go to Worksheet.

![](__contentFolder__/tableau_cubes.png)

A Worksheet  with cube data will appear.

![](__contentFolder__/tableau_result.png)

