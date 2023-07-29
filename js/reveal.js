const sr = ScrollReveal();

let tittle = {
    duration : 3000,
    origin : 'left',
    distance : '60px'
    
}

let paragraph = {
    scale : 0 , 
    delay : 1000,
    duration : 2000
}

sr.reveal('.smoke',tittle);
sr.reveal('.resp' , tittle);

sr.reveal('.icon', {
    duration : 3000,
    origin : 'left',
    distance : '60px',
    delay : 1500
})

sr.reveal('#cv',{
    scale :0,
    origin:'0px',
    duration : 5000
})





sr.reveal('.introduce' , paragraph)

sr.reveal('.education' , {
    origin : 'bottom',
    distance : '150px',
    duration : 2000
})

let card0 = {
    origin: 'left',
    distance : '150px',
    duration : 1500,
    delay:1000
}

sr.reveal('.card0' , card0)



sr.reveal('.project',{
    origin : 'top',
    distance : '50px',
    duration : 2000
})

sr.reveal('.time',paragraph)


sr.reveal('.paragraph' , paragraph)

sr.reveal('.list' , card0)


