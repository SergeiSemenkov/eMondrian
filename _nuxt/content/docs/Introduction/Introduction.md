# Introduction

## Welcome to the site of the [**eMondrian**](https://sergeisemenkov.github.io/eMondrian) project.

eMondrian is a free open-source [OLAP](https://en.wikipedia.org/wiki/Online_analytical_processing) server. It is based on the [Mondrian](https://github.com/pentaho/mondrian) project. OLAP server allows you to represent your database as a multidimensional space with dimensions and measures. It hides the complexity of underlying tables and their relations and allows you to interactively analyze data from multiple perspectives. eMondrian server can run on Windows and Linux operating systems.

![Image description](__contentFolder__/scheme.png)

eMondrian supports XML for Analysis (XMLA) standard and OLE DB for OLAP at the level that makes it possible to connect to it from client tools such as Microsoft Excel, Power BI, Tableau and many others. The logic of the original Mondrian was changed in order to improve performance of queries specific to these clients and to support clients’ features, for example Excel’s sessions, calculated members and sets.

Any database that has a [JDBC](https://en.wikipedia.org/wiki/JDBC_driver) driver can be the source for eMondrian. eMondrian server is a Relational OLAP (ROLAP) server that means it always shows real time data from a source. This server runs queries written in the MDX language, reads data from a source database and presents results in a multidimensional format.

The most efficient way is to use [column store databases](https://en.wikipedia.org/wiki/Column-oriented_DBMS) as data sources for eMondrian. For example, [ClickHouse](https://clickhouse.com/) could run as a powerful and fast query engine while eMondrian works as a proxy representing data as cubes and executing MDX queries. 