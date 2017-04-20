function fillMurray() {
  console.info('Fill Murraying...');

  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.src = `//www.fillmurray.com/${img.width}/${img.height}`;
  });
}

function replaceText() {
  console.info('Replacing text...');

  const elements = Array.from(document.querySelector('body').getElementsByTagName('*'));
  const title = document.querySelector('title');

  elements.forEach(element => {
    if (element.innerHTML.includes('Mr.')){
      element.innerHTML = element.innerHTML.replace(/(mr|mr\.+)\s(\w+)/gi, 'Mr. Murray');
    }
  });

  title.textContent = "Bill F*cking Murray";
}

function replaceHeadings(movies){
  console.info('Replacing headings...');

  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach((heading) => {
    const randomNum = Math.floor(Math.random() * movies.length);
    heading.textContent = movies[randomNum];
  });
}

function getMovies(){
  let movies = [];

  console.info('Fetching movies from api...');

  fetch('https://moviesapi.com/m.php?i=0000195&type=person&r=json')
    .then(response => response.json())
    .then(data => {
      movies = data.movies_act.split(',');
      replaceHeadings(movies);
    })
    .catch(error => console.log('Fetch error: ', error.message));
  
}

replaceText();
fillMurray();
getMovies();