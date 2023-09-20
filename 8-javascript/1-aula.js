
const usuarioValido = 'luan'
const senhaValida = '1234'
let usuario = 'luan'
let senha = '1239'
const adm = true 

    if(usuario === usuarioValido && senha === senhaValida) {
        console.log('Por favor insira sua noiva senha')
        certo = true
        } else {
        console.log('Usuario e senha invalidos')
    }

    if (adm === false ){
        console.log('Você não pode acessar essa area do sistema')
    } else {
        console.log('Bem vindo(a) a area de administrador')
    }