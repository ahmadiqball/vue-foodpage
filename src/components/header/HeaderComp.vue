<template>
    <div class="header">
        <div>
            <h1>mealapp</h1>
        </div>
        <div>
            <router-link to="/">Home</router-link>
            <a href="#">Foods</a>
            <a href="#">Ingredients</a>
            <a href="#">Local Culinary</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp'
}
</script>

<style>
.header {
   width: 90%;
   padding: 0 5%;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.header h1 {
    font-size: 1.5rem;
}

.header a {
    color: rgb(16, 34, 46);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.8rem;
    padding: 0 0.75rem;
}
</style>