'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Cottect number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent=13;
// document.querySelector('.number').textContent=10;
// document.querySelector('.guess').value=23;

let number=Math.trunc(Math.random()*20)+1;
let br=20;
let hs=100;
document.querySelector('.score').textContent=br;
document.querySelector('.check').addEventListener
('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess)
    {
        document.querySelector('.message').textContent="Please input number!";
    }
    else
    {
        if(br>0)
        {
        if(number>guess)
        {
            document.querySelector('.message').textContent="Higher!";
            br--;
            document.querySelector('.score').textContent=br;
        }
        else if(number<guess)
        {
            document.querySelector('.message').textContent="Lower!";
            br--;
            document.querySelector('.score').textContent=br;
        }
        else if(number===guess)
        {
            document.querySelector('.message').textContent="Let's gooo";
            document.querySelector('.number').textContent=number;
            if(hs<br)
            {
                hs=br;
            }
            document.querySelector('.highscore').textContent=hs;
            document.querySelector('body').style.backgroundColor='green';
        }
        }
        else
        {
            document.querySelector('.message').textContent="You lose";
        }
    }
});
document.querySelector('.again').addEventListener
('click', function(){
    br=20;
    number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=br;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent='?';
});