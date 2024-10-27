const filterProducts = (products, category) => {
    const filteredProducts = category ?
        products.filter((product) => product.category === category) :
        products;

    return filteredProducts;
};

export default filterProducts;



