let section = document.querySelector('.pre-footer');
let stat = document.querySelectorAll('.stats .sta');

let start = false;

function startcount (el){
    let max = el.dataset.max;

    let count = setInterval(()=>{
        el.textContent++;

        if(el.textContent == max){
            clearInterval(count);
        }
    },12000/stat)
}

window.onscroll = ()=>{
    if(window.scrollY >= section.offsetTop){
        if(!start){
        stat.forEach((sta) => startcount(sta))
    }
    start = true
}
}





