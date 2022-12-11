# eMondrian
eMondrian is a free (R)OLAP server. It is a version of the Mondrian.

eMondrian supports XMLA standard. It allows connecting to eMondrian from Excel, Tableau, Power BI and client tools that use ADOMD.NET library.

Visit [eMondrian project site](https://sergeisemenkov.github.io/eMondrian/) for more information and documentation.

## Building
See [eMondrian Developer Guide](https://sergeisemenkov.github.io/eMondrian/docs/developer_guide).

## Deployment
1. Download [*emondrian.war*](https://github.com/SergeiSemenkov/eMondrian/releases/latest/download/emondrian.war) file.
2. Copy *emondrian.war* file to *webapps* directory of your java server (Apache Tomcat, Jetty, Tiny Java Web Server).

## eMondrian contains: 
- eMondrian Binaries
- Configuration files to deploy eMondrian to a servlet container (like Tomcat, Jetty, etc.)
- Sample databases
- The Schema Editor (Alfa Version)

## How to connect to eMondrian:
- [How to connect from Excel](https://sergeisemenkov.github.io/eMondrian/docs/client_tools/excel_connect)
- [How to connect from Tableau Desktop](https://sergeisemenkov.github.io/eMondrian/docs/client_tools/tableau_connect)

## Connect ADOMD.Net application to Mondrian Cube
To connect to mondrian from ADOMD.Net application you must use folowing connection string:

*Data Source=http://<your_server_address>:8080/emondrian/xmla;*

For example:

*Data Source=http://localhost:8080/emondrian/xmla;* 
