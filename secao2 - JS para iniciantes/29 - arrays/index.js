let nome = ['vinicius', 'henrique', 'santana']
delete nome[1]
console.log(nome)
// [ 'vinicius', <1 empty item>, 'santana' ]



nomeSlice = nome.slice(0, 2)  // nome.slice(0, -1)
// [ 'vinicius', <1 empty item> ]
console.log(nomeSlice)