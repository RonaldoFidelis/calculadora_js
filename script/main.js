const buttons = document.querySelectorAll('.container-Btn button')
let display = document.querySelector('.display');

//ForEache para percorrer os elementos btns;
buttons.forEach( (btns) =>{
    btns.addEventListener('click', (e) => {
        //varivel com o valor do button;
        let valueBtn = e.target.innerText;
        display.innerHTML += `${valueBtn}`;
    })
})