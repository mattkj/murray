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

// check if local storage key exists
// if YES, retrieve key value and pass to replaceHeadings()
// if NO, get data from api, set local storage and pass to replaceHeadings()

  chrome.storage.local.get('movies', function(item){
    if (item.hasOwnProperty('movies')){
      console.info('Fetching movies from local storage...');
      replaceHeadings(item.movies);
    } else {
      console.info('Fetching movies from api...');
      fetch('https://moviesapi.com/m.php?i=0000195&type=person&r=json')
        .then(response => response.json())
        .then(data => {
          chrome.storage.local.set({'movies': data.movies_act.split(',')}, function(item){
            replaceHeadings(item.movies);
          });
        })
        .catch(error => console.log('Fetch error: ', error.message));
    }
  });
  
}

replaceText();
fillMurray();
getMovies();