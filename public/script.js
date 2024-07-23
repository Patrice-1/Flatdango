const navlist = document.querySelector('#nav-list');

navlist.addEventListener('submit', (event) => {
    event.preventDefault();
    const home = document.getElementById('home-btn');
    const movies = document.getElementById('movies-btn');
    const title = document.getElementByClassName('title').value;
    const showtime = document.getElementById('show-time').value;
    
    

    print(`Title: ${title}`);
    print(`Showtime: ${showtime}`);
    print(`Home Button Clicked: ${home.checked}`);
  });

    fetch('http://localhost:3000/films', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        showtimme,
        availableTickets,
      }),
    })
     .then((response) => response.json())
     .then((data) => {
        print(`Movie added: ${data.title}`);
      });
  
const movies = document.querySelector('#movie-btn');

movies.forEach((movies) => {

  const buyBtn = movies.querySelector('buy-ticket');

  const availableTicketsSpan = movies.querySelector('h3 span');

  let availableTickets = parseInt(availableTicketsSpan.textContent, 10);

  
  buyBtn.addEventListener('click', () => {
    
    if (availableTickets > 0) {
      
      availableTickets--;


      availableTicketsSpan.textContent = availableTickets;

      print(`Ticket Purchased, remaining ${availableTickets}.`);

      if (availableTickets === 0) {
        buyBtn.disabled = true;
      }

         

    } else {

      print('Sold out!');
    }
  });
});