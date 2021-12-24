<script>
import {mapGetters} from 'vuex'

export default {
    name: "PostCategories",
    mounted() {
        this.$store.dispatch('fetchPostCategories', this.$route.params.id)
    },
    computed: {
        ...mapGetters([
            'post_categories'
        ])
    }
}
</script>

<template>
    <div>
        <h4 class="text-center font-bold">Categories</h4>
        <ul>
            <li v-for="category in post_categories">
                {{ category.content }}
            </li>
        </ul>
    </div>
</template>