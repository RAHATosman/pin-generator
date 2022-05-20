document.getElementById("pin-btn").addEventListener('click', codeGenarator);
function codeGenarator(){
    const getCode = Math.round(Math.random()*10000);
    const roundCode = "" + getCode; 
    if (roundCode.length == 4) {
        document.getElementById('display-pin').value = getCode;
    }
    else{
        console.log("its 3");
    }
}

document.getElementById('key-pad').addEventListener('click', calculator);

function calculator(event){
    const calValue = event.target.innerText;
    const calcInput = document.getElementById('calc-pin');
    if(isNaN(calValue)){
        if(calValue == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const preValue = calcInput.value;
        const correntValue = preValue + calValue;
        calcInput.value = correntValue;
    }
    
}

document.getElementById('sub-btn').addEventListener('click', match);

function match(){
    const pinValue = parseInt(document.getElementById('display-pin').value);
    const calcValue = parseInt(document.getElementById('calc-pin').value);
    if(pinValue == calcValue){
        document.getElementById('right').style.display='block';
        document.getElementById('wrong').style.display='none';
    }
    else{
        document.getElementById('wrong').style.display='block';
        document.getElementById('right').style.display='none';
    }
}