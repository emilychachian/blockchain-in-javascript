# Blockchain in JavaScript
This project is a blockchain prototype built in JavaScript, inspired by Eric Traub's course **Learn Blockchain By Building Your Own In JavaScript**.\
You can interact with the blockchain through an API/server and all changes (mining blocks, creating transactions, etc) will be broadcast to all nodes. Thus, the decentralized blockchain network will always have its data synchronized.

## Running the project 
1. Clone the project and install its dependencies (`npm install`)
2. Open five terminals and start a node on each of them: 
* run `npm run node_1` to launch node#1 at localhost:3001
* run `npm run node_2` to launch node#2 at localhost:3002
* run `npm run node_3` to launch node#3 at localhost:3003
* run `npm run node_4` to launch node#4 at localhost:3004
* run `npm run node_5` to launch node#5 at localhost:3005
3. Install Postman and do a POST to localhost:3001/register-and-broadcast-node with the following request body `{ "newNodeUrl": "http://localhost:PORT" }`. Replace PORT by the port of the node (3002 to 3005), and do this for all of the ports. 

After this, you will be able to create transactions and mine blocks.

## Functions 
### How can I see the blockchain?
`GET /blockchain` \
On Postman, do a GET request to http://localhost:3001/blockchain

### How can I create and broadcast transactions?
`POST /transaction/broadcast`\
On Postman, do a POST request to http://localhost:3002/transaction/broadcast with a request body. You can follow this example: \
`{ 
"amount": 10, 
"sender": "AAAAAABBBB", 
"recipient": "CCCCCDDDDD" 
}`\
This adds the transaction to the pending transactions and broadcasts this to all nodes in the network. 

### How can I mine blocks?
`GET /mine`\
On Postman, do a GET request to http://localhost:3001/mine

### How can I make sure there is actually a consensus between the different nodes?
`GET /consensus`\
On Postman, do a GET request to one of the nodes (http://localhost:3002/consensus, for example). If there are nodes with different chains, we can call this endpoint in one of them to make sure we reach a consensus. 

### How can I see the details of a transaction/block/address?
After starting the nodes, you can access `http://localhost:3001/block-explorer` to check information regarding transactions, addresses or blocks. \
Choose the kind of information you want to find on the list and write down in the input field the ID of the object whose information you want to retrieve. 
