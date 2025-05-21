interface Product {
    name: string;
    price: number;
}


function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 9) {
        return null;
    }

    return products.reduce((maxProduct, currentProduct) => {
        return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
    });
}


const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

// getMostExpensiveProduct(products); 

console.log(getMostExpensiveProduct(products));