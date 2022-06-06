const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 16;

let color = DEFAULT_COLOR;
let isClicked = true;


let input = document.querySelector('input');
let value = document.querySelector('.value');

value.innerHTML = input.value;
input.addEventListener('input', () => {
  value.innerHTML = input.value;
}, false);

document.querySelector("body").addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT' )
    {
        isClicked = !isClicked;  
        
        if(isClicked)
        {
            document.querySelector('.status').textContent = 'Active';
        }
        else
        {
            document.querySelector('.status').textContent = 'Not Active';

        }
    }
    
})

function createBoard(size)
{
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


    let fullSize = size * size;

    for(let i = 0; i < fullSize; i++)
    {
        let square = document.createElement('div');
        square.addEventListener('mouseover', changeSquareColor);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);

    }
}


function changeSize(size)
{
    createBoard(size);
}

function changeSquareColor()
{
    if(isClicked)
    {
        if(color === 'random')
        {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else
        {
            this.style.backgroundColor = color;
        }
    }
}



function changeColorMode(mode)
{
   color = mode;
}

function resetBoard()
{
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}


function defaultBoard()
{
    createBoard(DEFAULT_SIZE);
}

defaultBoard();

