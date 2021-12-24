let getters = {
     posts: state => {
         return state.posts
     },
     post: state => {
         return state.post
     },
     comments: state => {
         return state.comments
     },
     categories: state => {
         return state.categories
     },
     post_categories: state => {
         return state.post_categories
     }
}

export default  getters