<script setup>
    import {ref} from 'vue';
    import {useProduct} from '@/store/useProductStore'
    import { storeToRefs } from 'pinia';
    const { id } = useRoute().params;
    const router = useRouter()
    const useProductStore = useProduct()
    const {productCartItems, quantity} = storeToRefs(useProductStore)

</script>


<template>
    <div>

        <div class="container">
            <div class="divTable div-hover">
                
                    <div class="rowTable bg-primary text-white pb-2">
                        <div class="divTableCol">Image</div>
                        <div class="divTableCol">Product</div>
                        <div class="divTableCol">Quantity</div>
                        <div class="divTableCol">Price</div>
                        <div class="divTableCol">Total</div>
                        <div class="divTableCol">Actions</div>
                    </div>
            
                    <div class="rowTable" v-for="cart in productCartItems" :key="cart.id">
                        <div class="divTableCol">
                            <div class="media">
                                <a class="thumbnail pull-left mr-2" href="#">
                                    <img class="media-object" :src="cart.image" style="width: 72px; height: 72px;" />
                                </a>
                            </div>
                        </div>
                        <div class="divTableCol"><strong class="label label-success">{{ cart.product_name }}</strong></div>
                        <div class="divTableCol">
                            <input type="number" class="form-control" :value="cart.quantity" @change="useProductStore.productcartdataupdate(cart.id, $event.target.value)" />
                        </div>
                        <div class="divTableCol"><strong>€{{ cart.price }}</strong></div>
                        <div class="divTableCol"><strong>€{{ cart.total_price }}</strong></div>
                        <div class="divTableCol">
                            <button type="button" class="btn btn-danger" @click.prevent="useProductStore.removeFormCart(cart.id)"><span class="fa fa-remove"></span> Remove</button>
                        </div>
                    </div>
            </div>
        </div>

    </div>
</template>

<style>

    .mr-2{
    margin-right: 20px;
    }
    .divTable{
        display: table;
        width: 100%;
    }
    .rowTable {
        display: table-row;
    }
    .divTableHeading {
        display: table-header-group;
    }
    .divTableCol, .divTableHead {
        border-bottom: 1px solid #eee;
        display: table-cell;
        padding: 3px 10px;
    }
    .divTableHeading {
        background-color: #EEE;
        display: table-header-group;
        font-weight: bold;
    }
    .divTableFoot {
        background-color: #EEE;
        display: table-footer-group;
        font-weight: bold;
    }
    .divTableBody {
        display: table-row-group;
    }


</style>