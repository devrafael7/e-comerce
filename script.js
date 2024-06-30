
const bgLogin = document.getElementById('bg-login');
const closeLogin = document.getElementById('close-login').addEventListener('click', function(){

    loader.classList.remove('hidden');

    setTimeout(function(){
            bgLogin.classList.add('hidden');
            loader.classList.add('hidden');
            confirmationPopUp.classList.add('hidden');
            
    }, 800)
})

const confirmationPopUp = document.getElementById('confirmation-pop-up');

const loader = document.getElementById('bg-loader');

let userName = document.getElementById('user-name');
const userBtn = document.getElementById('user-btn');

const signUpBtn = document.getElementById('sign-up-btn');

const littleCartBtn = document.getElementById('little-cart-btn');
const bgCart = document.getElementById('bg-cart');

const fixedCartBtn = document.getElementById('fixed-cart-btn');

fixedCartBtn.addEventListener('click', function(){
   
    loader.classList.remove('hidden');

    setTimeout(function(){
       
        bgCart.classList.remove('hidden');
        loader.classList.add('hidden');
    }, 500)
    backArrowBtn.addEventListener('click', function(){
        bgCart.classList.add('hidden');
    })
})

const backArrowBtn = document.getElementById('back-arrow-btn');

littleCartBtn.addEventListener('click', function(){
  
    loader.classList.remove('hidden');

    setTimeout(function(){
       
        bgCart.classList.remove('hidden');
        loader.classList.add('hidden');
    }, 500)
    backArrowBtn.addEventListener('click', function(){
        bgCart.classList.add('hidden');
    })
})

signUpBtn.addEventListener('click', function(){
    let userInformations = document.getElementById('user-informations');

    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
    const inputPassword = document.getElementById('input-password');

    const nameValue = inputName.value;
    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value;

    const userNamePopUp = document.getElementById('user-name-pop-up');
    const userEmail = document.getElementById('user-email');

    if (nameValue === '' || emailValue === '' || passwordValue === '') {
        confirmationPopUp.classList.remove('hidden');
        return;
    } else {
        loader.classList.remove('hidden');

        setTimeout(function(){
            bgLogin.classList.add('hidden');
            loader.classList.add('hidden');
            userName.textContent = `${nameValue}`;
            littleCartBtn.classList.add('hidden');
        }, 2000)
    
    }

    userNamePopUp.textContent = `${nameValue}`;
    userEmail.textContent = `${emailValue}`;
    const menuName = document.getElementById('menu-name');
    menuName.textContent = `${nameValue}`;

    userBtn.addEventListener('click', function(){
        userInformations.classList.toggle('hidden');
        bgLogin.classList.add('hidden')
        
    })
})

userBtn.addEventListener('click', function(){
        bgLogin.classList.remove('hidden')
})

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', function(){
    menu.classList.remove('hidden');
    const menuBackBtn = document.getElementById('menu-back-btn');
    menuBackBtn.addEventListener('click', function(){
        menu.classList.add('hidden');
    })
})


const filterBtn = document.getElementById('filter-btn');

filterBtn.addEventListener('click', function(){
    const filter = document.getElementById('filter');
    filter.classList.remove('hidden');
    const confirmFilterBtn = document.getElementById('confirm-filter-btn');
    const backArrowFilterBtn = document.getElementById('back-arrow-btn-filter');
    backArrowFilterBtn.addEventListener('click', function(){
        filter.classList.add('hidden');
    })
    confirmFilterBtn.addEventListener('click', function(){
        loader.classList.remove('hidden');
        setTimeout(function(){
            loader.classList.add('hidden');
            filter.classList.add('hidden');
        }, 700)
            
    })
})


const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const filterButton = document.getElementById('filter-button');

priceRange.addEventListener('input', function() {
  priceValue.textContent = '$' + priceRange.value;
});

const images = [
    'imgs/pngwing.com (1).png',
    'imgs/pngwing.com (airmax).png',
    'imgs/pngwing.com.png'
  ];
  
  let currentIndex = 1;
  const mainCard = document.getElementById('mainCard');
  const mainCardImage = document.getElementById('mainCardImage');
  const buttons = document.querySelectorAll('.btn');
  let currentButton = 0;
  
  function updateImage() {
    mainCardImage.classList.add('opacity-0');
    setTimeout(() => {
      mainCardImage.src = images[currentIndex];
      mainCardImage.classList.remove('opacity-0');
  
      if (currentIndex === 2) {
        mainCardImage.style.width = '160px'; 
        mainCardImage.style.height = 'auto'; 
        mainCardImage.style.marginTop = '50px'
      } else if (currentIndex === 0){
        mainCardImage.style.width = '160px'; 
        mainCardImage.style.height = 'auto'; 
        mainCardImage.style.marginBottom = '20px'
      } else {
        mainCardImage.style.width = '130px'; 
        mainCardImage.style.height = 'auto'; 
        mainCardImage.style.marginLeft = '40px';
        mainCardImage.style.marginBottom = '40px'
      }
  
      
      buttons.forEach((btn, index) => {
        if (index === currentIndex) {
          btn.classList.remove('opacity-50');
          btn.classList.add('w-5');
        } else {
          btn.classList.add('opacity-50');
          btn.classList.remove('w-5');
        }
      });
  
      // Atualiza o índice para a próxima imagem no array circularmente
      currentIndex = (currentIndex + 1) % images.length;
    }, 300);
  }
  
  function autoChangeImage() {
    setInterval(() => {
      updateImage();
    }, 5000); 
  }
  
  mainCard.addEventListener('click', updateImage);
  
  autoChangeImage();
  
  let startX = null;
  let startY = null;
  
  mainCard.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  
  mainCard.addEventListener('touchend', function(e) {
    if (!startX || !startY) return;
  
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
  
    const diffX = startX - endX;
    const diffY = startY - endY;
  
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        currentIndex = (currentIndex - 1) % images.length;
      } else {
        currentIndex = (currentIndex + 1 + images.length) % images.length;
      }
  
      updateImage();
    }
  
    startX = null;
    startY = null;
  });

