
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

filterButton.addEventListener('click', function() {

});


