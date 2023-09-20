let usuario = {
    id:5,
    nome: 'Luan',
    email: 'luan@email.com',
    admin: true
}

let nome = usuario.nome
console.log(nome)
let id = usuario.id
console.log(id)
let idArray = usuario['id']
console.log(idArray)

usuario.id = 7
console.log(usuario.id)