const ProductHelper = {
  formatNumber(value) {
    const parsedValue = value?.includes('.') ? parseInt(value.split('.').join(''), 10) : parseInt(value);
    return parsedValue;
  },

  formatList(rawData, { category, search }) {
    const formatedCategory = this.formatCategory(category);
    const result = rawData
      .filter((product) => product.category.toLowerCase() === formatedCategory.toLowerCase()
          && product.product_name.toLowerCase().includes(search.toLowerCase()));

    return result;
  },

  formatCategory(category) {
    const result = category.replaceAll('_', ' ');
    return result;
  },
};

export default ProductHelper;
