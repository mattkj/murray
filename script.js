function fillMurray(){
    console.info('Fill Murraying...');

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.src = `//www.fillmurray.com/${img.width}/${img.height}`;
    });
}

fillMurray();