const sendBtn = document.getElementById('send-btn');
const message = document.getElementById('message');

let emailNotification = document.getElementById('email-notification');

sendBtn.addEventListener('click', function() {
  let enValue = emailNotification.value;
  
    if (enValue === '') {
      message.textContent = `Check the blank`;
      message.classList.remove('bg-green-500');
      message.classList.add('bg-red-500');
      message.classList.remove('hidden');
      setTimeout(function(){
        message.classList.add('hidden');
      }, 2200);
      return;
    } else {
      message.innerHTML = `Thanks! We will email you back <br> if the desired product arrives.`;
      message.classList.remove('hidden')
      message.classList.add('bg-green-500');
      setTimeout(function() {
          message.classList.add('hidden');
      }, 2200); 
      
      emailNotification.value = '';
    }
});


const finalArrow = document.getElementById('final-arrow');
finalArrow.addEventListener('click', function(){
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

let wholeFootwear = document.querySelector('.wholeFootwear');
let wholeWatches = document.querySelector('.wholeWatches');
let titleAllProducts = document.getElementById('title-all-products');

const allItemsBtn = document.querySelector('.allItemsBtn');
allItemsBtn.addEventListener('click', function(){
  wholeFootwear.classList.remove('hidden');
  wholeWatches.classList.remove('hidden');

  titleAllProducts.textContent = `All Products`;
})

const allFootwearBtn = document.querySelector('.allFootwearBtn');
allFootwearBtn.addEventListener('click', function(){
  wholeFootwear.classList.remove('hidden');
  wholeWatches.classList.add('hidden');

  titleAllProducts.textContent = `Footwear`;
})

const allWatchBtn = document.querySelector('.allWatchBtn');
allWatchBtn.addEventListener('click', function(){
  wholeFootwear.classList.add('hidden');
  wholeWatches.classList.remove('hidden');

  titleAllProducts.textContent = `Watches`;
})

const cart = [];
const itemsFromCart = document.querySelector('.itemsFromCart');
const cartCounter = document.querySelector('.cartCounter');
let count = 0;
let quantityCart = document.getElementById('quantity-cart');
let fixedCartCounter = document.getElementById('fixed-cart-counter');
let totalCart = document.getElementById('total-cart'); 

function addToCart(name, price, image) {
  const existingItem = cart.find(item => item.name === name && item.price === price && item.image === image);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }

  fixedCartCounter.classList.remove('hidden');

  console.log(cart);
  updateCart();
}

function updateCart() {
  itemsFromCart.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList = 'cart-item w-full bg-gray-200 rounded-xl h-24 flex items-center px-3 gap-3 relative';
    cartItem.innerHTML = `
      <img class="w-24 h-20 my-4" src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p class="mt-2 font-semibold">$${(item.price * item.quantity).toFixed(2)}</p> <!-- Mostra o preço multiplicado pela quantidade -->
        <div class="flex gap-2 absolute right-3 top-3">
          <div class="cursor-pointer rounded-full h-5 w-5 text-black font-normal border border-black border-solid flex justify-center items-center text-xl decrement-btn" data-name="${item.name}">
            -
          </div>
          <span class="quantity">${item.quantity}</span>
          <div class="cursor-pointer rounded-full h-5 w-5 text-black font-normal border border-black border-solid flex justify-center items-center text-xl increment-btn" data-name="${item.name}">
            +
          </div>
        </div>
      </div>
    `;
    itemsFromCart.appendChild(cartItem);

    const decrementBtn = cartItem.querySelector('.decrement-btn');
    decrementBtn.addEventListener('click', () => decrementItem(item.name));

    const incrementBtn = cartItem.querySelector('.increment-btn');
    incrementBtn.addEventListener('click', () => incrementItem(item.name));
  });

  count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCounter.textContent = `${count}`;
  quantityCart.textContent = `${count}`;
  fixedCartCounter.textContent = `${count}`;

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  totalCart.textContent = `$${totalPrice.toFixed(2)}`;
}

function decrementItem(name) {
  const item = cart.find(item => item.name === name);
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    const itemIndex = cart.findIndex(item => item.name === name);
    cart.splice(itemIndex, 1);
  }
  updateCart();
}

function incrementItem(name) {
  const item = cart.find(item => item.name === name);
  item.quantity++;
  updateCart();
};

const addToCartBtn = document.querySelectorAll('.addToCartBtn');
addToCartBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    const name = btn.getAttribute('data-name');
    const price = parseFloat(btn.getAttribute('data-price')); 
    const image = btn.getAttribute('data-image');
    addToCart(name, price, image);
  });
});

updateCart();
