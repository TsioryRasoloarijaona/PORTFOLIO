function prog1(){const rating = document.getElementsByClassName('rating1')[0];
const block = document.getElementsByClassName('block1');

for (var i = 1 ; i < 100 ; i++){
    rating.innerHTML+= `<div class="block1"></div>`;
    block[i].style.transform = "rotate("+3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter1');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter = ()=>{
    const value = +counter.innerText;

    if(value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(()=>{
            NumberCounter()
        } , 25)
    }
}
NumberCounter() 

};
function prog2(){
    const rating = document.getElementsByClassName('rating2')[0];
const block = document.getElementsByClassName('block2');

for (var i = 1 ; i < 100 ; i++){
    rating.innerHTML+= `<div class="block2"></div>`;
    block[i].style.transform = "rotate("+3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter2');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter = ()=>{
    const value = +counter.innerText;

    if(value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(()=>{
            NumberCounter()
        } , 25)
    }
}
NumberCounter() 

};

function prog3(){
    const rating = document.getElementsByClassName('rating3')[0];
const block = document.getElementsByClassName('block3');

for (var i = 1 ; i < 100 ; i++){
    rating.innerHTML+= `<div class="block3"></div>`;
    block[i].style.transform = "rotate("+3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter3');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter = ()=>{
    const value = +counter.innerText;

    if(value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(()=>{
            NumberCounter()
        } , 25)
    }
}
NumberCounter() 

};

function prog4(){
    const rating = document.getElementsByClassName('rating4')[0];
const block = document.getElementsByClassName('block4');

for (var i = 1 ; i < 100 ; i++){
    rating.innerHTML+= `<div class="block4"></div>`;
    block[i].style.transform = "rotate("+3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter4');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter = ()=>{
    const value = +counter.innerText;

    if(value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(()=>{
            NumberCounter()
        } , 25)
    }
}
NumberCounter() 

};


function prog5(){
    const rating = document.getElementsByClassName('rating5')[0];
const block = document.getElementsByClassName('block5');

for (var i = 1 ; i < 100 ; i++){
    rating.innerHTML+= `<div class="block5"></div>`;
    block[i].style.transform = "rotate("+3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter5');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter = ()=>{
    const value = +counter.innerText;

    if(value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(()=>{
            NumberCounter()
        } , 25)
    }
}
NumberCounter() 

};

function prog6(){
    const rating = document.getElementsByClassName('rating6')[0];
const block = document.getElementsByClassName('block6');

for (var i = 1 ; i < 100 ; i++){
    rating.innerHTML+= `<div class="block6"></div>`;
    block[i].style.transform = "rotate("+3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter6');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter = ()=>{
    const value = +counter.innerText;

    if(value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(()=>{
            NumberCounter()
        } , 25)
    }
}
NumberCounter() 

};

let lastScrollTop =
window.pageYOffset || document.body.scrollTop;
let card = document.querySelector('.card');

function handleScroll() {

    let direction;
    const scrollTopPosition =
      window.pageYOffset || document.body.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      direction = true
    } else if (scrollTopPosition < lastScrollTop) {
      direction = false
    }
    lastScrollTop =
      scrollTopPosition <= 0 ? 0 : scrollTopPosition;
      return direction;
  }

  let skill = document.querySelector('.skill')

window.onscroll = ()=>{

    let direction = handleScroll();
    let top = window.scrollY;
    let offset = skill.offsetTop;
    let height = skill.offsetHeight;
    let total = window.innerHeight;
 

console.log(document.body.scrollTop);


    console.log(direction);
    console.log((offset + height) - total);
    console.log(top+1);

    if (top >= ((offset + height*4/5) - total) && top <= ((offset + height) - total) && direction == true ){
        console.log('here');
        prog1();
        prog2();
        prog3();
        prog4();
        prog5();
        prog6();
    }
}






