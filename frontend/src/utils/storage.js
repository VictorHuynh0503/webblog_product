const STORAGE_KEY = 'blog_posts';
export const StorageService = {
    getPosts: () => {
        const posts = localStorage.getItem(STORAGE_KEY);
        return posts ? JSON.parse(posts) : [];
    },
    savePosts: (posts) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    },
    addPost: (post) => {
        const posts = StorageService.getPosts();
        posts.push(post);
        StorageService.savePosts(posts);
    },
    getPostsByCategory: (categorySlug) => {
        const posts = StorageService.getPosts();
        return posts.filter(post => post.status === 'published' && post.category.slug === categorySlug);
    },
    getFeaturedPosts: () => {
        const posts = StorageService.getPosts();
        return posts
            .filter(post => post.status === 'published')
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 6);
    },
    getPostBySlug: (slug) => {
        const posts = StorageService.getPosts();
        return posts.find(post => post.slug === slug);
    }
};
