//GET REQUEST

fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then((data)=>{

        data.forEach((item)=>{
        const element = document.createElement("p");
        const container = document.querySelector("#container");
        
        container.appendChild(element);

        });
    });
 
    
