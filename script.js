const bgLogin = document.getElementById("bg-login");
const closeLogin = document.querySelectorAll(".closeLogin");
closeLogin.forEach((closeLoginBtn) => {
  closeLoginBtn.addEventListener("click", function () {
    loader.classList.remove("hidden");

    setTimeout(function () {
      bgLogin.classList.add("hidden");
      loader.classList.add("hidden");
      confirmationPopUp.classList.add("hidden");
    }, 800);
  });
});

const confirmationPopUp = document.getElementById("confirmation-pop-up");

const loader = document.getElementById("bg-loader");

let userName = document.getElementById("user-name");
const userBtn = document.getElementById("user-btn");

const signUpBtn = document.getElementById("sign-up-btn");

const littleCartBtn = document.getElementById("little-cart-btn");
const bgCart = document.getElementById("bg-cart");

const fixedCartBtn = document.getElementById("fixed-cart-btn");

fixedCartBtn.addEventListener("click", function () {
  loader.classList.remove("hidden");

  setTimeout(function () {
    bgCart.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 500);
  const backArrowBtnMyCartW = document.getElementById(
    "back=arrow-btn-my-cart-w"
  );
  backArrowBtnMyCartW.addEventListener("click", function () {
    bgCart.classList.add("hidden");
  });
  const backArrowBtnMyCartB = document.getElementById(
    "back=arrow-btn-my-cart-b"
  );
  backArrowBtnMyCartB.addEventListener("click", function () {
    bgCart.classList.add("hidden");
  });
});

const backArrowBtn = document.querySelectorAll(".backArrowBtn");

littleCartBtn.addEventListener("click", function () {
  loader.classList.remove("hidden");

  setTimeout(function () {
    bgCart.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 500);
  backArrowBtn.forEach((backCartBtn) => {
    backCartBtn.addEventListener("click", function () {
      bgCart.classList.add("hidden");
    });
  });
});

signUpBtn.addEventListener("click", function () {
  let userInformations = document.getElementById("user-informations");

  const inputName = document.getElementById("input-name");
  const inputEmail = document.getElementById("input-email");
  const inputPassword = document.getElementById("input-password");

  const nameValue = inputName.value;
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  const accName = document.querySelector(".accName");
  const accEmail = document.querySelector(".accEmail");
  const accLevel = document.querySelector(".accLevel");

  accName.textContent = `${nameValue}`;
  accEmail.textContent = `${emailValue}`;

  const userNamePopUp = document.getElementById("user-name-pop-up");
  const userEmail = document.getElementById("user-email");

  const loginAgree = document.querySelector(".loginAgree");
  let agreeCheckbox = document.getElementById("agree-checkbox");
  if (agreeCheckbox.checked) {
    console.log("checked");
    loginAgree.classList.remove("check");
  } else {
    loginAgree.classList.toggle("check");
    loader.classList.add("hidden");
    bgLogin.classList.remove("hidden");
    return;
  }

  let accStatusNivel = document.getElementById("acc-status-nivel");

  if (nameValue === "" || emailValue === "" || passwordValue === "") {
    confirmationPopUp.classList.remove("hidden");
    accStatusNivel.classList.add("hidden");
    return;
  } else {
    accStatusNivel.classList.remove("hidden");

    loader.classList.remove("hidden");

    setTimeout(function () {
      bgLogin.classList.add("hidden");
      loader.classList.add("hidden");
      userName.textContent = `${nameValue}`;
      littleCartBtn.classList.add("hidden");
    }, 2000);
  }

  userNamePopUp.textContent = `${nameValue}`;
  userEmail.textContent = `${emailValue}`;
  const menuName = document.getElementById("menu-name");
  menuName.textContent = `${nameValue}`;

  userBtn.addEventListener("click", function () {
    userInformations.classList.toggle("hidden");
    bgLogin.classList.add("hidden");
  });
});

userBtn.addEventListener("click", function () {
  bgLogin.classList.remove("hidden");
});

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function () {
  menu.classList.remove("hidden");
  const menuBackBtn = document.getElementById("menu-back-btn");
  menuBackBtn.addEventListener("click", function () {
    menu.classList.add("hidden");
  });
});

const filterBtn = document.getElementById("filter-btn");

filterBtn.addEventListener("click", function () {
  const filter = document.getElementById("filter");
  filter.classList.remove("hidden");
  const confirmFilterBtn = document.querySelectorAll(".confirmFilterBtn");
  const backArrowFilterBtn = document.querySelectorAll(".backArrowBtnFilter");
  backArrowFilterBtn.forEach((backArrowBtnF_all) => {
    backArrowBtnF_all.addEventListener("click", function () {
      filter.classList.add("hidden");
    });
    confirmFilterBtn.forEach((confirmFilterBtns) => {
      confirmFilterBtns.addEventListener("click", function () {
        loader.classList.remove("hidden");
        setTimeout(function () {
          loader.classList.add("hidden");
          filter.classList.add("hidden");
        }, 700);
      });
    });
  });
});

const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const filterButton = document.getElementById("filter-button");

priceRange.addEventListener("input", function () {
  priceValue.textContent = "$" + priceRange.value;
});

const images = [
  "imgs/pngwing.com (1).png",
  "imgs/pngwing.com (airmax).png",
  "imgs/pngwing.com.png",
];

let currentIndex = 1;
const mainCard = document.getElementById("mainCard");
const mainCardImage = document.getElementById("mainCardImage");
const buttons = document.querySelectorAll(".btn");
let currentButton = 0;

function updateImage() {
  mainCardImage.classList.add("opacity-0");
  setTimeout(() => {
    mainCardImage.src = images[currentIndex];
    mainCardImage.classList.remove("opacity-0");

    if (currentIndex === 2) {
      mainCardImage.style.width = "10rem";
      mainCardImage.style.height = "auto";
      mainCardImage.style.marginTop = "50px";
      mainCardImage.style.marginLeft = "2rem";
    } else if (currentIndex === 0) {
      mainCardImage.style.width = "10rem";
      mainCardImage.style.height = "auto";
      mainCardImage.style.marginBottom = "20px";
      mainCardImage.style.marginLeft = "2rem";
    } else {
      mainCardImage.style.width = "8rem";
      mainCardImage.style.height = "auto";
      mainCardImage.style.marginLeft = "2rem";
      mainCardImage.style.marginBottom = "2rem";
    }

    buttons.forEach((btn, index) => {
      if (index === currentIndex) {
        btn.classList.remove("opacity-50");
        btn.classList.add("w-5");
      } else {
        btn.classList.add("opacity-50");
        btn.classList.remove("w-5");
      }
    });

    currentIndex = (currentIndex + 1) % images.length;
  }, 300);
}

function autoChangeImage() {
  setInterval(() => {
    updateImage();
  }, 5000);
}

mainCard.addEventListener("click", updateImage);

autoChangeImage();

let startX = null;
let startY = null;

mainCard.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

mainCard.addEventListener("touchend", function (e) {
  if (!startX || !startY) return;

  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;

  const diffX = startX - endX;
  const diffY = startY - endY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      currentIndex = (currentIndex + 1 + images.length) % images.length;
    } else {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    updateImage();
  }

  startX = null;
  startY = null;
});

