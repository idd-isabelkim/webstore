const products = [
    {
        name: `Escape Coffee`,
        summary: `Looking for an "everyday go" coffee beans that will never disappoint you? Escape Blend goes well for both filter and espresso, with smooth chocolate, hazelnut, and subtle fruit notes. Do you like to add milk? Even better.`,
        price: `16.50`,
    },{
        name: `George Brown Blend`,
        summary: `Need the caffeine hit to work on assignments? Don't worry, we got you! George Brown Blend is brought to you specially for the students, who cannot focus without that "extra extra" caffeine hit. Your eyes will be wide open for 72 hours. Good luck! `,
        price: `$97.50`
    },{
        name: `Maracala, Honduras`,
        summary: `LFinally, Honduran coffee is back for the season! We've missed it too. It has came back with even more balanced body with fine acidity of notes of grape, with soft sweet aftertaste of caramel aromas.`,
        price: `18.00`
    },{
        name: `Escape Coffee`,
        summary: `Looking for an "everyday go" coffee beans that will never disappoint you? Escape Blend goes well for both filter and espresso, with smooth chocolate, hazelnut, and subtle fruit notes. Do you like to add milk? Even better.`,
        price: `16.50`
    },{
        name: `Escape Coffee`,
        summary: `Looking for an "everyday go" coffee beans that will never disappoint you? Escape Blend goes well for both filter and espresso, with smooth chocolate, hazelnut, and subtle fruit notes. Do you like to add milk? Even better.`,
        price: `16.50`
    }
]

function getProductAsHtmlString(product) {
    return `
        <article>
         <div><a href="#"><img src="img/Escape coffee 1.png" alt="Product Image"></a></div>
            <h3>${product.name}</h3>
            <p>${product.summary}</p>
            <dl>
            <dt>Size:</dt>
            <dd>300g</dd><dd>2.27kg</dd>
         </dl>
         <div>
            <span>${product.price}</span>
            <button type="button"><i class="material-icons">${product.favorite}</i></button>
            <button type="button"><i class="material-icons">${product.shoppingcart}</i></button>
         </div>
    
  </article>`
  }

  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[0]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[1]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[2]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[0]);
  document.getElementById(`products`).innerHTML += getProductAsHtmlString(products[0]);