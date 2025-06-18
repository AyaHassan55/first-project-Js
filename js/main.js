// toggle setting
document.querySelector('.toggle-setting .fa-gear').onclick = function(){
    // toggle class fa-spin for rotation on self 
    this.classList.toggle('fa-spin');

    // toggle class open on main setting box
    document.querySelector('.setting-box').classList.toggle('open');
};

// Switch Color
const colorsLi = document.querySelectorAll('.colors-list li');
colorsLi.forEach(li =>{
    li.addEventListener("click",(e) =>{
        // set color on root
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
    })
});

// select landing page Element
let landingPage= document.querySelector('.landing-page');
let imgsArray = ['img1.jpg','img3.jpg','img4.jpg'];

setInterval(()=>{
    let randomIndx = Math.floor(Math.random() * imgsArray.length);

    landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomIndx] + ' ")';

},10000);
