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

replaceText();
fillMurray();