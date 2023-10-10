<template>
    <div>
    
        <div id="carouselExampleIndicators" class="carousel slide mt-2" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="~/assets/images/slider-1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="~/assets/images/slider-2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="~/assets/images/slider-3.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="row product-row">
            <div class="col-12 mt-4 mb-4">
                <h1>Just For You</h1>
            </div>
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
    definePageMeta({
        layout:'default',
    });

    let url = 'https://fakestoreapi.com/products'
    const {data:products} = await useFetch(url);

    useHead({
        title: "Home | Dojo"
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