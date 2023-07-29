const sr = ScrollReveal();

let tittle = {
    duration : 3000,
    origin : 'left',
    distance : '60px'
    
}

sr.reveal('.smoke',tittle);
sr.reveal('.resp' , tittle);

sr.reveal('.icon', {
    duration : 3000,
    origin : 'left',
    distance : '60px',
    delay : 2000
})

sr.reveal('#cv',{
    scale :0,
    origin:'0px',
    duration : 5000
})

sr.reveal('.capital', {
    origin : 'bottom',
    distance :'30px',
    duration : 2000
})

sr.reveal('#lowercase',{
    origin : 'bottom',
    distance :'30px',
    duration : 2000,
    delay : 1500
})

sr.reveal('.introduce' , {
    scale : 0 , 
    delay : 1000,
    duration : 2000
})

sr.reveal('.education' , {
    origin : 'bottom',
    distance : '400px',
    duration : 2000
})