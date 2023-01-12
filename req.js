/*
let button = document.querySelector('button');
button.addEventListener('click',() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json(); //retorna um array
    })
    .then((data) => {
        alert(`O titulo é ${data[0].title}`);
    })
    .catch(() => {
        alert('Erro na requisição');
    })
    .finally(() => { //usado para desbloqueio dos campos de um usuario
        //é meio que uma funçao back up
        //funciona independentemente se der certo ou errado
        alert('Acabou');
    })
});

*/


let button = document.querySelector('button');
button.addEventListener('click', async () =>{
    let promisse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await promisse.json();
    console.log(data[0].title);
    console.log('teste');
})

/*
let button2 = document.querySelector('.insert');

button2.addEventListener('click',() =>{
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json' //tipo de dado enviado
        },
        body: JSON.stringify({
            title: 'Galo campeão brasileiro 2023',
            body: 'Atletico é tricampeão brasileiro e volta a ser campeão após 2 anos',
            userId: 2
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((date) => {
        console.log(date);
    })
})

*/

let button2 = document.querySelector('.insert');
button2.addEventListener('click', async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title:'Galo campeão brasileiro',
            body:'Atletico é tricampeão brasileiro e volta a ser campeão após 2 anos',
            userId: 2
        })
    })
    let data = await response.json();
    console.log(data.title);
    console.log('deu certo');
})

