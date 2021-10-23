 function heading (){
    let head=document.getElementById("heading");

    head.style.fontSize="20px";
   }

 function paragraph (){
 let pr=document.getElementById("paragraph");
 pr.style ="font-style: italic";

 }

 function paragraph1(){
    let m = document.getElementById("paragraph");
    m.style= "background-color:red";

 }



 function img(){
    let img1 =document.getElementById("img1");
    let img2 =document.getElementById("img2");
    img1.style="display: none";
    img2.style="display:block";
   
 }


function setnewimg(){
   document.getElementById("img1").src="http://www.javatpoint.com/images/javascript/javascript_logo.png";
}
function setoldimg(){
   document.getElementById("img1").src="809-560s.jpg";
}

function ValidationEvent(){
   var name = document.getElementById("name").value;
   alert("new value.");
}

let allp = document.getElementById("paragraph");
allp.addEventListener("mouseover" , function(){
   allp.style="background-color: cornsilk";
})

allp.addEventListener("mouseout" , function(){
   allp.style="background-color:transparent";
})


