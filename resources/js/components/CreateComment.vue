 <style>
 input[type="text"], input[type="password"], textarea { outline: none; }
 button:disabled {
  opacity: 0.4;
}
 </style>

 <template>
    <form action="" @submit="storeComment(comment)" class="space-y-4">
        <h4 class="text-center font-bold">Add a comment</h4>

        <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Name</label>
          <input type="text" id="name" name="name" v-model="comment.name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="What is your name?">
        </div>

        <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label for="content" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Comment</label>
          <textarea v-model="comment.content" id="content" name="content" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Please write a nice comment :)"></textarea>
        </div>

        <button :disabled="!isValid" @click.prevent="storeComment(comment)" type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <!-- Heroicon name: solid/mail -->
          <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Add Comment
        </button>
    </form>
</template>

<script>
    export default {
        name: "CreateComment",
        data() {
            return {
                comment: {
                    name: '',
                    content: ''
                }
            }
        },
        methods: {
            storeComment(comment) {
                this.$store.dispatch('storeComment', comment, this.$route.params.id)
            }
        },
        computed: {
            isValid() {
                return this.comment.name !== '' && this.comment.content !== ''
            }
        }
    }
</script>