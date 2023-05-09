let player='x';

let title=document.querySelector('.dashboard')

let square=[];

function game(id){
    let element=document.getElementById(id);
    if(player==='x' && element.innerHTML==""){
        element.innerHTML='x';
        player='o';
        title.innerHTML='O'
    }

    else if(player==='o' && element.innerHTML===""){
        element.innerHTML='o';
        player='x';
        title.innerHTML='X'
    
}
Winner();
}

function WhoWin(num1,num2,num3){
title.innerHTML=`${square[num1] } winner`;
document.getElementById('item'+num1).style.background='#000';
document.getElementById('item'+num2).style.background='#000';
document.getElementById('item'+num3).style.background='#000';

setInterval(function(){title.innerHTML+='.',1000});
setTimeout(function(){location.reload()},4000)

}
function Winner(){
    for(let i=1;i<10;i++){
        square[i]=document.getElementById('item'+i).innerHTML;
    }

    if (square[1]== square[2] && square[2] ==square[3] && square[1]!==''){
WhoWin(1,2,3);

    }
    else if(square[4]== square[5] &&square[5] ==square[6] && square[4]!==''){
        WhoWin(4,5,6);
    }
 
    else if(square[7]== square[8] &&square[7] ==square[9] && square[7]!==''){
        WhoWin(7,8,9);
    }
    
    else if(square[3]== square[5] &&square[5] ==square[9] && square[3]!==''){
        WhoWin(3,5,9);
    }
    
    else if(square[3]== square[5] &&square[5] ==square[7] && square[3]!==''){
        WhoWin(3,5,7);
    }
    
    else if(square[1]== square[4] &&square[4] ==square[7] && square[1]!==''){
        WhoWin(1,4,7);
    }
    
    else if(square[2]== square[5] &&square[5] ==square[8] && square[2]!==''){
        WhoWin(2,5,8);
    }
    
    else if(square[3]== square[6] &&square[6] ==square[9] && square[3]!==''){
        WhoWin(3,6,9);
        
    }
   
    
}