const sendBtn = document.getElementById("send-btn");
const message = document.getElementById("message");

let emailNotification = document.getElementById("email-notification");

sendBtn.addEventListener("click", function () {
  let enValue = emailNotification.value;

  if (enValue === "") {
    message.classList.remove("hidden");
    message.innerHTML = `Check the blank`;
    message.classList.remove("bg-green-500");
    message.classList.add("bg-red-500");
    setTimeout(function () {
      message.classList.add("hidden");
    }, 2200);
    return;
  } else {
    message.innerHTML = `Thanks! We will email you back <br> if the desired product arrives.`;
    message.classList.remove("hidden");
    message.classList.add("bg-green-500");
    setTimeout(function () {
      message.classList.add("hidden");
    }, 2200);

    emailNotification.value = "";
  }
});

const finalArrow = document.getElementById("final-arrow");
finalArrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let wholeFootwear = document.querySelector(".wholeFootwear");
let wholeWatches = document.querySelector(".wholeWatches");
let titleAllProducts = document.getElementById("title-all-products");

const allItemsBtn = document.querySelector(".allItemsBtn");
allItemsBtn.addEventListener("click", function () {
  wholeFootwear.classList.remove("hidden");
  wholeWatches.classList.remove("hidden");

  titleAllProducts.textContent = `All Products`;
});

const allFootwearBtn = document.querySelector(".allFootwearBtn");
allFootwearBtn.addEventListener("click", function () {
  wholeFootwear.classList.remove("hidden");
  wholeWatches.classList.add("hidden");

  titleAllProducts.textContent = `Footwear`;
});

const allWatchBtn = document.querySelector(".allWatchBtn");
allWatchBtn.addEventListener("click", function () {
  wholeFootwear.classList.add("hidden");
  wholeWatches.classList.remove("hidden");

  titleAllProducts.textContent = `Watches`;
});

