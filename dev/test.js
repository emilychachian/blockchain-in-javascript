const Blockchain = require ("./blockchain");
const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1541174123944,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1541174132474,
            "transactions": [],
            "nonce": 10456,
            "hash": "0000e27f4d52a5d17d8d3eeaf93ab037e173d09412f018bf0da085bfd72d66c3",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1541174213000,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b573d990deb711e8a13f1bba610fc977",
                    "transactionId": "ba8e4eb0deb711e8a13f1bba610fc977"
                },
                {
                    "amount": 500,
                    "sender": "DSFKFDSFKIDSPFK",
                    "recipient": "QWOLEFKODFKS",
                    "transactionId": "d0cce330deb711e8a13f1bba610fc977"
                },
                {
                    "amount": 1600,
                    "sender": "DSFKFDSFKIDSPFK",
                    "recipient": "QWOLEFKODFKS",
                    "transactionId": "d3b9c9f0deb711e8a13f1bba610fc977"
                },
                {
                    "amount": 30,
                    "sender": "DSFKFDSFKIDSPFK",
                    "recipient": "QWOLEFKODFKS",
                    "transactionId": "e2701da0deb711e8a13f1bba610fc977"
                }
            ],
            "nonce": 115066,
            "hash": "0000ff243b2adebef5793afc7ecba5869b23dbe68f3aada95b537534173f20ab",
            "previousBlockHash": "0000e27f4d52a5d17d8d3eeaf93ab037e173d09412f018bf0da085bfd72d66c3"
        },
        {
            "index": 4,
            "timestamp": 1541174241250,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b573d990deb711e8a13f1bba610fc977",
                    "transactionId": "ea8905b0deb711e8a13f1bba610fc977"
                },
                {
                    "amount": 40,
                    "sender": "DSFKFDSFKIDSPFK",
                    "recipient": "QWOLEFKODFKS",
                    "transactionId": "f17f66c0deb711e8a13f1bba610fc977"
                },
                {
                    "amount": 50,
                    "sender": "DSFKFDSFKIDSPFK",
                    "recipient": "QWOLEFKODFKS",
                    "transactionId": "f58d74f0deb711e8a13f1bba610fc977"
                },
                {
                    "amount": 60,
                    "sender": "DSFKFDSFKIDSPFK",
                    "recipient": "QWOLEFKODFKS",
                    "transactionId": "f7b0a310deb711e8a13f1bba610fc977"
                },
                {
                    "amount": 70,
                    "sender": "DSFKFDSFKIDSPFK",
                    "recipient": "QWOLEFKODFKS",
                    "transactionId": "f9f2cae0deb711e8a13f1bba610fc977"
                }
            ],
            "nonce": 25045,
            "hash": "00008c653a5c708fa2e94a2ca538a03ed3f6b6c74c72ea415c86c414daa53dc5",
            "previousBlockHash": "0000ff243b2adebef5793afc7ecba5869b23dbe68f3aada95b537534173f20ab"
        },
        {
            "index": 5,
            "timestamp": 1541174251512,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b573d990deb711e8a13f1bba610fc977",
                    "transactionId": "fb60b2c0deb711e8a13f1bba610fc977"
                }
            ],
            "nonce": 63528,
            "hash": "00003ca9d086a5e964ff634322d7f4ffd28f4230cefa31098a7e1f729b6ae4b8",
            "previousBlockHash": "00008c653a5c708fa2e94a2ca538a03ed3f6b6c74c72ea415c86c414daa53dc5"
        },
        {
            "index": 6,
            "timestamp": 1541174253780,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b573d990deb711e8a13f1bba610fc977",
                    "transactionId": "017d7cb0deb811e8a13f1bba610fc977"
                }
            ],
            "nonce": 71295,
            "hash": "0000f5bbb48fd040c3702bf3d7c91bbec3b998983e641ae48f4bd0aeeb4d3c76",
            "previousBlockHash": "00003ca9d086a5e964ff634322d7f4ffd28f4230cefa31098a7e1f729b6ae4b8"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "b573d990deb711e8a13f1bba610fc977",
            "transactionId": "02d76760deb811e8a13f1bba610fc977"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log("VALID: " + bitcoin.chainIsValid(bc1.chain));