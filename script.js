const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//Essa função necessita de 2 argumentos: evento que irá "ouvir" e função que será executada após o primeiro argumento for executado.
button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {

  const today = new Date().toLocaleDateString("pt-br").slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert("Dia Já incluso")
    return
  }

  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) 
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))

nlwSetup.setData(data)
nlwSetup.load()

// DOM = modelagem do HTML para javaScript
