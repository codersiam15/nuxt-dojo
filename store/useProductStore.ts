import { defineStore } from 'pinia';

export const useProduct = defineStore('useProductStore', () => {
  const productCartItems = ref<any[]>([]);
  const quantity = ref(0)

  const countProductCartItems = (product: any, quantity: any)=>{
    const findProduct = productCartItems.value.find(p => p?.id === product?.id)
    const newProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity
    }
    if(!findProduct?.id){
        productCartItems.value.push(newProduct)
    }else {
        const quantity = findProduct.quantity + 1
        const newTProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity
        }
        const newUpdateItem = productCartItems.value.filter(p=>  {
            return {
                ...p,
                quantity: quantity + 1
            }
        })
        productCartItems.value = newUpdateItem
    }
    console.log('you click')
  }
  return {
    productCartItems,
    countProductCartItems,
    quantity
  };
});
