
var array1 = []
var numero = []

function getRandom() {
    return Math.floor(Math.random() * 10);
}

for (let i = 0 ; i < 9 ; i++){
  numero.push(getRandom());
}
    
        function Start(){
            Resultado.innerText = numero
            setTimeout(function(){
                let suma = window.document.getElementById("Start")

                suma.style.display = "none"
                Resultado.innerText = "DIGITE OS NUMEROS DECORADOS ABAIXO"
                
            
            }, 6500);
        }

        function isNumero(n) {
            if(Number(n) >= 0 && Number(n) <= 10){
                return true
            }else{
                return false
            }
        }

        function Confirmar(){
            var valor = document.getElementById("resposta") 
             if(isNumero(valor.value)){
                array1.push(Number(valor.value))
                valor.innerHTML = ""
            }else{
                window.alert("Valor inválido")
            }
            valor.value = ""
            valor.focus()
        }

        function comparation(){
            var valor = document.getElementById("resposta")
            if(array1.length == 0){
                alert("[Erro] Digite os valores")
            }else{
                var decorated = window.document.getElementById("decorado")
                var digitalizated = window.document.getElementById("digitado")
                const getResult = function (a1, a2) {
                    var i = a1.length;
                    if (i != a2.length) return false;
                
                    while (i--) {
                    if (a1[i] !== a2[i]) return false;
                    }
                    return true;
              };
    

                var valor1 = window.document.createElement('p')
                var valor2 = window.document.createElement('p')
                var valor3 = window.document.createElement('p')

                valor1.innerHTML = `O valor a ser decorado foi ${numero} `
                valor2.innerHTML = `O valor digitado foi ${array1}`
                decorated.appendChild(valor1)
                digitalizated.appendChild(valor2)
              


              if(getResult(array1, numero) == true){
                var valor2 = window.document.createElement('p')
                valor3.innerHTML = `Você é o mestre da memória . \u{1F632} `
                answer.appendChild(valor3)
    
              }else{
                var valor2 = window.document.createElement('p')
                valor3.innerHTML = `Infelizmente não foi dessa vez, tente novamente! \u{1F61D}`
                answer.appendChild(valor3)
                

                setTimeout(function(){
                    location.reload()
                  }, 8000)

              }
            }
        }
        
        
