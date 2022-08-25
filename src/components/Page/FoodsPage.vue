<template>
    <div>
        <div class="foods-head">
            <h1>{{ categoryLabel }} Meals</h1>
        </div>
        <div class="foods-items">
            <div v-for="data in foodsData.meals" :key="data.idMeal">
                <FoodsItem v-bind:foodData="data" v-bind:category="categoryLabel"/>
            </div>
        </div>
    </div>
</template>

<script>
import FoodsItem from './FoodsItem.vue';

export default {
    name: 'FoodsPage',
    components: {
        FoodsItem
    },
    props: [

    ],
    data() {
        return {
            categoryLabel: [],
            foodsData: []
        }
    },
    created() {
        this.categoryLabel = this.$route.params.cname
    },
    mounted() {
        this.axios
            .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.categoryLabel)
            .then(res => this.foodsData = res.data)
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    },
    methods: {

    }
}
</script>

<style>
.foods-head {
    background-color: rgb(231, 231, 231);
    padding: 3rem 10%;
}

.foods-head h1 {
    font-size: 3rem;
}

.foods-items {
    display: grid;
    padding: 2rem 10%;
    grid-template-columns: repeat(4, 1fr);
}

@media (max-width:768px) {
    .foods-items {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>