How to connect from Excel
============
Modified *28 November 2021*

Get address of your eMondrian XMLA service
-----------------------------
See [here](/eMondrian/docs/xmla_address) how to get your eMondrian XMLA service address.

In this example an address is
``` plaintext
http://192.168.100.4:8080/emondrian/xmla
```
Connect from Excel
-----------------------------
Open **Excel**, select the **Data** tab, then **Get Data** -> **From Database** -> **From Analysis Services**.

![](__contentFolder__/excel_datasource.png)

Paste address of Mondrian XMLA service as Server name and click Next.

![](__contentFolder__/excel_connection.png)

Then choose a cube and click Finish. The PivotTable with cube data will appear.

![](__contentFolder__/excel_result.png)

