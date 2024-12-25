document.getElementById('searchMovies').addEventListener('click', async () => {
    const query = document.getElementById('movieInput').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await response.json();
  
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
  
    movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.show.name;
      movieList.appendChild(li);
    });
  });