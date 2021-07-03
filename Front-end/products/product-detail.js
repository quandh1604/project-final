const productdetail = document.getElementById("product-detail");
fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < data.length ;i++){
    productdetail.innerHTML +=`
                <div class="col-md-6 col-sm-12 image-product">
                    <a href="">
                        <img src="${data[i].images}" style="width: 100%" alt="" >
                        <i class="fas fa-search"></i>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12 des-product" style ="margin-top :20px">
                    <h2 class="product-title">${data[i].name}</h2>
                    <span class="description__span">
                        <span class="icon-dollar">
                           $${data[i].price}
                        </span>
                        
                    </span>
                    <p class="description" style="font-size:17px">
                        ${data[i].des}
                    </p>
                    <input type="number" value="1" min="1" max="20">
                    <button class="btn btn-dark" type="submit">Add to cart</button>   
                </div>
    `
    }
  });

  