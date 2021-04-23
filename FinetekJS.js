AOS.init();
var carIndx=0;
Carousel();
function plus(n){
    Carousel(carIndx+=n);
}
function Current(n){
    Carousel(carIndx=n);
}

function Carousel(n){
    var slide=document.getElementsByClassName("carousel");                
    for(var i=0;i<slide.length;i++){                    
        slide[i].style.display="none";
    }
    carIndx++;
    if(carIndx>slide.length){carIndx=1;}
    slide[carIndx-1].style.display="block";                
    setTimeout(Carousel,4000);
}

var ExpIndx=1;            
function ExpandBtn(n){
    Expansion(ExpIndx=n);
}
function Expansion(n){
    var i,Exp,a,b;
    Exp=document.getElementsByClassName("expansion");
     a=document.getElementsByClassName("expdown");
     b=document.getElementsByClassName("expUp");
    if(n>Exp.length){ExpIndx=1}
    if(n<1){ExpIndx=Exp.length}
    for(i=0;i<Exp.length;i++){
        Exp[i].style.height="50px"; 
        a[i].style.display="block";
        b[i].style.display="none";                 
         
    }
    if(Exp[ExpIndx-1].style.height="unset"){
        Exp[ExpIndx-1].style.height="50px";
        

    }
    if(Exp[ExpIndx-1].style.height="50px"){
        Exp[ExpIndx-1].style.height="unset";
        Exp[ExpIndx-1].style.padding="14px";
        a[ExpIndx-1].style.display="none"
        b[ExpIndx-1].style.display="block";
    }
}
function Input(x){
    document.getElementById(x).style.borderStyle='none none solid none';
}
function ModalShow(){
    document.getElementsByClassName("modal")[0].style.display="block";
    var a=document.getElementById("body");
    a.style.backgroundColor="#dad2d2";
    a.style.opacity=".8";
    a.style.pointerEvents="none";              


}
function ModalHide(){
    document.getElementsByClassName("modal")[0].style.display="none";
    document.getElementById("body").removeAttribute("style");
    
}
function Service(){
document.getElementById("svcup").style.display="block";
document.getElementById("svcdown").style.display="none";
} 
