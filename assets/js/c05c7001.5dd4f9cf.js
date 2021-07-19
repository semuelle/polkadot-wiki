(self.webpackChunk=self.webpackChunk||[]).push([[9941],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73781:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>u,toc:()=>p,default:()=>c});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l=["components"],s={id:"maintain-guides-how-to-monitor-your-node",title:"Monitor your node",sidebar_label:"Monitor your node"},i=void 0,u={unversionedId:"maintain-guides-how-to-monitor-your-node",id:"maintain-guides-how-to-monitor-your-node",isDocsHomePage:!1,title:"Monitor your node",description:"This guide will walk you through how to set up Prometheus with",source:"@site/../docs/maintain-guides-how-to-monitor-your-node.md",sourceDirName:".",slug:"/maintain-guides-how-to-monitor-your-node",permalink:"/docs/maintain-guides-how-to-monitor-your-node",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-monitor-your-node.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626708399,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"maintain-guides-how-to-monitor-your-node",title:"Monitor your node",sidebar_label:"Monitor your node"},sidebar:"docs",previous:{title:"How to Upgrade Your Validator",permalink:"/docs/maintain-guides-how-to-upgrade"},next:{title:"How to Chill",permalink:"/docs/maintain-guides-how-to-chill"}},p=[{value:"Preparation",id:"preparation",children:[]},{value:"Installing and Configuring Prometheus",id:"installing-and-configuring-prometheus",children:[]},{value:"Starting Prometheus",id:"starting-prometheus",children:[]},{value:"Installing Grafana",id:"installing-grafana",children:[]},{value:"Installing and Configuring Alertmanager (Optional)",id:"installing-and-configuring-alertmanager-optional",children:[{value:"Gmail Setup",id:"gmail-setup",children:[]},{value:"AlertManager Configuration",id:"alertmanager-configuration",children:[]},{value:"AlertManager Integration",id:"alertmanager-integration",children:[]}]}],m={toc:p};function c(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will walk you through how to set up ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," with\n",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," to monitor your node using Ubuntu 18.04 or 20.04."),(0,o.kt)("p",null,"A Substrate-based chain exposes data such as the height of the chain, the number of connected peers\nto your node, CPU, memory usage of your machine, and more. To monitor this data, Prometheus is used\nto collect metrics and Grafana allows for displaying them on the dashboard."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"First, create a user for Prometheus by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-create-home")," flag to disallow ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus"),"\nfrom logging in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),(0,o.kt)("p",null,"Create the directories required to store the configuration and executable files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/prometheus\nsudo mkdir /var/lib/prometheus\n")),(0,o.kt)("p",null,"Change the ownership of these directories to ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," so that only prometheus can access them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -R prometheus:prometheus /etc/prometheus\nsudo chown -R prometheus:prometheus /var/lib/prometheus\n")),(0,o.kt)("h2",{id:"installing-and-configuring-prometheus"},"Installing and Configuring Prometheus"),(0,o.kt)("p",null,"After setting up the environment, update your OS, and install the latest Prometheus. You can check\nthe latest release by going to their GitHub repository under the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"releases")," page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && apt-get upgrade\nwget https://github.com/prometheus/prometheus/releases/download/v2.26.0/prometheus-2.26.0.linux-amd64.tar.gz\ntar xfz prometheus-*.tar.gz\ncd prometheus-2.26.0.linux-amd64\n")),(0,o.kt)("p",null,"The following two binaries are in the directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"prometheus - Prometheus main binary file"),(0,o.kt)("li",{parentName:"ul"},"promtool")),(0,o.kt)("p",null,"The following two directories (which contain the web interface, configuration files examples and the\nlicense) are in the directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"consoles"),(0,o.kt)("li",{parentName:"ul"},"console_libraries")),(0,o.kt)("p",null,"Copy the executable files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp ./prometheus /usr/local/bin/\nsudo cp ./promtool /usr/local/bin/\n")),(0,o.kt)("p",null,"Change the ownership of these files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown prometheus:prometheus /usr/local/bin/prometheus\nsudo chown prometheus:prometheus /usr/local/bin/promtool\n")),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"consoles")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"console_libraries")," directories to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/prometheus")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -r ./consoles /etc/prometheus\nsudo cp -r ./console_libraries /etc/prometheus\n")),(0,o.kt)("p",null,"Change the ownership of these directories to the ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -R prometheus:prometheus /etc/prometheus/consoles\nsudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),(0,o.kt)("p",null,"Once everything is done, run this command to remove ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd .. && rm -rf prometheus*\n")),(0,o.kt)("p",null,"Before using Prometheus, it needs some configuration. Create a YAML configuration file named\n",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," by running the command below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/prometheus/prometheus.yml\n")),(0,o.kt)("p",null,"The configuration file is divided into three parts which are ",(0,o.kt)("inlineCode",{parentName:"p"},"global"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rule_files"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"scrape_configs"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"scrape_interval")," defines how often Prometheus scrapes targets, while ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluation_interval"),"\ncontrols how often the software will evaluate rules.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rule_files")," block contains information of the location of any rules we want the Prometheus server\nto load.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"scrape_configs")," contains the information which resources Prometheus monitors."))),(0,o.kt)("p",null,"The configuration file should look like this below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "first.rules"\n  # - "second.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),(0,o.kt)("p",null,"With the above configuration file, the first exporter is the one that Prometheus exports to monitor\nitself. As we want to have more precise information about the state of the Prometheus server we\nreduced the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape_interval")," to 5 seconds for this job. The parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"static_configs")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"targets")," determine where the exporters are running. The second exporter is capturing the data from\nyour node, and the port by default is ",(0,o.kt)("inlineCode",{parentName:"p"},"9615"),"."),(0,o.kt)("p",null,"You can check the validity of this configuration file by running\n",(0,o.kt)("inlineCode",{parentName:"p"},"promtool check config /etc/prometheus/prometheus.yml"),"."),(0,o.kt)("p",null,"Save the configuration file and change the ownership of the file to ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),(0,o.kt)("h2",{id:"starting-prometheus"},"Starting Prometheus"),(0,o.kt)("p",null,"To test that Prometheus is set up properly, execute the following command to start it as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u prometheus /usr/local/bin/prometheus --config.file /etc/prometheus/prometheus.yml --storage.tsdb.path /var/lib/prometheus/ --web.console.templates=/etc/prometheus/consoles --web.console.libraries=/etc/prometheus/console_libraries\n")),(0,o.kt)("p",null,"The following messages indicate the status of the server. If you see the following messages, your\nserver is set up properly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'level=info ts=2021-04-16T19:02:20.167Z caller=main.go:380 msg="No time or size retention was set so using the default time retention" duration=15d\nlevel=info ts=2021-04-16T19:02:20.167Z caller=main.go:418 msg="Starting Prometheus" version="(version=2.26.0, branch=HEAD, revision=3cafc58827d1ebd1a67749f88be4218f0bab3d8d)"\nlevel=info ts=2021-04-16T19:02:20.167Z caller=main.go:423 build_context="(go=go1.16.2, user=root@a67cafebe6d0, date=20210331-11:56:23)"\nlevel=info ts=2021-04-16T19:02:20.167Z caller=main.go:424 host_details="(Linux 5.4.0-42-generic #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020 x86_64 ubuntu2004 (none))"\nlevel=info ts=2021-04-16T19:02:20.167Z caller=main.go:425 fd_limits="(soft=1024, hard=1048576)"\nlevel=info ts=2021-04-16T19:02:20.167Z caller=main.go:426 vm_limits="(soft=unlimited, hard=unlimited)"\nlevel=info ts=2021-04-16T19:02:20.169Z caller=web.go:540 component=web msg="Start listening for connections" address=0.0.0.0:9090\nlevel=info ts=2021-04-16T19:02:20.170Z caller=main.go:795 msg="Starting TSDB ..."\nlevel=info ts=2021-04-16T19:02:20.171Z caller=tls_config.go:191 component=web msg="TLS is disabled." http2=false\nlevel=info ts=2021-04-16T19:02:20.174Z caller=head.go:696 component=tsdb msg="Replaying on-disk memory mappable chunks if any"\nlevel=info ts=2021-04-16T19:02:20.175Z caller=head.go:710 component=tsdb msg="On-disk memory mappable chunks replay completed" duration=1.391446ms\nlevel=info ts=2021-04-16T19:02:20.175Z caller=head.go:716 component=tsdb msg="Replaying WAL, this may take a while"\nlevel=info ts=2021-04-16T19:02:20.178Z caller=head.go:768 component=tsdb msg="WAL segment loaded" segment=0 maxSegment=4\nlevel=info ts=2021-04-16T19:02:20.193Z caller=head.go:768 component=tsdb msg="WAL segment loaded" segment=1 maxSegment=4\nlevel=info ts=2021-04-16T19:02:20.221Z caller=head.go:768 component=tsdb msg="WAL segment loaded" segment=2 maxSegment=4\nlevel=info ts=2021-04-16T19:02:20.224Z caller=head.go:768 component=tsdb msg="WAL segment loaded" segment=3 maxSegment=4\nlevel=info ts=2021-04-16T19:02:20.229Z caller=head.go:768 component=tsdb msg="WAL segment loaded" segment=4 maxSegment=4\nlevel=info ts=2021-04-16T19:02:20.229Z caller=head.go:773 component=tsdb msg="WAL replay completed" checkpoint_replay_duration=43.716\xb5s wal_replay_duration=53.973285ms total_replay_duration=55.445308ms\nlevel=info ts=2021-04-16T19:02:20.233Z caller=main.go:815 fs_type=EXT4_SUPER_MAGIC\nlevel=info ts=2021-04-16T19:02:20.233Z caller=main.go:818 msg="TSDB started"\nlevel=info ts=2021-04-16T19:02:20.233Z caller=main.go:944 msg="Loading configuration file" filename=/etc/prometheus/prometheus.yml\nlevel=info ts=2021-04-16T19:02:20.234Z caller=main.go:975 msg="Completed loading of configuration file" filename=/etc/prometheus/prometheus.yml totalDuration=824.115\xb5s remote_storage=3.131\xb5s web_handler=401ns query_engine=1.056\xb5s scrape=236.454\xb5s scrape_sd=45.432\xb5s notify=723ns notify_sd=2.61\xb5s rules=956ns\nlevel=info ts=2021-04-16T19:02:20.234Z caller=main.go:767 msg="Server is ready to receive web requests."\n\n')),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://SERVER_IP_ADDRESS:9090/graph")," to check whether you are able to access the Prometheus\ninterface or not. If it is working, exit the process by pressing on ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + C"),"."),(0,o.kt)("p",null,"Next, we would like to automatically start the server during the boot process, so we have to create\na new ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," configuration file with the following config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/prometheus.service\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Once the file is saved, execute the command below to reload ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," and enable the service so that\nit will be loaded automatically during the operating system's startup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),(0,o.kt)("p",null,"Prometheus should be running now, and you should be able to access its front again end by\nre-visiting ",(0,o.kt)("inlineCode",{parentName:"p"},"IP_ADDRESS:9090/"),"."),(0,o.kt)("h2",{id:"installing-grafana"},"Installing Grafana"),(0,o.kt)("p",null,"In order to visualize your node metrics, you can use Grafana to query the Prometheus server. Run the\nfollowing commands to install it first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y adduser libfontconfig1\nwget https://dl.grafana.com/oss/release/grafana_7.5.4_amd64.deb\nsudo dpkg -i grafana_7.5.4_amd64.deb\n")),(0,o.kt)("p",null,"If everything is fine, configure Grafana to auto-start on boot and then start the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable grafana-server\nsudo systemctl start grafana-server\n")),(0,o.kt)("p",null,"You can now access it by going to the ",(0,o.kt)("inlineCode",{parentName:"p"},"http://SERVER_IP_ADDRESS:3000/login"),". The default user and\npassword is admin/admin."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If you want to change the port on which Grafana runs (3000 is a popular port), edit the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/grafana/conf/defaults.ini")," with a command like\n",(0,o.kt)("inlineCode",{parentName:"p"},"sudo vim /usr/share/grafana/conf/defaults.ini")," and change the ",(0,o.kt)("inlineCode",{parentName:"p"},"http_port")," value to something\nelse. Then restart grafana with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart grafana-server"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(25819).Z})),(0,o.kt)("p",null,"In order to visualize the node metrics, click ",(0,o.kt)("em",{parentName:"p"},"settings")," to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Data Sources")," first."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(73729).Z})),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add data source")," to choose where the data is coming from."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(6108).Z})),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Prometheus"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(3719).Z})),(0,o.kt)("p",null,"The only thing you need to input is the ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," that is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:9090")," and then click\n",(0,o.kt)("inlineCode",{parentName:"p"},"Save & Test"),". If you see ",(0,o.kt)("inlineCode",{parentName:"p"},"Data source is working"),", your connection is configured correctly."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(5456).Z})),(0,o.kt)("p",null,'Next, import the dashboard that lets you visualize your node data. Go to the menu bar on the left\nand mouse hover "+" then select ',(0,o.kt)("inlineCode",{parentName:"p"},"Import"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Import via grafana.com")," - It allows you to use a dashboard that someone else has created and made\npublic. You can check what other dashboards are available via\n",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards"),". In this guide, we\nuse ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/12425"},'"My Polkadot Metrics"'),', so input "12425" under\nthe id field and click ',(0,o.kt)("inlineCode",{parentName:"p"},"Load"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(68751).Z})),(0,o.kt)("p",null,'Once it has been loaded, make sure to select "Prometheus" in the Prometheus dropdown list. Then\nclick ',(0,o.kt)("inlineCode",{parentName:"p"},"Import"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(15562).Z})),(0,o.kt)("p",null,"In the meantime, start your Polkadot node by running ",(0,o.kt)("inlineCode",{parentName:"p"},"./polkadot"),". If everything is done correctly,\nyou should be able to monitor your node's performance such as the current block height, CPU, memory\nusage, etc. on the Grafana dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-1",src:n(56387).Z})),(0,o.kt)("h2",{id:"installing-and-configuring-alertmanager-optional"},"Installing and Configuring Alertmanager (Optional)"),(0,o.kt)("p",null,"In this section, let's configure the Alertmanager that helps to predict the potential problem or\nnotify you of the current problem in your server. Alerts can be sent in Slack, Email, Matrix, or\nothers. In this guide, we will show you how to configure the email notifications using Gmail if your\nnode goes down."),(0,o.kt)("p",null,"First, download the latest binary of AlertManager and unzip it by running the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/prometheus/alertmanager/releases/download/v0.21.0/alertmanager-0.21.0.linux-amd64.tar.gz\ntar -xvzf alertmanager-0.21.0.linux-amd64.tar.gz\nmv alertmanager-0.21.0.linux-amd64.tar.gz/alertmanager /usr/local/bin/\n")),(0,o.kt)("h3",{id:"gmail-setup"},"Gmail Setup"),(0,o.kt)("p",null,"To allow AlertManager to send an email to you, you will need to generate something called an\n",(0,o.kt)("inlineCode",{parentName:"p"},"app password")," in your Gmail account. For details, click\n",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/185833?hl=en"},"here")," to follow the whole setup."),(0,o.kt)("p",null,"You should see something like below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-am-1",src:n(36374).Z})),(0,o.kt)("p",null,"Copy and save it somewhere else first."),(0,o.kt)("h3",{id:"alertmanager-configuration"},"AlertManager Configuration"),(0,o.kt)("p",null,"There is a configuration file named ",(0,o.kt)("inlineCode",{parentName:"p"},"alertmanager.yml")," inside the directory that you just extracted\nin the previous command, but that is not of our use. We will create our ",(0,o.kt)("inlineCode",{parentName:"p"},"alertmanager.yml")," file\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager")," with the following config."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Ensure to change the ownership of "/etc/alertmanager" to ',(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," by executing"),(0,o.kt)("p",{parentName:"blockquote"},"sudo chown -R prometheus:prometheus /etc/alertmanager")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"global:\n resolve_timeout: 1m\n\nroute:\n receiver: 'gmail-notifications'\n\nreceivers:\n- name: 'gmail-notifications'\n  email_configs:\n  - to: YOUR_EMAIL\n    from: YOUR_EMAIL\n    smarthost: smtp.gmail.com:587\n    auth_username: YOUR_EMAIL\n    auth_identity: YOUR_EMAIL\n    auth_password: YOUR_APP_PASSWORD\n    send_resolved: true\n")),(0,o.kt)("p",null,"With the above configuration, alerts will be sent using the the email you set above. Remember to\nchange ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_EMAIL")," to your email and paste the app password you just saved earlier to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PASSWORD"),"."),(0,o.kt)("p",null,"Next, create another ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," configuration file named ",(0,o.kt)("inlineCode",{parentName:"p"},"alertmanager.service")," by running the\ncommand ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo nano /etc/systemd/system/alertmanager.service")," with the following config."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SERVER_IP - Change to your host IP address amd make sure port 9093 is opened")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=AlertManager Server Service\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=root\nGroup=root\nType=simple\nExecStart=/usr/local/bin/alertmanager --config.file /etc/alertmanager/alertmanager.yml --web.external-url=http://SERVER_IP:9093 --cluster.advertise-address='0.0.0.0:9093'\n\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"To the start the Alertmanager, run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload && sudo systemctl enable alertmanager && sudo systemctl start alertmanager && sudo systemctl status alertmanager\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u25cf alertmanager.service - AlertManager Server Service\n   Loaded: loaded (/etc/systemd/system/alertmanager.service; enabled; vendor preset: enabled)\n   Active: active (running) since Thu 2020-08-20 22:01:21 CEST; 3 days ago\n Main PID: 20592 (alertmanager)\n    Tasks: 70 (limit: 9830)\n   CGroup: /system.slice/alertmanager.service\n")),(0,o.kt)("p",null,'You should see the process status is "active (running)" if you have configured properly.'),(0,o.kt)("p",null,"There is a Alertmanager plugin in Grafana that can help you to monitor the alert information. To\ninstall it, execute the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo grafana-cli plugins install camptocamp-prometheus-alertmanager-datasource\n")),(0,o.kt)("p",null,"And restart Grafana once the plugin is successfully installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl restart grafana-server\n")),(0,o.kt)("p",null,"Now go to your Grafana dashboard ",(0,o.kt)("inlineCode",{parentName:"p"},"SERVER_IP:3000")," and configure the Alertmanager datasource."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-am-5",src:n(2192).Z})),(0,o.kt)("p",null,'Go to Configuration -> Data Sources, search "Prometheus AlertManger" if you cannot find it at the\ntop.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-am-2",src:n(32539).Z})),(0,o.kt)("p",null,"Fill in the ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," to your server location followed by the port number used in the Alertmanager."),(0,o.kt)("p",null,'Then click "Save & Test" at the bottom to test the connection.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-am-3",src:n(24966).Z})),(0,o.kt)("p",null,"To monitor the alerts, let's import dashboard \"",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/dashboards/8010"},"8010"),'" that is\nused for Alertmanager. And make sure to select the "Prometheus AlertManager" in the last column.\nThen click "Import".'),(0,o.kt)("p",null,"You will end up having the follwing:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-am-4",src:n(64780).Z})),(0,o.kt)("h3",{id:"alertmanager-integration"},"AlertManager Integration"),(0,o.kt)("p",null,"To let the Prometheus server be able to talk to the Alertmanger, we will need to add the following\nconfig in the ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/prometheus/prometheus.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rule_files:\n  - 'rules.yml'\n\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      - localhost:9093\n")),(0,o.kt)("p",null,"That is the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/prometheus/prometheus.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"global:\n  scrape_interval:     15s\n  evaluation_interval: 15s\n\nrule_files:\n  - 'rules.yml'\n\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      - localhost:9093\n\nscrape_configs:\n  - job_name: 'prometheus'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9090']\n  - job_name: 'substrate_node'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9615']\n")),(0,o.kt)("p",null,'We will need to create a new file called "rules.yml" under ',(0,o.kt)("inlineCode",{parentName:"p"},"/etc/prometheus/")," that is defined all\nthe rules we would like to detect. If any of the rules defined in this file is fulfilled, an alert\nwill be triggered. The rule below checks whether the instance is down. If it is down for more than 5\nminutes, an email notification will be sent. If you would like to learn more about the details of\nthe rule defining, go\n",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"here"),". There are other\ninteresting alerts you may find useful ",(0,o.kt)("a",{parentName:"p",href:"https://awesome-prometheus-alerts.grep.to/rules.html"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'groups:\n  - name: alert_rules\n    rules:\n      - alert: InstanceDown\n        expr: up == 0\n        for: 5m\n        labels:\n          severity: critical\n        annotations:\n          summary: "Instance [{{ $labels.instance }}] down"\n          description: "[{{ $labels.instance }}] of job [{{ $labels.job }}] has been down for more than 1 minute."\n')),(0,o.kt)("p",null,"Change the ownership of this file to ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown prometheus:prometheus rules.yml\n")),(0,o.kt)("p",null,'To check the rules defined in the "rules.yml" is syntactically correct, run the following command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u prometheus promtool check rules rules.yml\n")),(0,o.kt)("p",null,"Finally, restart everthing by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart prometheus && sudo systemctl restart alertmanager\n")),(0,o.kt)("p",null,"Now if one of your target instances down, you will receive an alert on the AlertManager and Gmail\nlike below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-am-6",src:n(5731).Z})))}c.isMDXComponent=!0},36374:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-alert-manager-772a381e44fb289d713129bce0ac1a7e.png"},25819:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-grafana-login-c1c6fbd7d08509b83393b50c01bb0616.png"},6108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-add-data-source-2-1a307a18d157b5a6dcfc5ff9affa9998.png"},73729:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-add-data-source-d761a4186c463aad357c6130b2881789.png"},32539:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-alert-manager-d3e306837b2c64bf91a0cad9af6a7864.png"},24966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-alert-manager-1fda12aea0c70f3f6844b52b95331aa8.png"},3719:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-select-prometheus-0791dd096d2ca64c0146121e58f9c3e3.png"},64780:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-alert-manager-85181686515e903e6a4098ddd9575a2f.png"},5456:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-configure-data-source-7b1620ce4fc9ab2de90283415cea7df9.png"},2192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-alert-manager-c72c2dc814113f58399347add3c1f884.png"},15562:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-import-dashboard-2-6b28bbb32de0537cfac19dcc1f2b2090.png"},68751:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-import-dashboard-bd891cf2120fb0db67f2227fb173d41e.png"},5731:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-alert-manager-12cff39ab28672b46017b175f875985b.png"},56387:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-dashboard-metric-26c7a11df27ed105fabd448e83872c01.png"}}]);