//GET REQUEST
fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then((data)=>{

        data.forEach((data)=>{
        console.log(data);
        });
    });


    
