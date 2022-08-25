<template>
    <div class="food-item" v-bind:style="{ backgroundImage: `url(${foodData.strMealThumb})` }"
        v-on:click="foodClickHandler">
        {{ foodData.strMeal }}
    </div>
</template>

<script>
export default{
    name: 'FoodsItem',
    props: [ 'foodData', 'category' ],
    methods: {
        foodClickHandler() {
            this.$router.push({name:"recipe", params:{cname: this.category, cid: this.foodData.idMeal}})
        }
    }
}
</script>

<style>
.food-item {
    margin: 10px;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-color: rgb(39, 39, 39, 0.5);
    background-blend-mode: overlay;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 0.25rem;

    color: white;
    font-weight: 800;
}



.food-item:hover {
    background-color: rgb(39, 39, 39, 0.8);
    box-shadow: 4px 4px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
}
</style>