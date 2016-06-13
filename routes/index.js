var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('cadastro');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/novocadastro', function(req, res) {
    res.render('novocadastro', { title: 'Criar Novo Cadastro' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var usercpf = req.body.usercpf;
    var usersexo = req.body.usersexo;
    var userrenda = req.body.userrenda;

    // Set our collection
    var collection = db.get('cadastro');

    // Submit to the DB
    collection.insert({
        "usercpf" : usercpf,
        "usersexo" : usersexo,
        "userrenda" : userrenda
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("Nao foi possivel adicionar os dados ao banco");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

module.exports = router;
