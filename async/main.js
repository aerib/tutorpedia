const productContainer = document.getElementById("productContainer");

const getProductData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();

    products.forEach((product) => {
        const newProduct = document.createElement("div");
        newProduct.classList.add("product");
        
        const image = document.createElement("img");
        const title = document.createElement("h3");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");

        image.src = product.image;
        title.textContent = product.title;
        description.textContent = product.description;
        price.textContent = `USD ${product.price}`;
        button.textContent = "Add to Cart";

        newProduct.append(image, title, description, price, button);
        productContainer.append(newProduct);
    });

}

getProductData();