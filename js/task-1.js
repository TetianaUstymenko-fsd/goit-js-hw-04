function isEnoughCapacity(products, containerSize) {
    const quantities = Object.values(products);
    const totalQuantity = quantities.reduce((sum, quantity) => sum + quantity, 0);
    return totalQuantity <= containerSize;
  }