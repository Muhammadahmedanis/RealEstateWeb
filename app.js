let headText = document.getElementById("headText");
let name ="We Provide Architectural design and Contruction";
let ind = 1;

const typeWriter =  () => {
   let newTitle = name.slice(0, ind);
   headText.innerText = newTitle;

   ind > name.length ?  ind = 1 : ind++;

   setTimeout(typeWriter, 100);
}
typeWriter()

let product = [
   {id: 1, city: "Karachi", img:'./images/card1.png'},
   {id: 2, city: "Lahore", img:'./images/card2.png'},
   {id: 3, city: "Islamabad", img:'./images/card3.png'},
   {id: 4, city: "Multan", img:'./images/card4.png'},
   {id: 5, city: "Karachi", img:'./images/card1.png'},
   {id: 6, city: "Lahore", img:'./images/card2.png'},
   {id: 7, city: "Islamabad", img:'./images/card3.png'},
   {id: 8, city: "Multan", img:'./images/card4.png'},
]


let filterCard = document.getElementById('filterCard')
let ele = (city, image) => {
   filterCard.innerHTML += `
   <div class="sec2-card p-2">
              <div class="sec2-img">
                <img src= ${image} alt="">
              </div>
              <div class="sec2-text p-2">
                <div class="location d-flex align-items-baseline">
                  <i class="fa-solid fa-location-dot mx-1"></i>
                  <p>${city}, Bahdurabad</p>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-baseline">
                    <i class="fa-solid fa-bed mx-1"></i>
                    <p>4bed</p>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <i class="fa-regular fa-square mx-1"></i>
                    <p>10x10</p>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <i class="fa-regular fa-square mx-1"></i>
                    <p>2000m<sup>2</sups></p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <button class="cardBtn">Buy now</button>
                  <div class="d-flex align-items-baseline pt-3">
                    <p>75,000,00</p>
                    <i class="fa-solid fa-dollar-sign"></i>
                  </div>
                  </div>  
              </div>
            </div>`
}

let getProd;
let dropDown = document.getElementById("dropDown");
dropDown.addEventListener("change", (e) => {
   if(e.target.value != ''){
      getProd = product.filter((data) => {
         return data.city === e.target.value;
      })
   }
   console.log(getProd);
   filterCard.innerHTML = '';
   getProd.forEach((val) => {
      ele(val.city, val.img)
   })
})



let showPro = () => {
   product.forEach((data) => {
      ele(data.city, data.img)
   })
}
showPro()


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




 let next = document.getElementById("next");
 let prev = document.getElementById("prev");
 
 if(next){
    next.addEventListener("click", (e) => {
       if(e.target.id === "next"){
          next.classList.add("nextClk");
          if(prev.classList.contains("prevClk")){
             prev.classList.remove("prevClk");
          }
       }
    });
 }
 
 if(prev){
    prev.addEventListener("click", (e) => {
       if(e.target.id === "prev"){
          prev.classList.add("prevClk");
          if(next.classList.contains("nextClk")){
             next.classList.remove("nextClk");
          }
       }
    });
 }
 