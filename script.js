  
        function adivinhar() {
            var txtnumber = window.document.getElementById("txtnumber")
            var numeroSecreto = Math.floor(Math.random() * 100) + 1;
            var res = window.document.getElementById("res")
            var numero = Number(txtnumber.value)
            res.innerHTML = `Você digitou o número: ${numero}`
            if (numero === numeroSecreto) { 
                res.innerHTML += ` Acertou! O número secreto era ${numeroSecreto}.`
            } else if (numero < numeroSecreto) {
                res.innerHTML += `<p style="color:red;">O número secreto e maior, Você errou! tenta Denovo kkk</p>`
                
            } else {
                res.innerHTML += `<p style="color:red;">O número secreto e menor, Você errou! tenta Denovo kkk</p>`
            }
            res.innerHTML += `<img src="https://media.tenor.com/q-89tPb6bwAAAAAM/never-gonna-give-you-up.gif" jsaction="" class="sFlh5c FyHeAf uT7N3d" style="max-width: 150px; width: 150px; height: 150px; margin: 0px;" alt="Hd Rick Rickroll Hd GIF - Hd Rick Rickroll Hd Never Gonna Give You Up -  Discover &amp; Share GIFs" jsname="kn3ccd">`
        }
            