const cart = [];
const itemsFromCart = document.querySelector(".itemsFromCart");
const cartCounter = document.querySelector(".cartCounter");
let count = 0;
let quantityCart = document.getElementById("quantity-cart");
let fixedCartCounter = document.getElementById("fixed-cart-counter");
let totalCart = document.querySelectorAll(".total-cart");

function addToCart(name, price, image) {
  const existingItem = cart.find(
    (item) => item.name === name && item.price === price && item.image === image
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }

  fixedCartCounter.classList.remove("hidden");

  console.log(cart);
  updateCart();
}

function updateCart() {
  itemsFromCart.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList =
      "cart-item w-full bg-gray-200 rounded-xl h-24 flex items-center px-3 gap-3 relative";
    cartItem.innerHTML = `
      <img class="w-24 h-20 my-4" src="${item.image}" alt="${item.name}">
      <div>
        <h4 class="mt-4">${item.name}</h4>
        <p class=" font-semibold">$${(item.price * item.quantity).toFixed(
          2
        )}</p> <!-- Mostra o preço multiplicado pela quantidade -->
        <div class="pl-7 flex gap-2 absolute right-3 top-3">
          <div class="minusBtn cursor-pointer rounded-full h-5 w-5 text-black font-normal border border-black border-solid flex justify-center items-center text-xl decrement-btn" data-name="${
            item.name
          }">
            -
          </div>
          <span class="quantity">${item.quantity}</span>
          <div class="plusBtn cursor-pointer rounded-full h-5 w-5 text-black font-normal border border-black border-solid flex justify-center items-center text-xl increment-btn" data-name="${
            item.name
          }">
            +
          </div>
        </div>
      </div>
    `;
    itemsFromCart.appendChild(cartItem);

    const decrementBtn = cartItem.querySelector(".decrement-btn");
    decrementBtn.addEventListener("click", () => decrementItem(item.name));

    const incrementBtn = cartItem.querySelector(".increment-btn");
    incrementBtn.addEventListener("click", () => incrementItem(item.name));
  });

  count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCounter.textContent = `${count}`;
  quantityCart.textContent = `${count}`;
  fixedCartCounter.textContent = `${count}`;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  totalCart.forEach((totalCarts) => {
    totalCarts.textContent = `$${totalPrice.toFixed(2)}`;
  });
}

function decrementItem(name) {
  const item = cart.find((item) => item.name === name);
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    const itemIndex = cart.findIndex((item) => item.name === name);
    cart.splice(itemIndex, 1);
  }
  updateCart();
}

function incrementItem(name) {
  const item = cart.find((item) => item.name === name);
  item.quantity++;
  updateCart();
}

const addToCartBtn = document.querySelectorAll(".addToCartBtn");
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const name = btn.getAttribute("data-name");
    const price = parseFloat(btn.getAttribute("data-price"));
    const image = btn.getAttribute("data-image");
    addToCart(name, price, image);
  });
});

updateCart();

const toggleFilterBtn = document.querySelectorAll(".toggleFilterBtn");

toggleFilterBtn.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("bg-blue-500");
    toggleBtn.classList.toggle("text-white");
  });
});

const allProductsToggle = document.getElementById("all-products-toggle");
const newProductsToggle = document.getElementById("new-products-toggle");

const mainCardFavoriteBtnEmpty = document.getElementById(
  "mainCardFavoriteBtnEmpty"
);
const mainCardFavoriteBtn = document.getElementById("mainCardFavoriteBtn");

mainCardFavoriteBtn.addEventListener("click", function () {
  mainCardFavoriteBtn.classList.add("hidden");
  mainCardFavoriteBtnEmpty.classList.remove("hidden");
});

mainCardFavoriteBtnEmpty.addEventListener("click", function () {
  mainCardFavoriteBtn.classList.remove("hidden");
  mainCardFavoriteBtnEmpty.classList.add("hidden");
});

