cconst products = [
    {
        id: 1,
        name: "Schraube",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    },
    {
        id: 2,
        name: "Hammer",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1679210208120-1b6a008be9b4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    },
    {
        id: 3,
        name: "Meißel",
        price: 21.99,
        image: "https://images.unsplash.com/photo-1641893961390-2a76f05db7e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    }
];


const productList = document.getElementById("product-list");

products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
  <div class="card h-100">
    <img src="${product.image}" class="card-img-top" alt="${product.name}">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.price.toFixed(2)} €</p>
      <button class="btn btn-primary mt-auto" disabled>In den Warenkorb</button>
    </div>
  </div>
`;

    productList.appendChild(col);
});
