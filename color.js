let btn=document.querySelector("button");
btn.addEventListener("click",function(){
      let h3=document.querySelector("h3");
   let randomColor=getRandomColor();
      h3.innerText=randomColor;

     let div=document.querySelector("div");
     div.style.backgroundColor=randomColor;

    console.log("color updated")  ;
});
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

 let color= `rgb(${red},${green},${blue})`  
    return color;
}






// function outer(){
//     let b=10;
//        function inner(){
//            let a=20;
//            console.log(a+b);
//        }
//        return inner;
// }
// let inner=outer();
// inner()