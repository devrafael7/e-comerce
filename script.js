
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

littleCartBtn.addEventListener('click', function(){
  
    loader.classList.remove('hidden');

    setTimeout(function(){
       
        bgCart.classList.remove('hidden');
        loader.classList.add('hidden');
    }, 500)
    const backArrowBtn = document.getElementById('back-arrow-btn');
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
  
      // Modifica o tamanho da imagem conforme o índice atual
      if (currentIndex === 2) {
        mainCardImage.style.width = '150px'; // Defina o tamanho desejado aqui
        mainCardImage.style.height = 'auto'; // Mantenha a proporção
      } else if (currentIndex === 0){
        mainCardImage.style.width = '160px'; // Volta ao tamanho original
        mainCardImage.style.height = 'auto'; // Exemplo de altura original
      } else {
        mainCardImage.style.width = '130px'; // Volta ao tamanho original
        mainCardImage.style.height = 'auto'; // Exemplo de altura original
      }
  
      // Atualiza a classe dos botões para destacar o botão correspondente à imagem atual
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
  
  mainCard.addEventListener('click', updateImage);
  
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
        // Swipe para a esquerda
        currentIndex = (currentIndex + 1) % images.length;
      } else {
        // Swipe para a direita
        currentIndex = (currentIndex - 1 + images.length) % images.length;
      }
  
      updateImage();
    }
  
    startX = null;
    startY = null;
  });