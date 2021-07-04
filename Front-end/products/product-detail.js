const params = new URLSearchParams(window.location.search)
const productdetail = document.getElementById("product-detail");
if(params.has("id")) {
    const id = params.get("id")
    fetch(`http://localhost:3000/products/${id}`)
    .then(response => {
        if(response.status == 200) {
            return response.json()
        }      
        productdetail.innerHTML = ` <div class="col-md-6 col-sm-12 des-product" style ="margin-top :20px">
        Product not found!
        </div>`
        return
    })
      .then(data => {
            console.log(data)
            if(!data) return;
            productdetail.innerHTML =`
                <div class="col-md-6 col-sm-12 image-product">
                    <a href="">
                        <img src="${data.images}" style="width: 100%" alt="" >
                        <i class="fas fa-search"></i>
                    </a>
                </div>
                <div class="col-md-6 col-sm-12 des-product" style ="pading-top : 20px">
                    <h2 class="product-title">${data.name}</h2>
                    <span class="description__span">
                        <span class="icon-dollar">
                            $${data.price}
                        </span>
                        
                    </span>
                    <p class="description" style="font-size:14px">
                        ${data.des}
                    </p>
                    <input type="number" value="1" min="1" max="20">
                    <button class="btn btn-dark" type="submit">Add to cart</button>   
                </div>
                `
      });

}else {
    productdetail.innerHTML = ` <div class="col-md-6 col-sm-12 des-product" style ="margin-top :20px">
    Product not found!
    </div>`
}

  