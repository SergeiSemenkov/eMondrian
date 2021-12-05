# eMondrian
eMondrian is a distribution of the Mondrian (R)OLAP engine version.

The main feature of this version is support of ADOMD.NET and Excel clients.

Visit [eMondrian project site](https://sergeisemenkov.github.io/eMondrian/) for more information and documentation.

## Deployment
1. Download [*emondrian.war*](https://github.com/SergeiSemenkov/eMondrian/releases/latest/download/emondrian.war) file.
2. Copy *emondrian.war* file to *webapps* directory of your java server (Apache Tomcat, Jetty, Tiny Java Web Server).

## eMondrian contains: 
- eMondrian Binaries
- Configuration files to deploy eMondrian to a servlet container (like Tomcat, Jetty, etc.)
- Sample databases

## Connect Microsoft Excel to Mondrian Cube:
On Excel **DATA** tab select **From Other Sources** item and then select **From Analysis Services**.
Enter

*http://<your_server_address>:8080/emondrian/xmla* 

as **Server name**.
For example,

*http://localhost:8080/emondrian/xmla*

## Connect ADOMD.Net application to Mondrian Cube
To connect to mondrian from ADOMD.Net application you must use folowing connection string:

*Data Source=http://<your_server_address>:8080/emondrian/xmla;*

For example:

*Data Source=http://localhost:8080/emondrian/xmla;* 
