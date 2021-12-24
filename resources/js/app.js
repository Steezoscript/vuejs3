//Vue
import { createApp } from 'vue';

//Vuex Store
import store from './store'

//Vue Router
import router from './routes';

const app = createApp({})
app.use(router);
app.use(store);
app.component('app-header', require('./components/HeaderComponent.vue').default);
app.component('app-footer', require('./components/FooterComponent.vue').default);
app.component('filter-component', require('./components/FilterComponent.vue').default);
app.component('blog-post', require('./components/PostListComponent.vue').default);
app.component('create-post', require('./components/CreatePost.vue').default);
app.component('blog-comments', require('./components/CommentListComponent.vue').default);
app.component('category-list', require('./components/CategoryListComponent.vue').default);
app.component('create-comment', require('./components/CreateComment.vue').default);

app.mount('#app')