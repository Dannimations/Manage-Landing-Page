const menu = document.getElementById('menu');
const navLinks = document.querySelector('.navLinks.mobile');
const overlay = document.getElementById('overlay');
const form = document.querySelector('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('hide'); 
    overlay.classList.toggle('hide');
    document.querySelector('body').style.overflow = 'hidden'
});

overlay.addEventListener('click', () => {
    navLinks.classList.add('hide');
    overlay.classList.add('hide');
    document.querySelector('body').style.overflow = 'visible'
});

form.addEventListener('submit', e => {
    if(email.value.trim() === ''){
        e.preventDefault();
        errorMessage.classList.remove('hide')
        errorMessage.innerText = 'Please enter a valid email';
    }
});

let testSlide = document.querySelectorAll('.userComment');

let dots = document.querySelectorAll('.dot');

var counter = 0;

function switchTest(currentTest){
    currentTest.classList.add('active');
    var testId = currentTest.getAttribute('attr');
    if(testId > counter){
        testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter =  testId;
        testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(testId == counter){return;}
    else{
        testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter =  testId;
        testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}

function indicators(){
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }
    dots[counter].className += 'active';
}

function slideNext(){
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= testSlide.length -1){
        counter = 0;
    }
    else{
        counter++;
    }
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

function autoSliding(){
    deleteInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}

autoSliding();

const container = document.querySelector('.indicators');
container.addEventListener('mouseover', pause);
function pause(){
    clearInterval(deleteInterval);
}


container.addEventListener('nouseout', autoSliding);
