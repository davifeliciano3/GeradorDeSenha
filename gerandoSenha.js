const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geranumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '-(*&%$$##@!';
const gerasimbolo = () => simbolos[rand(0, simbolos.length)];

function geraSenha(q, maisculas, minusculas, numeros, simbolos) {
    const senhaArray = [];

    q = Number(q);
    while (senhaArray.length < q) {
        maisculas && senhaArray.length < q && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.length < q && senhaArray.push(geraMinuscula());
        numeros && senhaArray.length < q && senhaArray.push(geranumero());
        simbolos && senhaArray.length < q && senhaArray.push(gerasimbolo());
    }

    return senhaArray.join('').slice(0, q);
}

const senhaGerada = document.querySelector('.senha-gerada');
const Qcaracterer = document.querySelector('.quantidade');
const cmaiusculas = document.querySelector('.ck-maiusculo');
const cminusculas = document.querySelector('.ck-minuscula');
const cnumeros = document.querySelector('.ck-numeros');
const csimbolos = document.querySelector('.ck-simbolos');
const gerabotao = document.querySelector('.gerar-senha');

function executa() {
    gerabotao.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera() {
    const senha = geraSenha(
        Qcaracterer.value,
        cmaiusculas.checked,
        cminusculas.checked,
        cnumeros.checked,
        csimbolos.checked
    );
    return senha || 'Nada selecionado';
}

executa();
