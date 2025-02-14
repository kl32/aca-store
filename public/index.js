//Show the product name, rating, number of reviews and price.

function Products(products) {

let productDivs = "";

for(let i=0; i < products.length; i++){
    let product = products[i];
    productDivs += 
    `<div class ="container">
        <div class="product-card">
            <div class="content">
                <h3>${product.name}</h3>
                <h4>${product.description}</h4>
                rating: ${product.rating}<br>
                price: ${product.price}<br>
                reviews: ${product.reviews.length}<br>
            </div>
        </div>
    </div>`
}

document.getElementById("productHere").innerHTML = productDivs;

}

Products(products);

function search() {
    let searchWord = document.getElementById("search").value;
    let filteredProducts = products.filter(p=>p.name === searchWord);
    Products(filteredProducts);
}

Products(filteredProducts);