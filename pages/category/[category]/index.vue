<template>
  <div>
    <h1 class="mt-2 mb-4">asdfasd asdf{{ category }}</h1>

    <div v-for="(load, i) in 5" :key="i">
        <Loader/>
    </div>

    <div
      v-if="pending"
      class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
    >
    <div v-for="(load, i) in 5" :key="i">
        <Loader/>
    </div>
    </div>

    <div v-else class="row product-row">
      <div
        class="col-6 col-md-3 col-lg-3 product-main"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card">
          <div class="card-body p-3">
            <img
              :src="product.image"
              :alt="product.title"
              class="img-fluid proudct-image"
            />
            <h4 class="mt-2">{{ product.title.slice(0, 30) }}</h4>
            <h5>{{ product.price }}</h5>
            <center>
              <NuxtLink
                class="btn btn-success btn-sm"
                :to="`/product/${product.id}`"
                >View Details</NuxtLink
              >
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// const pending = ref(false)
// const products = ref([])
const { category } = useRoute().params;

const url = `https://fakestoreapi.com/products/category/${category}`;
const { data: products, pending } = useFetch(url);

// const fetchProducts = async()=>{
//     try {
//         pending.value = true
//         const data = await fetch(url)
//         console.log(data)
//         const res = await data.json()
//         console.log(res);
//         products.value = res
//     } catch (error) {
//         console.log('errr')
//     }finally{
//         pending.value = false
//     }
// }

useHead({
  title: category + ' | Dojo',
});

onMounted(async () => {
  await fetchProducts();
});
</script>

<style scoped>
.proudct-image {
  width: 100%;
  height: 250px;
}

.product-main {
  height: 400px;
}

.product-row {
  row-gap: 40px;
}
</style>
