var openchain = require("openchain");
var bitcore = require("bitcore-lib");

var seed = "0123456789abcdef0123456789abcdef";

// Criando chave privada a partir da seed aleatoria acima
var privateKey = bitcore.HDPrivateKey.fromSeed(seed, "openchain");
var address = privateKey.publicKey.toAddress();

// Criando o endereco de armazenamento de acordo com a chave aleatoria gerada
var dataPath = "/asset/p2pkh/" + address + "/metadata/";
var recordName = "datarecord";
var storedData = "Testando BlockChain com o OpenChain";

//Retorno direto no console indicando o local de armazenamento, nome e conteudo
console.log("Account path: " + dataPath);
console.log("Record name: " + recordName);
console.log("Dado armazenado: " + storedData);

// Criando cliente openchain
var client = new openchain.ApiClient("http://192.168.99.100:8080/");
var signer = new openchain.MutationSigner(privateKey);

// Iniciando cliente
client.initialize()
.then(function () {
    // Buscando registro que será modificado
    return client.getDataRecord(dataPath, recordName)
})
.then(function (dataRecord) {
    // Codificando o storedData para um buffer
    var newValue = openchain.encoding.encodeString(storedData);

    // Criando uma transacao
    return new openchain.TransactionBuilder(client)
        // Chave da transacao
        .addSigningKey(signer)
        // Modificando o registro
        .addRecord(dataRecord.key, newValue, dataRecord.version)
        // Submeter a transação
        .submit();
})
.then(function (result) { console.log(result); });
