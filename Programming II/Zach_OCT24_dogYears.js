const num = document.getElementById("inputBox");
const button = document.getElementById("button")
const output = document.getElementById("output")

// used chatGPT to debug the onclick button event
button.onclick = function(){
    var x = Number(num.value);
    

    if (isNaN(x)|| x<=0){
        output.textContent = 'Please Enter a Positive number'
    }else{
    var y = dogYear(x);
    output.textContent = y
    }
}

function dogYear(x){
    var y = x
    if(y <= 1){
        y = y*15
    }else if(y>1 && y<=2){
        y = (y-1)*9 +15
    }
    else{
        y = (y-2)*5 +24
    }

    return y
}


console.log(y)




