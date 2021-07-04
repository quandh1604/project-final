const blog = document.getElementById("blog");
fetch('http://localhost:3000/blog')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < data.length ;i++){
        console.log(data[i])
    blog.innerHTML+=`<div class="box" >
    <img class="images" src="${data[i].images}" alt="">
    <h4>${data[i].name}</h4>
    <p>${data[i].des}
    </p>
  </div>
    `    
    }
  });
  