<script setup>
import {useProduct} from '@/store/useProductStore'
import { storeToRefs } from 'pinia';
const { id } = useRoute().params;
const router = useRouter()
const useProductStore = useProduct()
const {productCartItems, quantity} = storeToRefs(useProductStore)

definePageMeta({
  layout: 'default',
});

let url = `https://fakestoreapi.com/products/${id}`;
const { data: single } = await useFetch(url);

useHead({
  title: ()=> `${single.value.title} | Dojo`,
});

const backToProductPage = ()=>{
    router.back()
}


</script>

<template>
  <div>

    <h1>Carts: {{ productCartItems }}</h1>

    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4">
                    <img
                      id="main-image"
                      :src="single.image"
                      width="250"
                      :alt="single.title"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product p-4">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <i class="fa fa-long-arrow-left"></i>
                      <span class="ml-1" @click="backToProductPage">Back</span>
                    </div>
                    <i class="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div class="mt-4 mb-3">
                    <span class="text-uppercase text-muted brand">{{
                      single.category
                    }}</span>
                    <h5 class="text-uppercase">{{ single.title }}</h5>
                    <div class="price d-flex flex-row align-items-center">
                      <span class="act-price">${{ single.price }}</span>
                      <div class="ml-2 d-none">
                        <small class="dis-price">$59</small>
                        <span>40% OFF</span>
                      </div>
                    </div>
                  </div>

                  <p class="about">
                    {{ single.description }}
                  </p>

                  <div class="cart mt-4 align-items-center">
                    <input type="number" v-model="quantity">
                    <button @click="useProductStore.countProductCartItems(single, quantity)" class="btn btn-danger text-uppercase mr-2 px-4">
                      Add to cart
                    </button>
                    <i class="fa fa-heart text-muted"></i>
                    <i class="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* .product {
        background-color: #eee;
    }
    .brand {
        font-size: 13px;
    }
    .act-price {
        color: red;
        font-weight: 700;
    }
    .dis-price {
        text-decoration: line-through;
    }
    .about {
        font-size: 14px;
    }
    .color {
        margin-bottom: 10px;
    }
    label.radio {
        cursor: pointer;
    }
    label.radio input {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        pointer-events: none;
    }
    label.radio span {
        padding: 2px 9px;
        border: 2px solid #ff0000;
        display: inline-block;
        color: #ff0000;
        border-radius: 3px;
        text-transform: uppercase;
    }
    label.radio input:checked + span {
        border-color: #ff0000;
        background-color: #ff0000;
        color: #fff;
    }
    .btn-danger {
        background-color: #ff0000 !important;
        border-color: #ff0000 !important;
    }
    .btn-danger:hover {
        background-color: #da0606 !important;
        border-color: #da0606 !important;
    }
    .btn-danger:focus {
        box-shadow: none;
    }
    .cart i {
        margin-right: 10px;
    } */
</style>
