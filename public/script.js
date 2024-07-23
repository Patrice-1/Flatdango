//GET REQUEST
fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then((data)=>{

        data.forEach((data)=>{
        console.log(data);
        });

        
    });

    const element = document.getElementById(data);
    const navBtn = document.getElementById("nav-btn");
    const homeBtn = document.getElementById("home-btn");
    const moviesBtn = document.getElementById("movies-btn");
    console.log(data);

