<template>
    <div class="ctgr-item" v-bind:style="{ backgroundImage: `url(${ctgrData.strCategoryThumb})` }"
        v-on:click="ctgrClickHandler">
        {{ ctgrData.strCategory }}
    </div>
</template>

<script>
export default{
    name: 'CategoryItem',
    props: [ 'ctgrData' ],
    methods: {
        ctgrClickHandler() {
            this.$router.push({name:"foods", params:{cname:this.ctgrData.strCategory,}})
        }
    }
}
</script>

<style>
.ctgr-item {
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
    box-shadow: 4px 4px 8px 0 rgba(0,0,0,0.2);

    color: white;
    font-weight: 800;
}

.ctgr-item:hover {
    background-color: rgb(39, 39, 39, 0.8);
    box-shadow: 4px 4px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
}
</style>