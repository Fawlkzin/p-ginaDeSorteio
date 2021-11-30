    let pessoas = []

    function adcnames(){
        let i = document.getElementById("adname").value
        pessoas[pessoas.length] = i
        console.log(pessoas)
        let guard = document.getElementById("names")
        guard.innerHTML = [pessoas]
       

    }
    function togiveaway(){
        let n = pessoas.length
        let cc = Math.floor(Math.random() *n)
        let sor = document.getElementById("showname")
        sor.innerHTML = pessoas[cc]
    }