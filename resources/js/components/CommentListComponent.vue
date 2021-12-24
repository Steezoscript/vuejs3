<script>
import {mapGetters} from 'vuex'

export default {
    name: "Comments",
    mounted() {
        this.$store.dispatch('fetchComments', this.$route.params.id)
    },
    computed: {
        ...mapGetters([
            'comments'
        ])
    }
}
</script>

<template>
    <div>
        <h4 class="text-center font-bold">Comments</h4>
        <table class="table table-striped w-full">
            <tbody>
            <tr v-for="comment in comments">
                <td>{{comment.name}}</td>
                <td>{{comment.content}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>