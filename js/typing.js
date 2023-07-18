var i = 0 , text ;
text = 'it is nice to be important but';
var j = 0 ,text1;
text1 = 'it is more important to  be nice'

function typing (){
   
    if (i < text.length){
        document.getElementById('line1').innerHTML += text.charAt(i);
        i++;
    }
    if (j < text1.length){
        document.getElementById('line2').innerHTML += text1.charAt(j);
        j++;
    }

    setTimeout(typing, 150);
}

window.addEventListener('DOMContentLoaded',typing)