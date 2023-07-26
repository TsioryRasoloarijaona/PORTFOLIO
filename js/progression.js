function prog(){const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');

for (var i = 1 ; i < 100 ; i++){
    rating.innerHTML+= `<div class="block"></div>`;
    block[i].style.transform = "rotate("+3.6 * i + "deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const counter = document.querySelector('.counter');
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


window.onscroll = ()=>{

    let direction = handleScroll();
    let top = window.scrollY;
    let offset = card.offsetTop;
    let height = card.offsetHeight;
    let total = window.innerHeight;
 

console.log(document.body.scrollTop);


    console.log(direction);

    if (top >= ((offset + height/1.5) - total) && top<=((offset + height) - total) && direction == true ){
        console.log('here');
        prog();
    }
}






