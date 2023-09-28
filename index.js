const crypto = require('crypto');
const express = require('express');
const app = express();
app.listen(3000, express);


const chaveSecreta = 'ChaveSuperSecreta';
const textoOriginal = 'Minha informação confidencial';

const cipher = crypto.createCipher('aes-256-cbc', chaveSecreta); /* constante que irá criar a criptografia, onde passamos 2 aargumentos, que são o gerador de criptografia e a chaveSecreta */
let textoCriptografado = cipher.update(textoOriginal, 'utf8', 'hex'); /* criamos a variável textoCriptografado que recebe a constante cipher e pega o TextoOriginal - onde está contido o texto a ser criptografado - e o utf8 pega o html por meio desse argument, e o hex é o valor em hexadecimal */
textoCriptografado += cipher.final('hex'); /* aqui ele recebe o  textoCriptografado */


const cipherTwo = crypto.createDecipher('aes-256-cbc', chaveSecreta);
let textoDesCriptografado = cipherTwo.update(textoCriptografado, 'hex', 'utf8');
textoDesCriptografado += cipherTwo.final('utf8');
/*+= ele recbe e incrementa */

app.get('/criptografia', (req, res) => {
    res.send(textoCriptografado);
});


app.get('/descriptografia', (req, res) => {
    res.send(textoDesCriptografado);
});


/* listen(3000 ou /criptografado)
   return textoCriptografado
   res.send
*/