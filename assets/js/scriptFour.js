const API_KEY = "34748321-56ec586673804760cca13f7f6";
const NUM_IMAGES = 3;
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=old+books&image_type=photo&per_page=${NUM_IMAGES}`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const imageUrls = data.hits.map(hit => hit.webformatURL);
    const swiperSlides = imageUrls.map(url => {
      return `<div class="swiper-slide"><img src="${url}" /></div>`;
    });
    const swiperContainer = document.querySelector("#swiper-container");
    swiperContainer.innerHTML = `<div class="swiper-wrapper">${swiperSlides.join("")}</div><div class="swiper-pagination"></div>`;
    const swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })
  .catch(error => console.error(error));


// ---------------------------------------
const swiper = new Swiper('.swiper-containerTwo', {
  slidesPerView: 7,
  spaceBetween: 20,
   loop: true,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 6.30,
    },
    992: {
      slidesPerView: 5.30,
    },
    768: {
      slidesPerView: 4.30,
    },
    576: {
      slidesPerView: 3.16,
    },
    0: {
      slidesPerView: 2,
    },
  },
});

const categories = ["purse", "television", "pan", "table", "perfume", "cups","shirts","shoes","refrigerator","fan"];

const swiperWrapper = document.querySelector('#adverts');

const NUM_IMAGES2 = 3;
const textNum = 15;
categories.forEach(category => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=3`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach(hit => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'item');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        const linkElement = document.createElement('a');
       
        if(hit.tags.length < 25){
             linkElement.textContent = hit.tags;
        }else {
            const truncatedTags = hit.tags.substring(0, 25) + "...";
            linkElement.textContent = truncatedTags;
}

        cardElement.appendChild(imageElement);
        cardElement.appendChild(linkElement);
        swiperWrapper.appendChild(cardElement);
        
      });
    })
    .catch(error => {
      console.log(error);
    });
});


// ---------------------------------------
const swiperSell = new Swiper('.swiper-containerThree', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5.30,
    },
    992: {
      slidesPerView: 4.10,
    },
    768: {
      slidesPerView: 3.30,
    },
    576: {
      slidesPerView: 3.16,
    },
    0: {
      slidesPerView: 2,
    },
  },
});


const categoriesSell = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const sellPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const sellPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperSell = document.querySelector('#selling');

categoriesSell.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = sellPrice[(index + categoriesSell.indexOf(category)) % sellPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = sellPriceCross[(index + categoriesSell.indexOf(category)) % sellPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperSell.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



//---flash sales--------
const categoriesFlash = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const flashPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const flashPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperFlash = document.querySelector('#flash');

categoriesFlash.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = flashPrice[(index + categoriesFlash.indexOf(category)) % flashPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = flashPriceCross[(index + categoriesFlash.indexOf(category)) % flashPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperFlash.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



//-----------stock
const categoriesStock = ["grapes", "books", "phone", "computer", "man", "stocks","pants","shoes","refrigerator","fan"];
const stockPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const stockPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperStock = document.querySelector('#stock');

categoriesStock.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = stockPrice[(index + categoriesStock.indexOf(category)) % stockPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent =  stockPriceCross[(index + categoriesStock.indexOf(category)) % stockPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperStock.appendChild(cardElement); // changed categoriesStock to swiperWrapperStock     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



// jumia
const containerFour = new Swiper('.swiper-containerFour', {
  slidesPerView: 7,
  spaceBetween: 20,
   loop: true,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 5.30,
    },
    768: {
      slidesPerView: 4.30,
    },
    576: {
      slidesPerView: 3.16,
    },
    0: {
      slidesPerView: 2.44,
    },
  },
});


// ------------philip
const categoriesPhilip = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const philipPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const philipPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperPhilip = document.querySelector('#philip');

categoriesPhilip.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = philipPrice[(index + categoriesPhilip.indexOf(category)) % philipPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = philipPriceCross[(index + categoriesPhilip.indexOf(category)) % philipPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperPhilip.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});


// ------------large Appliances
const categoriesLarge = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const largePrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const largePriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperLarge = document.querySelector('#large');

categoriesLarge.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = largePrice[(index + categoriesLarge.indexOf(category)) % largePrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = largePriceCross[(index + categoriesLarge.indexOf(category)) % largePriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperLarge.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});

// shop from

