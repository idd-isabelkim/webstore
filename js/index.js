const products = [
    {
        name: `Escape Coffee`,
        imgsrc: `img/Escape coffee 1.png`,
        summary: `Looking for an "everyday go" coffee beans that will never disappoint you? Escape Blend goes well for both filter and espresso, with smooth chocolate, hazelnut, and subtle fruit notes. Do you like to add milk? Even better.`,
        price: `16.50`,
        qty: `31`,
        category: `blends`,
    },{
        name: `Seasonal Blend`,
        imgsrc: `img/Escape coffee 2.png`,
        summary: `As we celebrate our new seasonal blend for consistent flavor notes, again, we are back with a blend of Brazil, Columbia, and Ethiopia! As usual, the seasonal blend is easily approachable for anyone, and has familiar notes to be shared with anyone you love.`,
        price: `17.50`,
        qty: `22`,
        category: `blends`,
    },{
        name: `George Brown Blend`,
        imgsrc: `img/Escape coffee 3.png`,
        summary: `Need the caffeine hit to work on assignments? Don't worry, we got you! George Brown Blend is brought to you specially for the students, who cannot focus without that "extra extra" caffeine hit. Your eyes will be wide open for 72 hours. Good luck!`,
        price: `97.50`,
        qty: `22`,
        category: `blends`,
    },{
        name: `Maracala, Honduras`,
        imgsrc: `img/Escape coffee 4.png`,
        summary: `Finally, Honduran coffee is back for the season! We've missed it too. It has came back with even more balanced body with fine acidity of notes of grape, with soft sweet aftertaste of caramel aromas.`,
        price: `18.00`,
        qty: `50`,
        category: `single`

    },{
        name: `Nyeri, Kenya`,
        imgsrc: `img/Escape coffee 5.png`,
        summary: `How can a cup of black coffee be so sweet! Vibrant yet, clean and crisp, with notes of pear and white peach, even winey, will brighten up your day. Start your day with this richness, fully bodied Kenyan coffee.`,
        price: `21.50`,
        qty: `99`,
        category: `single`,
    },{
        name: `La Loma, Columbia`,
        imgsrc: `img/Escape coffee 6.png`,
        summary: `Back with a syrupy and elegant mouthfeel, our La Loma, Columbia proudly presents one of the highest quality coffee that we have seen this year. This bag brings complex notes of dark chocolate, with sweetness of fruity and bright notes, ending with sweet panela notes.`,
        price: `19.50`,
        qty: `10`,
        category: `single`,
    },{
        name: `More to come!`,
        imgsrc: `img/Escape coffee 7.png`,
        summary: `Stay tuned for our upcoming coffee beans!`,
        price: `1000`,
        qty: `1000`,
        category: `single`,
    }
]

function isInThisCategory(product) {
    if (this == 'all') {
      return true;
    } else if (product.category == this) {
      return true;
    } else {
      return false;
    }
  }

function getProductAsHtmlString(product) {
    let greatdeal;

    if (product.price < 17) {
      greatdeal = `<small class="callout urgent">Great deal!</small>`;
    } else {
        greatdeal = `\n`
    }

    let bestseller;

    if (product.qty < 40) {
        bestseller = `<small class="callout urgent2">Best Seller</small>`;
    } else {
        bestseller = `\n`
    }


    return `
        <article>
         <div><a href="#"><img src="${product.imgsrc}"></a></div>
            <h3>${product.name}</h3>${greatdeal} ${bestseller}
            <p>${product.summary}</p>
            <dl>
            <dt>Size:</dt>
            <dd>300g</dd><dd>2.27kg</dd>
         </dl>
         <div>
            <span class="product-price">${product.price}</span>
            <button type="button"><i class="material-icons">${product.favorite}</i></button>
            <button type="button"><i class="material-icons">${product.shoppingcart}</i></button>
         </div>
    
        </article>`
  }

// function

function renderProducts(arrToRender) {
    const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
    const strOfHtmlProducts = arrOfHtmlproducts.join('\n');
  
    document.getElementById('products').innerHTML = strOfHtmlproducts;
  }

function loadProductCategory(event) {
    const categoryImSearchingFor = event.target.value;
    renderProducts(products.filter(isInThisCategory, categoryImSearchingFor)); 
  }
//   function renderProducts(arrToRender) {
//     // Connect each Object from the incoming Array to an HTML template
//     const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
//     const strOfHtmlProducts = arrOfHtmlProducts.join(`\n`);
  
//     document.getElementById(`products`).innerHTML += getProductAsHtmlString[0];  
//   }

  

  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[0]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[1]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[2]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[3]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[4]);document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[5]);document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[6]);

  renderProducts(products);

  document.getElementById('productCategory').addEventListener('change', loadProductCategory);