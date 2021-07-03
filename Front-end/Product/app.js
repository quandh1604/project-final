const product = document.getElementById("product");
fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < data.length ;i++){
    product.innerHTML+=`<div class="col-md-4 col-sm-6 col-12 images">
    <div class="home-small__box">
        <a href="/Front-end/products/product-details.html">
        <img class="image-overlay" src="${data[i].images}" alt="">
        <div class="overlay">
            view details
        </div>
        <div class="sub-title">
            <a href="/Front-end/products/product-details.html">${data[i].name}</a>
        </div>
        <div class="price-product">
            <div class="sub-price">
                <span class="price">
                    <span class="amount">
                        <span class="icon-dollar">$${data[i].price}</span>
                       
                    </span>
                </span>
            </div>
        </div>
        </a>
    </div>
</div>`    
    }
  });
  