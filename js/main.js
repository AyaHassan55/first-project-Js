let landingPage= document.querySelector('.landing-page');
let imgsArray = ['img1.jpg','img3.jpg','img4.jpg'];

setInterval(()=>{
    let randomIndx = Math.floor(Math.random() * imgsArray.length);

    landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomIndx] + ' ")';

},10000);
