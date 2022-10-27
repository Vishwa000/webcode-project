
var div=document.createElement("div");
div.setAttribute("class","main1");

var formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","from-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Makeup");
input.style.width="520px";

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.style.marginLeft="20px";
button.addEventListener("click",foo);



var makeup=document.createElement("div");
makeup.setAttribute("class","makeup");


formgroup.append(input,button,makeup);

div.append(formgroup);
document.body.append(div);

async function foo(){
  
    var makeupdetails=document.getElementById("main").value;
    console.log(makeupdetails);
    var res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`);
    var res1=await res.json();
    console.log(res1);
    try {
      
       var box=document.createElement("div");
       box.setAttribute("class","box")

        var container=document.createElement("div");
        container.setAttribute("class","container");

        var row=document.createElement("div");
        row.setAttribute("class","row");
        row.classList.add("row","m-3");
        container.append(row);
        box.append(container)

        for (var i=0;i<res1.length;i++){
         row.innerHTML+=`<div class="col-md-3">
        <div class="card" style="width: 18rem;">
        <img src="${res1[i].image_link}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">Product Name: ${res1[i].name}</h5>
          <h5 class="card-title">Brand Name: ${res1[i].brand}</h5>
          <h5 class="card-title">Price Name: ${res1[i].price}</h5>
          <p class="card-text">${res1[i].description}</p>
          <a href="${res1[i].product_link}" target="_blank">Product Link</a>
        </div>
        </div>`;
        
        document.body.append(box);
      }
      
    } catch (error) {
      
    }
      
      
    
    
}


