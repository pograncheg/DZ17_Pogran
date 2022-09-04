'use strict'
const cells = document.querySelectorAll('.pixel');
const buttonReset = document.querySelector('button');

let number = 0;

buttonReset.addEventListener('click', e =>{
    e.preventDefault();
    cells.forEach(cell =>{
        cell.innerHTML = '';
    })
    number = 0;
})
let isVictory = function(myCells){
    let combinationsWin = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
    for(let i = 0; i < combinationsWin.length; i++){
        if (
			myCells[combinationsWin[i][0]].innerHTML === myCells[combinationsWin[i][1]].innerHTML &&
			myCells[combinationsWin[i][1]].innerHTML === myCells[combinationsWin[i][2]].innerHTML &&
			myCells[combinationsWin[i][0]].innerHTML !== ''
		) {
            myCells[combinationsWin[i][0]].classList.add('red');
            myCells[combinationsWin[i][1]].classList.add('red');
            myCells[combinationsWin[i][2]].classList.add('red');
			return true;
		}
    }
    return false;
}
cells.forEach(cell =>{
    cell.addEventListener('click', e =>{
        e.preventDefault();
        if((number > 3)&&(isVictory(cells))){
            if(number % 2 === 0){
                setTimeout(alert('Игра окончена! Выйграли нолики!!'),0);
            } else{
                setTimeout(alert('Игра окончена! Выйграли крестики!!'),0);
            }
            return;
        };
        if(!cell.innerHTML){
            if(number % 2 === 0){
                cell.innerHTML = 'X';
            } else{
                cell.innerHTML = '0';
            }

            number +=1;
        }
        if((number > 4)&&(isVictory(cells))){
            if(number % 2 === 0){
                setTimeout(() => alert('Выйграли нолики!!'), 0)
            } else{
                setTimeout(() => alert('Выйграли крестики!!'), 0)
            }      
            return;
        };
        if((number === 9)&&(!isVictory(cells))){
            setTimeout(() => alert('Ничья'), 0)
        }       
    })
})
