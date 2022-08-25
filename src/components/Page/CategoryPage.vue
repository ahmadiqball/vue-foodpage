<template>
    <div>
        <div class="ctgr-head">
            <p>mealapp API website</p>
            <h1>See All The Delicious Foods</h1>
        </div>
        <div class="ctgr-list">
            <div v-for="data in foodDatas.categories" :key="data.idCategory">
                <CategoryItem v-bind:ctgrData="data"/>
             
            </div>
        </div>
    </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';

export default {
    name: 'CategoryPage',
    components: {
        CategoryItem
    },
    props: [
        'foodDatas'
    ],
    data() {
        return {

        }
    },
    methods: {
        test: function () {
            console.log(this.foodDatas)
        }
    }
}
</script>

<style>
.ctgr-head {
    background: rgb(231, 231, 231);
    padding: 5rem 0;
    vertical-align: bottom;
}

.ctgr-head h1 {
    font-size: 2rem;
    font-weight: 800;
}

.ctgr-list {
    display: grid;
    padding: 2rem 10%;
    grid-template-columns: repeat(4, 1fr);
}

@media (max-width:768px) {
    .ctgr-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>