const boxDarkBtn = document.querySelectorAll(".boxDarkBtn");
const body = document.querySelector("body");
boxDarkBtn.forEach((darkBtn) => {
  darkBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
    darkBtn.classList.toggle("dark");
    console.log("oi");

    const blackImg = document.getElementById("black-img");
    const whiteImg = document.getElementById("white-img");
    blackImg.classList.toggle("hidden");
    whiteImg.classList.toggle("hidden");

    const blackLoupe = document.getElementById("black-loupe");
    const whiteLoup = document.getElementById("white-loupe");
    blackLoupe.classList.toggle("hidden");
    whiteLoup.classList.toggle("hidden");

    const blackFootwear = document.querySelector(".blackFootwear");
    const whiteFootwear = document.querySelector(".whiteFootwear");
    whiteFootwear.classList.toggle("hidden");
    blackFootwear.classList.toggle("hidden");

    const whiteSWimg = document.getElementById("white-square-watch-img");
    const blackSWimg = document.getElementById("black-square-watch-img");
    whiteSWimg.classList.toggle("hidden");
    blackSWimg.classList.toggle("hidden");

    const whiteUser = document.querySelector(".whiteUser");
    const blackUser = document.querySelector(".blackUser");
    whiteUser.classList.toggle("hidden");
    blackUser.classList.toggle("hidden");

    const menuWhiteCart = document.querySelector(".menuWhiteCart");
    const menuBlackCart = document.querySelector(".menuBlackCart");
    menuWhiteCart.classList.toggle("hidden");
    menuBlackCart.classList.toggle("hidden");

    const whiteFavBtn = document.querySelector(".whiteFavBtn");
    const blackFavBtn = document.querySelector(".blackFavBtn");
    whiteFavBtn.classList.toggle("hidden");
    blackFavBtn.classList.toggle("hidden");

    const whiteContact = document.querySelector(".whiteContact");
    const blackContact = document.querySelector(".blackContact");
    whiteContact.classList.toggle("hidden");
    blackContact.classList.toggle("hidden");

    const whiteRP = document.querySelector(".whiteRP");
    const blackRP = document.querySelector(".blackRP");
    whiteRP.classList.toggle("hidden");
    blackRP.classList.toggle("hidden");

    const whiteArrow = document.querySelectorAll(".whiteArrow");
    const blackArrow = document.querySelectorAll(".blackArrow");
    blackArrow.forEach((backArrowB) => {
      backArrowB.classList.toggle("hidden");
    });
    whiteArrow.forEach((backArrowW) => {
      backArrowW.classList.toggle("hidden");
    });

    const whiteCloseLogin = document.querySelector(".whiteCloseLogin");
    const blackCloseLogin = document.querySelector(".blackCloseLogin");
    whiteCloseLogin.classList.toggle("hidden");
    blackCloseLogin.classList.toggle("hidden");

    const whiteBackArrowF = document.querySelector(".whiteBackArrowF");
    const blackBackArrowF = document.querySelector(".blackBackArrowF");
    whiteBackArrowF.classList.toggle("hidden");
    blackBackArrowF.classList.toggle("hidden");

    const whiteConfirmFBtn = document.querySelector(".whiteConfirmFBtn");
    const blackConfirmFBtn = document.querySelector(".blackConfirmFBtn");
    whiteConfirmFBtn.classList.toggle("hidden");
    blackConfirmFBtn.classList.toggle("hidden");

    const whiteMacOs = document.querySelector(".whiteMacOs");
    const blackMacOs = document.querySelector(".blackMacOs");
    whiteMacOs.classList.toggle("hidden");
    blackMacOs.classList.toggle("hidden");
  });
});

const menuBoxDarkBtn = document.querySelectorAll(".menuBoxDarkBtn");
menuBoxDarkBtn.forEach((menuBoxDarkBtns) => {
  menuBoxDarkBtns.addEventListener("click", function () {
    menuBoxDarkBtns.classList.toggle("plToggle");
  });
});

//const reportDiv = document.querySelector('.reportDiv');
//const reportBtn = document.querySelectorAll('.reportBtn');
//reportBtn.forEach(reportBtns => {
//  reportBtns.addEventListener('click', function(){
//    reportDiv.classList.toggle('hidden');
//  })
//
//})

const myCartYouHave = document.getElementById("my-cart-you-have");
const youHaveText = document.querySelector(".youHaveText");
const checkoutBtn = document.querySelector(".checkoutBtn");

const checkoutPayment = document.querySelector(".checkoutPayment");
checkoutBtn.addEventListener("click", () => {
  if (count === 0) {
    quantityCart.classList.add("text-red-500");
  } else {
    quantityCart.classList.remove("text-red-500");
    loader.classList.remove("hidden");
    setTimeout(function () {
      loader.classList.add("hidden");
      checkoutPayment.classList.remove("hidden");
    }, 2000);
  }
});

quantityCart.classList.remove("text-red-500");

document.getElementById("pay-button").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;
  const agreeCheckbox = document.getElementById(
    "agree-checkbox-payment"
  ).checked;

  const FPcheckbox = document.querySelector(".FPcheckbox");
  const FPcheckField = document.querySelector(".FPcheckField");
  const paymentFinished = document.querySelector(".paymentFinished");
  const userName = document.querySelector(".userName");
  userName.textContent = `${name}!`;

  if (name === "" || email === "" || cpf === "") {
    FPcheckField.classList.remove("hidden");
  } else {
    FPcheckField.classList.add("hidden");
    FPcheckbox.classList.add("hidden");
    loader.classList.remove("hidden");
    setTimeout(function () {
      loader.classList.add("hidden");
      paymentFinished.classList.remove("hidden");
    }, 3100);
  }
});

