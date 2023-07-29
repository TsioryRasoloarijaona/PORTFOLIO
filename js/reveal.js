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

let absolute = {
    origin : 'bottom',
    distance :'30px',
    duration : 2000
}

sr.reveal('.capital', 
   absolute
)

let absolute1 ={
    origin : 'bottom',
    distance :'30px',
    duration : 2000,
    delay : 1500
}

sr.reveal('#lowercase',absolute1)

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

sr.reveal('.back' , absolute)

sr.reveal('.front' , absolute1)

sr.reveal('.paragraph' , paragraph)

sr.reveal('.list' , card0)


