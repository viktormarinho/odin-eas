
const grid = document.querySelector('.grid');
const body = document.querySelector('body');
let selectedColor = document.querySelector('#colorpicker').value;
let clicking = false;
let tamanhoGrid = 16;
let quantidadeQuadrados = tamanhoGrid * tamanhoGrid;
let randomMode = false;
let nan = NaN;

function randomModeToggle(){
    let btn = document.querySelector('.random');
    if (!randomMode){
        randomMode = true;
        btn.classList.add('random-clicked');
    }else{
        selectedColor = 'black';
        randomMode = false;
        btn.classList.remove('random-clicked');
    }
}

body.addEventListener('mousedown', () =>{
    clicking = true;
});
body.addEventListener('mouseup', () =>{
    clicking = false;
});

function makeGrid(){
    let squares = document.querySelectorAll('.gridSquare');
    quantidadeQuadrados = tamanhoGrid * tamanhoGrid;

    squares.forEach((sqr) => {
        sqr.remove();
    });

    for (let i=0; i < quantidadeQuadrados; i++){
        const tamanhoQuadrado = (512 / tamanhoGrid).toString() + 'px';
        let div = document.createElement('div');
        div.classList.add('gridSquare')
        div.style.width = tamanhoQuadrado;
        div.style.height = tamanhoQuadrado;
        div.style.backgroundColor = 'white';
        div.addEventListener('mousedown', () =>{
            selectedColor = document.querySelector('#colorpicker').value;
            if(randomMode){
                selectedColor = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`
            }
            div.style.backgroundColor = selectedColor;
        });
        div.addEventListener('mouseenter', () =>{
            selectedColor = document.querySelector('#colorpicker').value;
            if(clicking){
                if(randomMode){
                    selectedColor = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`
                }
                div.style.backgroundColor = selectedColor;
            }
        });

        grid.appendChild(div);
    }
}

function clearGrid(){
    let squares = document.querySelectorAll('.gridSquare');

    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });

    tamanhoGrid = 1;

    while(tamanhoGrid < 8 || tamanhoGrid > 100 || Object.is(nan, tamanhoGrid)){
        tamanhoGrid = Number.parseInt(prompt('Qual o tamanho do grid desejado? (Min. 8 / Max. 100)'));
    }
    makeGrid();
}