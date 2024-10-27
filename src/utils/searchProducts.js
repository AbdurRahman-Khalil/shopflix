const searchProducts = (products, searchQuery) => {
    const lowerCaseQuery = searchQuery.trim().toLowerCase();

    const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.price.toString().includes(lowerCaseQuery)
    );

    return searchedProducts;
};

export default searchProducts;