const generate=document.getElementById("generate");
        var passwordGenerated=document.getElementById('passwordGenerated');
        generate.addEventListener('click',function(){
            let passwordLength=document.getElementById('passwordLength').value;
            let uppercase=document.getElementById('uppercase').checked;
            let lowercase=document.getElementById('lowercase').checked;
            let number=document.getElementById('numbers').checked;
            let symbols=document.getElementById('symbols').checked;
            let x='';
            if(uppercase==true){
                var uppercaseArray=['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
                for(let i=0;i<passwordLength;i++){
                    x=x+uppercaseArray[Math.floor(Math.random()*10)];
                }
                    
            }
            passwordGenerated.textContent=x;

        })