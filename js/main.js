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
// check if there is local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");
if(backgroundLocalItem !== null){
    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
    }else{
        backgroundOption = false;
    }

    // remove active class from all span
    document.querySelectorAll(".random-background span").forEach(element =>{
        element.classList.remove('active');
    });

    if(backgroundLocalItem === 'true'){
        document.querySelector(".random-background .yes").classList.add('active');
    }else{
        document.querySelector(".random-background .no").classList.add('active');
    }
}


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
            localStorage.setItem("background_option",true);
        }else{
            backgroundOption = false;
            clearInterval(intervalBackground);
            localStorage.setItem("background_option",false);
            
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

// Select Skills Selector
// let ourSkills = document.querySelector(".skills");

// window.onscroll = function () {

//   // Skills Offset Top
//     let skillsOffsetTop = ourSkills.offsetTop;
// // console.log(skillsOffsetTop);

//   // Skills Outer Height
//     let skillsOuterHeight = ourSkills.offsetHeight;


//   // Window Height
//     let windowHeight = this.innerHeight;

//   // Window ScrollTop
//     let windowScrollTop = this.pageYOffset;

//     if (windowScrollTop + windowHeight >= skillsOffsetTop) {

//         let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
            
//         allSkills.forEach(skill => {skill.style.width = skill.dataset.progress; });

//     }

// };
let ourSkills = document.querySelector(".skills");
let skillsAnimated = false;

window.addEventListener("scroll", function () {
  let skillsOffsetTop = ourSkills.offsetTop;
  let windowHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;

  // شغل الأنميشن لما أول جزء من skills يدخل الشاشة
  if (!skillsAnimated && windowScrollTop + windowHeight >= skillsOffsetTop) {
    document.querySelectorAll(".skill-progress span").forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
    skillsAnimated = true;
  }
});
// -----------------------Gallery--------------------------

// Create popup with image
let ourGallery = document.querySelectorAll('.gallery img');
ourGallery.forEach(img =>{
    img.addEventListener("click" , (e)=>{
        // create overlay element
        let overlay = document.createElement('div');
        // add class name to overlay
        overlay.className = 'popup-overlay';
        // append overlay to the body
        document.body.appendChild(overlay);

        // create popup box
        let popupBox = document.createElement('div');
        // add class name to box
        popupBox.className = 'popup-box';
         
        
        if(img.alt !== null){
            // create heading
            let imgHeading = document.createElement('h3');

            // create text for heading
            let imgText= document.createTextNode(img.alt);

            // append text to the heading
            imgHeading.appendChild(imgText);

            // append heading to popup box
            popupBox.appendChild(imgHeading);
                
        }


        // Create the image
        let popupImg = document.createElement('img');
        // set img source
        popupImg.src = img.src;
        // add image to popup box
        popupBox.appendChild(popupImg);
        // append popupbox to the body
        document.body.appendChild(popupBox);

        // create close span
        let closeButton = document.createElement('span');

        // create close button text
        let closeButtonText = document.createTextNode('X');

        // append tect to close button
        closeButton.appendChild(closeButtonText);

        // add class to close button
        closeButton.className = "close-button";
        
        // append close button to popup box
        popupBox.appendChild(closeButton);


    });

});
// close popup
document.addEventListener("click",function(e){
    if(e.target.className === 'close-button'){
        // remove current popup
        e.target.parentNode.remove();

        // remove overlay
        document.querySelector('.popup-overlay').remove();
    }
    
});

let allBullets = document.querySelectorAll('.nav-bullets');
allBullets.forEach(bullet =>{
    bullet.addEventListener("click", (e)=> {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })

    });

});
