import { supabase } from '../lib/supabase';
export async function fetchPosts() {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
    if (error)
        throw error;
    return data || [];
}
export async function fetchFeaturedPosts() {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('isFeatured', true)
        .order('created_at', { ascending: false });
    if (error)
        throw error;
    return data || [];
}
export async function fetchPost(slug) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();
    if (error)
        throw error;
    if (!data)
        throw new Error('Post not found');
    return data;
}
export async function fetchCategories() {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });
    if (error)
        throw error;
    return data || [];
}
export async function fetchCategory(slug) {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .single();
    if (error)
        throw error;
    if (!data)
        throw new Error('Category not found');
    return data;
}
export async function fetchPostsByCategory(categorySlug) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', categorySlug)
        .order('created_at', { ascending: false });
    if (error)
        throw error;
    return data || [];
}
export async function fetchAnalytics() {
    const { data, error } = await supabase
        .from('analytics')
        .select('*')
        .order('date', { ascending: false });
    if (error)
        throw error;
    return data || [];
}
export async function createPost(data) {
    const slug = data.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s+/g, '-');
    console.log('Creating post with data:', { ...data, slug }); // Debug log
    const post = {
        title: data.title,
        slug,
        content: data.content,
        excerpt: data.excerpt,
        category: data.categoryId,
        tags: data.tags,
        status: data.status,
        featured_image: data.featuredImage,
        is_featured: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    const { data: createdPost, error } = await supabase
        .from('posts')
        .insert([post])
        .select('*, category:categories(*)')
        .single();
    if (error)
        throw error;
    if (!createdPost)
        throw new Error('Failed to create post');
    return createdPost;
}
