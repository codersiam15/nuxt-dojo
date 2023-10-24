<script setup>
    useHead({
        link:[
            {
            href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
            rel:"stylesheet",
            integrity:"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
            crossorigin:"anonymous"
            } 
        ],

        script:[
            {
                src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
                integrity:"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
                crossorigin:"anonymous"
            }
        ]
    })

    let catgory_url = 'https://fakestoreapi.com/products/categories'
    const { data:categorys } = await useFetch(catgory_url);

    import {useProduct} from '@/store/useProductStore'
    import { storeToRefs } from 'pinia';
    const useProductStore = useProduct()
    const {productCartItems} = storeToRefs(useProductStore)
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <NuxtLink class="navbar-brand" to="">Nuxt Dojo</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="flex" id="">
                    <ul class="flex gap-4">

                        <li class="">
                            <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
                        </li>

                        <li v-for="cat in categorys" :key="cat.id">
                            <NuxtLink class="" :to="`/category/${ cat }`" >{{ cat }}</NuxtLink>
                        </li>

                        <li class="">
                            <NuxtLink class="" aria-current="page" to="/cart">Cart <sup>{{ productCartItems.length }}</sup></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <slot />
        </div>

    </div>
</template>