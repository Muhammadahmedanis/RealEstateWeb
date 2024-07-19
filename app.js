let headText = document.getElementById("headText");
let name ="We Provide Architectural design and contruction";
let ind = 1;

const typeWriter =  () => {
   let newTitle = name.slice(0, ind);
   headText.innerText = newTitle;

   ind > name.length ?  ind = 1 : ind++;

   setTimeout(typeWriter, 100);
}
// typeWriter()


let seeBtn = document.querySelector(".seeBtn");
let cardShow = document.querySelector(".cardShow");
if(seeBtn){
   seeBtn.addEventListener("click", () => {
      if(seeBtn.innerText === "See more"){
         cardShow.setAttribute("class", "d-flex flex-wrap justify-content-around row-gap-4 my-3")
         seeBtn.innerText = "See less";
      }
      else if(seeBtn.innerText === "See less"){
         cardShow.setAttribute("class","d-none");
         seeBtn.innerText ="See more";
      }
   })
}


let  swiperCrds = new Swiper(".card_content", {
   spaceBetween: 25,
   grabCursor: true,
   loop: true,
   centerSlide: true,
   navigation: {
     nextEl: ".ri-arrow-right-line",
     prevEl: ".ri-arrow-left-line",
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
 
   breakpoints:{
     0: {
         slidesPerView: 1,
     },
     520: {
         slidesPerView: 2,
     },
     950: {
         slidesPerView: 3,
     },
   },
 });