document
  .getElementById("account-toggle")
  .addEventListener("click", function () {
    let accountDetails = document.getElementById("account-details");
    if (accountDetails.classList.contains("hidden")) {
      accountDetails.classList.remove("hidden");
    } else {
      accountDetails.classList.add("hidden");
    }
  });

document.getElementById("cart-toggle").addEventListener("click", function () {
  const accCart = document.querySelector(".accCart");
  accCart.textContent = `${count} items in cart`;

  let cartDetails = document.getElementById("cart-details");
  if (cartDetails.classList.contains("hidden")) {
    cartDetails.classList.remove("hidden");
  } else {
    cartDetails.classList.add("hidden");
  }
});

document
  .getElementById("favorites-toggle")
  .addEventListener("click", function () {
    let favoritesDetails = document.getElementById("favorites-details");
    if (favoritesDetails.classList.contains("hidden")) {
      favoritesDetails.classList.remove("hidden");
    } else {
      favoritesDetails.classList.add("hidden");
    }
  });

document
  .getElementById("contact-toggle")
  .addEventListener("click", function () {
    let contactDetails = document.getElementById("contact-details");
    if (contactDetails.classList.contains("hidden")) {
      contactDetails.classList.remove("hidden");
    } else {
      contactDetails.classList.add("hidden");
    }
  });

document.getElementById("report-toggle").addEventListener("click", function () {
  var reportDetails = document.getElementById("report-details");
  if (reportDetails.classList.contains("hidden")) {
    reportDetails.classList.remove("hidden");
    let reportInput = document.getElementById("report-input");
    reportInputValue = reportInput.value;
    let reportSubmit = document.getElementById("report-submit");
    reportSubmit.addEventListener("click", function () {
      reportInput.value = "";
    });
  } else {
    reportDetails.classList.add("hidden");
  }
});

const products = [
  "Nike Air Force Sky Blue",
  "Nike Jordan W&B",
  "Nike SB DK Green",
  "Nike Jordan Traditional",
  "Black Square Watch",
  "Black Fine Watch",
  "White Square Watch",
  "Gray Premium Watch",
];

function filterProducts() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (input === "") {
    resultsContainer.classList.add("hidden");
    resultsContainer.classList.remove("block");
    return;
  }

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(input)
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      const item = document.createElement("div");
      item.textContent = product;
      item.className =
        "result-item p-2 hover:bg-gray-200 cursor-pointer hover:text-black";
      item.addEventListener("click", () => {
        document.getElementById("search-input").value = product;
        resultsContainer.classList.add("hidden");
      });
      resultsContainer.appendChild(item);
    });
    resultsContainer.classList.remove("hidden");
  } else {
    resultsContainer.classList.add("hidden");
  }
}

const finalizePaymentBackArrowW = document.getElementById(
  "finalize-payment-back-arrow-w"
);
finalizePaymentBackArrowW.addEventListener("click", function () {
  checkoutPayment.classList.add("hidden");
});

const finalizePaymentBackArrowB = document.getElementById(
  "finalize-payment-back-arrow-b"
);
finalizePaymentBackArrowB.addEventListener("click", function () {
  checkoutPayment.classList.add("hidden");
});

const priceRangeFilter = document.getElementById('price-range');
const priceValueFilter = document.getElementById('price-value');

const productsFilter = [
    {
        name: "Nike Air Force Sky Blue",
        price: 350.00,
        image: "imgs/pngwing.com (9).png"
    },
    {
        name: "Nike Jordan W&B",
        price: 560.00,
        image: "imgs/pngwing.com (5).png"
    },
    {
        name: "Nike SB DK Green",
        price: 795.00,
        image: "imgs/pngwing.com (7).png"
    },
    {
        name: "Nike Jordan Traditional",
        price: 629.00,
        image: "imgs/pngwing.com (4).png"
    },
    {
        name: "Black Square Watch",
        price: 199.00,
        image: "imgs/pngwing.com (17).png"
    },
    {
        name: "Black Fine Watch",
        price: 100.00,
        image: "imgs/pngwing.com (21).png"
    },
    {
        name: "White Square Watch",
        price: 210.00,
        image: "imgs/pngwing.com (18).png"
    },
    {
        name: "Gray Premium Watch",
        price: 949.00,
        image: "imgs/pngwing.com (19).png"
    }
];

