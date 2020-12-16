const cat = document.getElementById('cat');
const ghost= document.getElementById('ghost');
const score = document.getElementById('score');

function jump(){
    cat.classList.add('jump-animation');
    setTimeout(() => {
        cat.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if(!cat.classList.contains('jump-animation')){
    jump();
    }
});



setInterval(() => {
    score.innerText++;
    const catTop = parseInt(window.getComputedStyle(cat).getPropertyValue('top'));
    console.log(catTop);
    const ghostLeft = parseInt(window.getComputedStyle(ghost).getPropertyValue('left'));
    console.log(ghostLeft);

    if(ghostLeft < 0) {
        ghost.style.display = 'none'
    } else {
        ghost.style.display = '';
    }

    if (ghostLeft < 50 && ghostLeft > 0 && catTop > 100 ) {
        alert(`Game over! \n \n You got a score of: ${score.innerText} Play Again?`);
    } 
}, 50);

