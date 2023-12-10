var cart_btn = document.getElementById("cart_btn");
var cart_b = document.getElementById("cart_b");
var carts =document.querySelector(".carts");
var side_bar=document.getElementById("sidebar");
var buy =document.querySelectorAll(".buynow");
var cart_room =document.querySelector(".cart_room");
var counter =document.querySelectorAll("#count");


cart_b.addEventListener("click",carted)
cart_btn.addEventListener("click",eme);
function arrow(){
   carts.classList.remove("active");
}
async function eme(e){
   e.preventDefault();
   await side_bar.classList.remove("active");
  setTimeout(function(){
   carts.classList.toggle("active");
  },500)
  
}  
function carted(){
   carts.classList.toggle("active");
}

var con=[];
buy.forEach(bought=>{
   bought.addEventListener("click",(e)=>{
      e.preventDefault();
  
     var mom= bought.parentNode;
     var brand_box = mom.childNodes[1];
     var i = brand_box.childNodes[1];
     var h2 = brand_box.childNodes[3];
     var price=  brand_box.childNodes[5];
     var img =i.childNodes[0];
      // console.log(mom);
//       <div class="carter">
//       <img src="./icon/p2.png" alt="">
//       <h1>Cloth </h1>
//       <input type="number" placeholder="1"  id="count">
//       <span>Price $10.98</span>
//   </div>
      var carter = document.createElement("div");
         carter.classList.add("carter");
         cart_room.appendChild(carter);
      var pic =document.createElement("img");
          pic.src=img.src;
         carter.appendChild(pic);
      var h =document.createElement("h2");
         h.innerHTML=h2.textContent;
         carter.appendChild(h);
          
      var c= document.createElement("input");
          c.setAttribute("type","number")
          c.setAttribute("id","count")
          c.classList.add("input")
          c.setAttribute("placeholder","X")
          c.setAttribute("readonly","readonly")
          c.setAttribute("onclick","lot(event)");
          carter.appendChild(c);
      var s= document.createElement("span");
          s.innerHTML=price.innerText;
          carter.appendChild(s);
          con.push(s.innerHTML.replace("Price $",""))
         
      var total=0;
      con.forEach(co=>{
       total +=co;
     })
console.log(total)
         
      cart_room.scrollTo(0,cart_room.scrollHeight);
      // console.log(go);
   
   })
  
})
function lot(event) {
   var am = event.target.parentNode;
//  console.log(am);
   cart_room.removeChild(am)
   
}





