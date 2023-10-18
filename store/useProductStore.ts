import { defineStore } from 'pinia';

export const useProduct   = defineStore('useProductStore', () => {

  const productCartItems  = ref<any[]>([]);
  const quantity          = ref(0)

  const countProductCartItems = (product: any, quantity: any)=>{
    const findProduct = productCartItems.value.find(p => p?.id === product?.id)

    if(!findProduct?.id){
      const new_product = {
        id : product.id,
        product_name : product.name,
        image : product.image,
        price : product.price,
        quantity : quantity,
        total_price : product.price * quantity,
      }

      productCartItems.value.push(new_product)
    }else {
      findProduct.quantity += 1
    }

    quantity = 0;
  }


  const productcartdataupdate = (product_id: any, now_quantity: any)=>{
    const findProduct     = productCartItems.value.find(p => p?.id === product_id)
    findProduct.quantity  = now_quantity
    findProduct.total_price  = now_quantity * findProduct.price
  }

  const removeFormCart = (product_id: any)=>{
    const findProduct     = productCartItems.value.filter(p => p?.id !== product_id);
    productCartItems.value.push([])
    productCartItems.value.push(findProduct)
  }
  return {
    productCartItems,
    countProductCartItems,
    productcartdataupdate,
    removeFormCart,
    quantity
  }


});
