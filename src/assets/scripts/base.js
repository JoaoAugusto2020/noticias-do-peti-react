//MODO NOTURNO
function trocarBtn(valor){
    if(valor==1){
        //Troca pro Sol
        document.getElementById('btnLua').style.display='none';
        document.getElementById('btnSol').style.display='block';

        //Movimenta o Sol
        document.getElementById("btnSol").style.marginLeft='35px';
        document.getElementById("btnLua").style.marginLeft='35px';
    }
    if(valor==2){
        //Troca pra Lua
        document.getElementById('btnLua').style.display='block';
        document.getElementById('btnSol').style.display='none';

        //Movimenta a Lua
        document.getElementById("btnLua").style.marginLeft='5px';
        document.getElementById("btnSol").style.marginLeft='5px';
    }
}

//DROPTEXT
var cont1 = 0;
function dropdownList(valor){ 
    cont1+=valor;
    
    if (cont1%2==0) {
        //Esconde os Itens
        document.getElementById('dropItens').style.visibility='hidden';
        document.getElementById('dropItens').style.height='0px';

        //Rotação da seta
        document.getElementById('iconAngleDrop').style.transform='rotate(00deg)';
        document.getElementById('iconAngleDrop').style.transition='0.2s';
    }else{
        //Mostra os Itens
        document.getElementById('dropItens').style.visibility='visible';
        document.getElementById('dropItens').style.height='80px';

        //Rotação da seta
        document.getElementById('iconAngleDrop').style.transform='rotate(-90deg)';
        document.getElementById('iconAngleDrop').style.transition='0.2s';
    }
}

var cont2 = 0;
function menuShow(valor){
    cont2+=valor;
    
    if (cont2%2==0) {
        //VISIVEL

        //Movimento do botão
        document.getElementById('hamburguerBtn').style.left='15%';

        //Movimento do Menu
        document.getElementById('Menu').style.width='auto';
        document.getElementById('paginas').style.visibility='visible';

        //Rotação da seta
        document.getElementById('iconAngleHide').style.transform='rotate(0deg)';
        document.getElementById('iconAngleHide').style.transition='0.2s';

        

    }else{
        //ESCONDENDO
        
        //Movimento do botão
        document.getElementById('hamburguerBtn').style.left='1%';
        
        //Movimento do Menu
        document.getElementById('Menu').style.width='5%';
        document.getElementById('paginas').style.visibility='hidden';
        if(cont1%2!=0){
            document.getElementById('dropItens').style.transition='0s';
            document.getElementById('dropItens').style.visibility='hidden';
            dropdownList(1);
        }
        
        //Rotação da seta
        document.getElementById('iconAngleHide').style.transform='rotate(-180deg)';
        document.getElementById('iconAngleHide').style.transition='0.2s';
        
    }
}

//MOSTRAR PÁGINA CREATE
function autenticarCreate(){
    //Trocar Formulário
    document.getElementById('formCreate').style.display='flex';
    document.getElementById('formLogin').style.display='none';

    //Trocar texto
    document.getElementById('textoCreate').style.display='flex';
    document.getElementById('textoLogin').style.display='none';
}

//MOSTRAR PÁGINA LOGIN
function autenticarLogin(){
    //Trocar Formulário
    document.getElementById('formCreate').style.display='none';
    document.getElementById('formLogin').style.display='flex';

    //Trocar texto
    document.getElementById('textoCreate').style.display='none';
    document.getElementById('textoLogin').style.display='flex';
}