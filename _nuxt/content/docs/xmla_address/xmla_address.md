XMLA service address
============
Modified *28 November 2021*

To connect to your eMondrian server you need to know eMondrian XMLA service address. 

If you connect to eMondrian from the same machine as where your eMondrian server is hosted, you can use following address:
```
http://localhost:8080/emondrian/xmla
```
If you connect from other machine first, you have to get an ip address of the server where eMondrian is hosted. To do it run the following command:

* in **Linux** Terminal run 
```
hostname -I
```
* in **Windows** Command Prompt run
```
ipconfig
```

In order to get address of your eMondrian XMLA service you have to insert your server ip in the following template
```
http://<your_server_address>:8080/emondrian/xmla
```
For example, if your server address is `192.168.100.4`, your XMLA service address will be 
```
http://192.168.100.4:8080/emondrian/xmla
```
.
