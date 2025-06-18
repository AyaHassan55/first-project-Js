// Check If There's Local Storage Color Option
let mainColor = localStorage.getItem('color-option');
if(mainColor !== null){
    document.documentElement.style.setProperty('--main-color',mainColor);

    // remove active class from every color list
        document.querySelectorAll(".colors-list li").forEach((ele)=>{
            ele.classList.remove("active");
            // add active class on element with data color ===  local storage item
            if(ele.dataset.color === mainColor){
                ele.classList.add("active");
            }
            
        });
}


// Switch Color
const colorsLi = document.querySelectorAll('.colors-list li');
colorsLi.forEach(li =>{
    li.addEventListener("click",(e) =>{
        // set color on root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        // set color in local storage
        localStorage.setItem('color-option', e.target.dataset.color);

        // remove active class from every children
        e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
            ele.classList.remove("active");
        });
        // add active class on self
        e.target.classList.add("active");
    });
});

// random background option
let backgroundOption =true;
// variable to control backgriund interval
let intervalBackground ; 



// Switch random background
const randomBackElement = document.querySelectorAll('.random-background span');
randomBackElement.forEach(span =>{
    span.addEventListener("click",(e) =>{
        // remove active class from every children
        e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
            ele.classList.remove("active");
        });
        // add active class on self
        e.target.classList.add("active");

        if(e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randomizeImgs();
        }else{
            backgroundOption = false;
            clearInterval(intervalBackground);
        }
    });
});

// toggle setting
document.querySelector('.toggle-setting .fa-gear').onclick = function(){
    // toggle class fa-spin for rotation on self 
    this.classList.toggle('fa-spin');

    // toggle class open on main setting box
    document.querySelector('.setting-box').classList.toggle('open');
};


// select landing page Element
let landingPage= document.querySelector('.landing-page');
let imgsArray = ['img1.jpg','img3.jpg','img4.jpg'];



// function to randomize imgs
function randomizeImgs (){
    if(backgroundOption === true){
        intervalBackground = setInterval(()=>{
        let randomIndx = Math.floor(Math.random() * imgsArray.length);
        landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomIndx] + ' ")';

},1000);

    }
} 
randomizeImgs()



