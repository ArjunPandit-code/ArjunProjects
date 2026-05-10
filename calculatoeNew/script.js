function computerChoice(){
    let cMove;
    cMove=Math.floor(Math.random()*3+1);
    return cMove; 
}

  
const btn = document.querySelector(".btncontainer");
 let history = {
        won:0,
        loss:0,
        draw:0,
    }
btn.addEventListener('click',(e)=>{
   
    let res = document.getElementById('result');
    let ress = document.getElementById('resullt');
  function matchResult(computerChoice){
    let userValue = e.target.id;
      if(userValue==='rock'){
                    if(computerChoice===1){
                    return 3;
                    }else if(computerChoice===2){
                       return 2;                          
                    }else if(computerChoice===3){
                          return 1;    
                    }
                }else if(userValue==='paper'){
                     if(computerChoice===1){
                        return 1;           
                    }else if(computerChoice===2){
                        return 3;
                        
                    }else if(computerChoice===3){
                       return 2;
                    }
                }else if(userValue==='scissor'){
                     if(computerChoice===1){
                      return 2;
                    }else if(computerChoice===2){
                            return 1;        
                    }else if(computerChoice===3){
                      return 3;
                    }
                }
            }
            let summary = matchResult(computerChoice());
         
            if(summary===1){
                history.won++;
                 ress.innerText = ` Your Result = Won`;
                res.innerText = `win: ${history.won} loss: ${history.loss} draw: ${history.draw}; `
            }else if(summary===2){ 
                history.loss++;
                   ress.innerText = ` Your Result = Loss`;
                res.innerText = `win: ${history.won} loss: ${history.loss} draw: ${history.draw}; `}
            else{
                history.draw++;
                   ress.innerText = ` Your Result = Draw`;
                res.innerText = `win: ${history.won} loss: ${history.loss} draw: ${history.draw}; `
            } 
        }
    )
