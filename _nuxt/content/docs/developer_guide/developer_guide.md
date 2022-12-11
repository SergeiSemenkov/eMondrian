eMondrian Developer Guide
============
Modified *11 December 2022*

Purpose
-----------------------------
This guide covers main tasks that developers do to change, deploy  and mountain eMondrian engine. These tasks are:
* Building eMondrian from the source code;
* Deploying eMondrian on application server;
* Tuning eMondrian to existing server environment;
* Maintaining database schema.

Building
-----------------------------
This instruction was tested on:
* Ubuntu 20.04
* Amazon Linux 2

### Requirements
* JDK 11
* Maven 3.3 or higher

#### How to get Linux version
``` plaintext
cat /etc/os-release
```
### JDK
#### Ubuntu 20.04.4 LTS
``` plaintext
sudo apt-get update
```

To check the current version of java use the following command.
``` plaintext
java -version
```

Install JDK version 11.
``` plaintext
sudo apt-get install openjdk-11-jdk
```
#### Amazon Linux 2
``` plaintext
sudo yum update
```

To check the current version of java use the following command.
``` plaintext
java -version
```
To get which java version has javac
``` plaintext
yum provides '*/javac'

sudo yum install java-11-amazon-corretto-headless
```

### Maven
#### Ubuntu 20.04.4 LTS
To set up Maven run the following command.
``` plaintext
sudo apt install maven
```
#### Amazon Linux 2
``` plaintext
cd /tmp

sudo wget https://www-eu.apache.org/dist/maven/maven-3/3.8.5/binaries/apache-maven-3.8.5-bin.tar.gz

sudo tar xf /tmp/apache-maven-*.tar.gz -C /opt

sudo ln -s /opt/apache-maven-3.8.5 /opt/maven

sudo nano /etc/profile.d/maven.sh
```

insert following text

``` plaintext
export JAVA_HOME=/usr/lib/jvm/jre-11-openjdk
export M2_HOME=/opt/maven
export MAVEN_HOME=/opt/maven
export PATH=${M2_HOME}/bin:${PATH}
```

**Ctrl-S Ctrl-X**

``` plaintext
sudo chmod +x /etc/profile.d/maven.sh

source /etc/profile.d/maven.sh

mvn -version
```
### Git
To set up Git run the following command.
#### Ubuntu 20.04.4 LTS
``` plaintext
sudo apt install git
```
#### Amazon Linux 2
``` plaintext
sudo yum install git
```
### Getting Mondrian Source
Current Mondrian source code for eMondrian is contained in the *eMondrian* branch  of *SergeiSemenkov/mondrian* fork (https://github.com/SergeiSemenkov/mondrian).

Create a folder for Mondrian.
``` plaintext
mkdir ~/repo

cd  ~/repo
```

If you need, remove the previous version.
``` plaintext
rm -rf ~/repo/mondrian
```

Clone eMondrian branch.
``` plaintext
git clone -b eMondrian https://github.com/SergeiSemenkov/mondrian.git
```
### Building Mondrian
To build Mondrian run commands.
``` plaintext
cd ~/repo/mondrian

mvn install
```
The build result will be placed in maven local repository
### Getting eMondrian Source
If you need, remove the previous version.
``` plaintext
rm -rf ~/repo/eMondrian
```

Clone eMondrian branch.
``` plaintext
cd  ~/repo

git clone https://github.com/SergeiSemenkov/eMondrian.git
```
### Building eMondrian
To build eMondrian run commands.
``` plaintext
cd ~/repo/eMondrian

mvn package
```
The build result *emondrian.war* will be in folder *~/repo/eMondrian/target*

Deploying
-----------------------------
Copy eMondrian.war file to the webapps directory of your java server (Apache Tomcat, Jetty, Tiny Java Web Server).
### Docker
In order to configure eMondrian instance we have to change three files in eMondrian web application:
#### /WEB-INF/datasources.xml
Contains data source description and path to schema file.
#### /WEB-INF/schema/schema.xml
Schema file.
#### /WEB-INF/classes/mondrian.properties
Server configuration properties.
To prepare a docker file we must unpack the source web archive and rewrite three files described above.

Tuning
-----------------------------
### Configuration
To tune the server for your needs you can change [mondrian server properties](https://sergeisemenkov.github.io/eMondrian/original_docs/configuration.html) that are contained in */WEB-INF/classes/mondrian.properties*.
Descriptions of properties are in the file and also it’s online.

Below are some properties which are important for configurations that have to work with Excel.
#### mondrian.olap.SsasCompatibleNaming
Set this property to true. If true, hierarchies are named [Dimension].[Hierarchy]; if false, [Dimension.Hierarchy].
#### mondrian.server.IdleOrphanSessionTimeout
This property sets the time which session lives while it is idle.The server will close a session if it is not in use for the specified timeout. Default value is 3600 seconds.
#### mondrian.server.EnableSessionCaching
Set this property to true if you want to create a cache for every session.
### Datasources
By default datasource settings are in file */WEB-INF/datasources.xml*.

It contains data source connection string and reference to file where mondrian schema resides. 

By default folder for schema files is */WEB-INF/schema/*

#### ClickHouse

Here are some details about ClickHouse data source info.

``` plaintext
<DataSourceInfo>Provider=mondrian;jdbc:clickhouse://<host>:<port>[/<database>][&ssl=true][user=<my_user>][&password=<my_password>];JdbcDrivers=ru.yandex.clickhouse.ClickHouseDriver</DataSourceInfo>
```


* host - ClickHouse host
* port - ClickHouse port
* my_user - ClickHouse user name
* my_password - user password
* Set ssl=true if using https

### Schema

A schema defines a multi-dimensional database. It contains a logical model, consisting of cubes, hierarchies, and members, and a mapping of this model onto a physical model.

[This link](https://sergeisemenkov.github.io/eMondrian/original_docs/schema.html) contains a description of schema elements.

Many calculated items are defined in MDX language. Quick introduction of MDX is [here](https://sergeisemenkov.github.io/eMondrian/original_docs/mdx.html).

A schema is a xml file. It can be modified in text editor or with a special Schema Editor.




