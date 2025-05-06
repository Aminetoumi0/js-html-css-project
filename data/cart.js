export const cart = [];



export function addtocart(productId) {
    let matchingItem;
  
      cart.forEach((Cartitem) => {
        if (Cartitem.id === productId) {
          matchingItem = Cartitem;
        }
      });
      if (matchingItem) {
        matchingItem.quantity += 1;
      }
      else {
        cart.push({
          id: productId,
          quantity: 1
        });
      }
  }