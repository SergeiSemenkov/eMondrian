__NUXT_JSONP__("/docs/setup/install_docker_ubuntu", (function(a){return {data:[{},{data:"Install eMondrian as Docker Container on Ubuntu\n============\nModified *12 December 2021*\n\nThis instruction describes how to install eMondrian as a docker container on Ubuntu.\n\nIf you do not have a docker engine on your machine, you need to do it first.\n\nInstall Docker Engine on Ubuntu\n------------\nYou can look for more details [here](https:\u002F\u002Fdocs.docker.com\u002Fengine\u002Finstall\u002Fubuntu\u002F).\n``` plaintext\nsudo apt-get update\n\nsudo apt-get install \\\nca-certificates \\\ncurl \\\ngnupg \\\nlsb-release\n```\nAdd Docker’s official GPG key:\n``` plaintext\ncurl -fsSL https:\u002F\u002Fdownload.docker.com\u002Flinux\u002Fubuntu\u002Fgpg | sudo gpg --dearmor -o \u002Fusr\u002Fshare\u002Fkeyrings\u002Fdocker-archive-keyring.gpg\n```\nUse the following command to set up the stable repository.\n``` plaintext\necho \\\n\"deb [arch=$(dpkg --print-architecture) signed-by=\u002Fusr\u002Fshare\u002Fkeyrings\u002Fdocker-archive-keyring.gpg] https:\u002F\u002Fdownload.docker.com\u002Flinux\u002Fubuntu \\\n$(lsb_release -cs) stable\" | sudo tee \u002Fetc\u002Fapt\u002Fsources.list.d\u002Fdocker.list \u003E \u002Fdev\u002Fnull\n```\nInstall docker engine:\n``` plaintext\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n```\nCheck your docker engine installation. Run the following command:\n``` plaintext\nsudo docker run hello-world\n```\nIf you see this image then your installation is successful.\n![](\u002FeMondrian\u002F_nuxt\u002Fcontent\u002Fdocs\u002Fsetup\u002Finstall_docker_ubuntu\u002Fhello_from_docker.png)\n\nInstall eMondrian\n------------\nPull the eMondrian image from Docker Hub.\n``` plaintext\nsudo docker pull emondrian\u002Femondrian\n```\nTo start the eMondrian execute next command:\n``` plaintext\nsudo docker run -p 8080:8080 emondrian\u002Femondrian\n```\nTo start a container in detached mode, use -d option.\n``` plaintext\nsudo docker run -d -p 8080:8080 emondrian\u002Femondrian\n```\nYou can check that eMondrian is installed successfully with this address [http:\u002F\u002Flocalhost:8080\u002Femondrian](http:\u002F\u002Flocalhost:8080\u002Femondrian).\nYou have to see:\n![](\u002FeMondrian\u002F_nuxt\u002Fcontent\u002Fdocs\u002Fsetup\u002Finstall_docker_ubuntu\u002Femondiran_site.png)\n\nSee how to connect to eMondrian from Excel [here](\u002FeMondrian\u002Fdocs\u002Fclient_tools\u002Fexcel_connect).\n"}],fetch:{"data-v-abe39318:0":{files:[{name:a,path:a,originalDocumentContent:".\u002Fcontent\u002Fdocs\u002FIntroduction\u002FIntroduction.md",baseFolder:"content\u002Fdocs\u002FIntroduction"},{name:"Original mondrian documentation",path:"original_mondrian_docs",originalDocumentContent:".\u002Fcontent\u002Fdocs\u002Foriginal_mondrian_docs\u002Foriginal_mondrian_docs.md",baseFolder:"content\u002Fdocs\u002Foriginal_mondrian_docs"},{name:"XMLA service address",path:"xmla_address",originalDocumentContent:".\u002Fcontent\u002Fdocs\u002Fxmla_address\u002Fxmla_address.md",baseFolder:"content\u002Fdocs\u002Fxmla_address"},{name:"Client Tools",children:[{name:"How to connect from Excel",path:"client_tools\u002Fexcel_connect",originalDocumentContent:".\u002Fcontent\u002Fdocs\u002Fclient_tools\u002Fexcel_connect\u002Fexcel_connect.md",baseFolder:"content\u002Fdocs\u002Fclient_tools\u002Fexcel_connect"}]},{name:"Install eMondrian as Docker Container on Ubuntu",path:"setup\u002Finstall_docker_ubuntu",originalDocumentContent:".\u002Fcontent\u002Fdocs\u002Fsetup\u002Finstall_docker_ubuntu\u002Finstall_docker_ubuntu.md",baseFolder:"content\u002Fdocs\u002Fsetup\u002Finstall_docker_ubuntu"}]}},mutations:void 0}}("Introduction")));