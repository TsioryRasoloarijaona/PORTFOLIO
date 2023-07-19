var i = 0 , text ;
text =  'it is nice to be important but it is more important to  be nice';


function typing (){
   
    if (i < text.length){
        document.getElementById('saying').innerText += text.charAt(i);
        i++;
    }


    setTimeout(typing, 150);
}

typing();





