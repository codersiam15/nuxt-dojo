<template>
    <div>

        <h1 class="mt-2 mb-4">{{ category }}</h1>

        <div class="row product-row">
            <div class="col-6 col-md-3 col-lg-3 product-main " v-for="product in products" :key="product.id">
                <div class="card">
                    <div class="card-body p-3">
                        <img :src="product.image" :alt="product.title" class="img-fluid proudct-image">
                        <h4 class="mt-2">{{ product.title.slice(0, 30) }}</h4>
                        <h5>{{ product.price }}</h5>
                        <center><NuxtLink class="btn btn-success btn-sm" :to="`/product/${product.id}`">View Details</NuxtLink></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { category } = useRoute().params

    const url = `https://fakestoreapi.com/products/category/${category}`
    const {data:products} = useFetch(url);

    useHead({
        title: category + " | Dojo"
    })
</script>

<style scoped>
    .proudct-image{
        width: 100%;
        height: 250px;
    }

    .product-main{
        height: 400px;
    }

    .product-row{
        row-gap: 40px;
    }
</style>