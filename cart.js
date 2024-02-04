var cart_btn = document.getElementById("cart_btn");
var cart_b = document.getElementById("cart_b");
var cart_bd = document.getElementById("cart_bd");
var carts =document.querySelector(".carts");
var side_bar=document.getElementById("sidebar");
var buy =document.querySelectorAll(".buynow");
var cart_room =document.querySelector(".cart_room");
var counter =document.querySelectorAll("#count");
// var pack = new URLSearchParams(window.location.search);
// const username=pack.get("name");
// const email=pack.get("email");
// const password=pack.get("password");
// const buy_code=pack.get("buy_code");
// const gender=pack.get("gender");
var username =JSON.parse(localStorage.getItem("people"))[0].name;
document.getElementById("user_need").innerHTML=username.trim();
document.getElementById("user_need2").innerHTML=username.trim();


cart_b.addEventListener("click",carted)
cart_bd.addEventListener("click",carted)
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
      if(username==null && password==null && email==null && buy_code==null && gender==null){
         alert("please register first before buying goods....")
         return;
      }else{
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
            
         var total=[];
         con.forEach(co=>{
          total.push(co);
        })
         var vel =parseInt("");

         total.forEach(t=>{
            vel +=parseInt(t);
         })
     
       
         cart_room.scrollTo(0,cart_room.scrollHeight);
         // console.log(go);
      }
        })
      

  
})
function lot(event) {
   var am = event.target.parentNode;
//  console.log(am);
   cart_room.removeChild(am)
   
}





