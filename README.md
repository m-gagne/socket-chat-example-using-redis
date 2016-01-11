# Sample Socket.io Chat App using Redis

This is a sample chat app based on the [Chat App tutorial](http://socket.io/get-started/chat) from socket.io that has been modified to use Azure Redis Cache and the pub/sub pattern to handle the scenario of needing to broadcast to all active socket sessions across multiple instances of your WSS (web socket server).


## Getting started

### Clone this repo

    git clone https://github.com/m-gagne/socket-chat-example-using-redis.git
    
### Create an Azure Redis Cache

Azure has a solid quick and easy [Getting Started](https://azure.microsoft.com/en-us/services/cache) document (see 'Create your first Redis cache') that shows you how to setup Redis Cache as an Azure PaaS service. If you don't yet have an Azure subscription you can always use the [free trial](https://azure.microsoft.com/en-us/pricing/free-trial/).

### Configure config.js

Copy the `config.sample.js` file to `config.js` and configure as needed

    cp config.sample.js config.js
    
> Specifically be sure to update `config.redis.uri` & `config.redis.key` settings to match your Azure Redis Cache you just created.

### Run the app locally to make sure it's all good

    node server.js
    
## Deploy & Test on Azure

Deploy your solution to Azure Web Apps and scale up the number of instances to test it out! Hint: You will need to use multiple browsers/in private tabs to start multiple sessions load-balanced across multiple instances.

The [Create a Node.js web app in Azure App Service](https://azure.microsoft.com/en-us/documentation/articles/web-sites-nodejs-develop-deploy-mac/) article on [http://azure.com](azure.com) should get you going.
    
