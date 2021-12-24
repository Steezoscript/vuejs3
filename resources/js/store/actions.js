let actions = {
    createPost({commit}, post) {
        this.$axios.post('/api/posts', post)
            .then(res => {
                if (res.data === 'unauthorized')
                    alert('You are not authorized to create this post!')
                else
                    commit('CREATE_POST', res.data)
            }).catch(err => {
            console.log(err)
        })
      
    },
    fetchPosts({commit}) {
        this.$axios.get('/api/posts')
            .then(res => {
                commit('FETCH_POSTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchPost({commit}, id) {
        this.$axios.get(`/api/post/${id}`)
            .then(res => {
                commit('FETCH_POST', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletePost({commit}, post) {
        this.$axios.delete(`/api/posts/${post.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_POST', post)
                else if (res.data === 'unauthorized')
                    alert('You are not authorized to delete this post!')
            }).catch(err => {
            console.log(err)
        })
    },
    storeComment({commit}, comment, id) {
        this.$axios.post(`/api/comments/id`, comment)
            .then(res => {
                if (res.data === 'unauthorized')
                    alert('You are not authorized to create this comment!')
                else
                    commit('CREATE_COMMENT', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchComments({commit}, id) {
        this.$axios.get(`/api/comments/${id}`)
            .then(res => {
                commit('FETCH_COMMENTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteComment({commit}, comment) {
        this.$axios.delete(`/api/comments/${comment.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_COMMENT', comment)
                else if (res.data === 'unauthorized')
                    alert('You are not authorized to delete this comment!')
            }).catch(err => {
            console.log(err)
        })
    },
    fetchCategories({commit}) {
        this.$axios.get('/api/categories')
            .then(res => {
                commit('FETCH_CATEGORIES', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchPostCategories({commit}, id) {
        this.$axios.get(`/api/categories/${id}`)
            .then(res => {
                commit('FETCH_POSTCATEGORIES', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
}

export default actions