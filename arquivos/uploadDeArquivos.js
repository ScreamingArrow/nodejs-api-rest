const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tipoValidos = ['png', 'jpg', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tipoValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido) {

        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else {
        const erro = 'Tipo inválido!'
        console.log('Erro! Tipo invalido!')
        callbackImagemCriada(erro)
    }

}
