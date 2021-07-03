const products = document.getElementById("products");
const form = document.getElementById("add-product");

form.onsubmit = () => {
    fetch('http://localhost:3000/products',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:`${form.name.value}`,
            file:`${form.file.value}`,
            price:`${form.price.value}`,
            shortdes:`${form.shortdes.value}`,
            des:`${form.des.value}`
        })
    })
}
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data =>
        {
        for (const pro of data) {
            products.innerHTML +=`
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Short Des</th>
                        <th scope="col">Des</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>${pro.id}</th>
                        <td>${pro.name}</td>
                        <td>${pro.price}</td>
                        <td>${pro.shortdes}</td>
                        <td>${pro.des}</td>
                        <td>
                            <button class="${pro.id} btn btn-warning">Update</button>
                            <button class="btn btn-danger" id="del">Delete</button>
                        </td>
                    </tr>
                </tbody>
                </table>
                `
                const del = document.getElementById("del").parentElement;
                del.onclick = () => {
                  fetch(`http://localhost:3000/products/${pro.id}`,{
                    method: 'DELETE'
                  })
                }
        }
    }
     )