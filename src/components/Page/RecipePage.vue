<template>
    <div class="recipe">
        <div class="recipe-head">
            <h1>{{ recipeData.strMeal }}</h1>
        </div>
        <div class="recipe-body">
            <h5>{{ recipeData.strArea }} Culinary</h5>
            <div class='recipe-img' v-bind:style="{ backgroundImage: `url(${recipeData.strMealThumb})` }"></div>
            <div class="recipe-inst">
                <div>
                    <h2>Ingredients</h2>
                    <li v-for="ing in ingData" :key="ing">
                        {{ ing }}
                    </li>
                </div>
                <div>
                    <h2>Instructions</h2>
                    <div v-html="instructionCmd"></div>
                </div>
            </div>


            <iframe width="720" height="405" :src="videoURL" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>

export default {
    name: 'RecipePage',
    data() {
        return {
            recipeData: [],
            recipeID: [],
        }
    },
    computed: {
        ingData: function () {
            let ingDatas = [];
            if (this.recipeData != []) {
                for (let i = 1; i <= 20; i++) {
                    if (this.recipeData['strIngredient' + i] != null && this.recipeData['strIngredient' + i] != "") {
                        ingDatas.push(this.recipeData['strMeasure' + i] + ' ' + this.recipeData['strIngredient' + i])
                    }
                }
            }
            console.log(ingDatas)
            return ingDatas
        },
        videoURL: function () {
            let url = ""
            if (this.recipeData.strYoutube != undefined) {
                url = this.recipeData.strYoutube
                url = url.replace("watch?v=", "embed/")
            }
            console.log(url)
            return url
        },
        instructionCmd: function () {
            let instc = ""
            if (this.recipeData.strInstructions != undefined) {
                instc = this.recipeData.strInstructions
                instc = instc.replace(/(?:\r\n|\r|\n)/g, "<br>")
            }
            return instc
        }
    },
    created() {
        this.recipeID = this.$route.params.cid
    },
    mounted() {
        this.axios
            .get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.recipeID)
            .then(res => this.recipeData = res.data.meals[0])
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    },
}
</script>

<style>
.recipe {
    text-align: left;
    padding: 0 10%;
}

.recipe-head {
    background-color: rgb(231, 231, 231);
    padding: 3rem 10%;
    margin: 0 -10%;
}

.recipe-head h1 {
    margin: 0;
    font-size: 3.5rem;
    font-weight: 400;
}

.recipe-body {
    padding: 20px 0;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
}

.recipe-body h5 {
    grid-column: span 2;
    margin: 0;
    padding: 1rem 0;
    font-size: 1rem;
    border-bottom: 1px solid rgb(0, 20, 46);
}

.recipe-img {
    width: 40vw;
    height: 40vw;
    background-size: cover;
    border-radius: 15px;
    grid-row-start: 2;
    grid-row-end: 4;
    z-index: 10;
    margin-top: 2rem;
}

.recipe-inst {
    grid-column-start: 2;
    background-color: rgb(231, 231, 231);
    padding: 2rem 2rem 3.25rem 5rem;
    margin: 0 0 0 -5rem;
    border-radius: 10px;
}

.recipe-body iframe {
    grid-column: span 2;
    margin: 4rem auto;
}

@media (max-width:1024px) {
    .recipe-img {
        grid-column: span 2;
        grid-row-end: 3;
       
    }

    .recipe-inst {
        grid-column-start: 1;
        grid-column: span 2;
        margin: 0;
        padding-left: 2rem;
        width: calc(80vw - 4rem);
    }

    .recipe-body iframe {
        width: 80vw;
        height: calc(80vw * 0.5625);
    }
}
</style>

