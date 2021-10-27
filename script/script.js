$(document).ready(show_cupcakes);

fetch("Json.json")
.then((res) => {
    return res.json();
  })
  .then((cup_cakes) => {
    
    show_cupcakes(cup_cakes);

    
  });

function show_cupcakes (data){
    var table = document.getElementById ("cupcake-table");
    
    
    for (var i = 0; i < data.length; i++) {
        let color = "";
        console.log (data[i])
        if (data[i].calories == "high"){
            color = "red";
        } else if (data[i].calories == "medium"){
            color = "orange";
        } else {
            color = "green";
        }
        var row = `<tr> 
                        <td>${data[i].name}</td>
                        <td class = "type${i}">${data[i].calories}</td>
                        <td>${data[i].weight}</td>
        
                   </tr>`
                table.innerHTML += row;
            document.querySelector (`.type${i}`).style.backgroundColor = color;
    
               

    }
      
}





//Declare values for validation
let submit = document.querySelector (".submit");
let fname = document.getElementById ('fname');
let nameReq = document.querySelector (".nameReq");
console.log (fname.value);
let count = document.getElementById ("count");
let countReq = document.querySelector (".countReq");
let type = document.querySelector (".type");
let typeReq = document.querySelector (".typeReq");
let time = document.querySelector (".time");
let timeReq = document.querySelector (".timeReq");
let allergies = document.querySelector (".allergies");
let allergiesReq = document.querySelector ('.allergiesReq');

    //write code that validates the form
  
    
    
    
    
    submit.addEventListener ("click" , function (e) {
        e.preventDefault();
        if (fname.value === ""){
            nameReq.innerHTML = `Please enter your name`;
            fname.style.border = "solid red";

        }
        else if (fname.value.length < 5 || fname.value.length > 16) {
            nameReq.innerHTML = `The name must be between 5 and 16 characters`;
            fname.style.border = "solid red";

        } else {
            nameReq.innerHTML = ``;
            fname.style.border = "solid green";
            let newUser = JSON.stringify(fname.value);
            localStorage.setItem ("userName" , newUser);
        }
        if (count.value == 0 || count.value == "" || count.value > 15){
            countReq.innerHTML = `the count must be between 1 and 15`
            count.style.border = "solid red";

          

        } else  {
            countReq.innerHTML = ``;
            count.style.border = "solid green";

        }
        if (type.value == "None"){
            typeReq.innerHTML = `Choose your type`;
            type.style.border = "solid red";
        } else {
            typeReq.innerHTML = "";
            
            type.style.border = "solid green";

        }
        if (time.value == "None"){
            timeReq.innerHTML = `Choose your time`;
            time.style.border = "solid red";

        } else if (type.value == "Chocolate" && time.value == "4:00PM") {
            timeReq.innerHTML = `Chocolate cake cannot be delivered at 4:00 PM`;
            time.style.border = "solid red";

     
        }
         else {
            timeReq.innerHTML = "";
            time.style.border = "solid green";

        }
        if (type.value == "Chocolate" && allergies.value == "DairyFree") {
           allergiesReq.innerHTML = `Chocolate cake is not dairy free`;
           allergies.style.border = "solid red";

        } else if (type.value == "Pecan" && allergies.value == "NutFree") {
            allergiesReq.innerHTML = `Pecan cake is not Nut free`
            allergies.style.border = "solid red";
            
          
        }else {
            allergiesReq.innerHTML = ""; 
            allergies.style.border = "solid green";


        }
    

        
        
    }) ;
  
     

    
//Show name
let welcome = document.getElementById ("welcome")
let show = document.getElementById ("Show")
 
show.addEventListener ("click" , function (e) {
    let getUser = localStorage.getItem ("userName");
    welcome.innerHTML = `Welcome ${getUser}`;
    console.log (getUser)

})
