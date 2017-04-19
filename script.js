function fillMurray() {
  console.info('Fill Murraying...');

  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.src = `//www.fillmurray.com/${img.width}/${img.height}`;
  });
}

function replaceText() {
  const elements = Array.from(document.querySelector('body').children);

  elements.forEach(element => {
    if (element.textContent.includes('tv series')){
      console.log(element.textContent);
    }
  });
}

fillMurray();