const router = require('express').Router() //importando o método Router.

//rotas
router.get('/',(req, res) => {
    res.render('index', {
        title: 'Título Teste'
    })
})

module.exports = router