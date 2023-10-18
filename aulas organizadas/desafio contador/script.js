function contar(){
    let ini = document.getElementById('txti')
    let pas = document.getElementById('txtp')
    let fim = document.getElementById('txtf')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0){
            window.alert('Faltam Dados!')
    } else {
        res.innerHTML = 'Sua conta é... '
        let i = Number(ini.value)
        let p = Number(pas.value)
        let f = Number(fim.value)

        if(i < f) {
            for (c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += '🏁'

        

    }
}