export class StorageService {
    static POSTS_KEY = 'blog_posts';
    static getPosts() {
        const postsJson = localStorage.getItem(this.POSTS_KEY);
        return postsJson ? JSON.parse(postsJson) : [];
    }
    static savePosts(posts) {
        localStorage.setItem(this.POSTS_KEY, JSON.stringify(posts));
    }
    static addPost(post) {
        const posts = this.getPosts();
        posts.push(post);
        this.savePosts(posts);
    }
    static updatePost(updatedPost) {
        const posts = this.getPosts();
        const index = posts.findIndex(p => p.slug === updatedPost.slug);
        if (index !== -1) {
            posts[index] = updatedPost;
            this.savePosts(posts);
        }
    }
    static getPostBySlug(slug) {
        const posts = this.getPosts();
        return posts.find(p => p.slug === slug) || null;
    }
    static getPostsByCategory(category) {
        const posts = this.getPosts();
        return posts.filter(p => p.category === category);
    }
    static deletePost(slug) {
        const posts = this.getPosts();
        const filteredPosts = posts.filter(p => p.slug !== slug);
        this.savePosts(filteredPosts);
    }
}
