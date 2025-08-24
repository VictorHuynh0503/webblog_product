import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostsByCategory, fetchCategory } from '../../services/api';
import { PostCard } from '../../components/common/PostCard';
const CategoryPage = () => {
    const { slug } = useParams();
    const { data: category } = useQuery({
        queryKey: ['category', slug],
        queryFn: () => fetchCategory(slug)
    });
    const { data: posts, isLoading } = useQuery({
        queryKey: ['posts', 'category', slug],
        queryFn: () => fetchPostsByCategory(slug)
    });
    if (!category)
        return null;
    return (_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 text-gray-900", children: category.name }), _jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: category.description })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts?.map((post) => (_jsx(PostCard, { post: post }, post.id))) }), posts && posts.length > 3 && (_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold mb-8 text-gray-900", children: "All Articles" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.slice(3).map((post) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300", children: [_jsx("h3", { className: "text-lg font-semibold mb-2", children: _jsx("a", { href: `/post/${post.slug}`, className: "hover:text-indigo-600 transition-colors duration-200", children: post.title }) }), _jsx("p", { className: "text-gray-600 text-sm mb-4 line-clamp-2", children: post.excerpt }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "text-gray-500", children: new Date(post.created_at).toLocaleDateString() }), _jsx("a", { href: `/post/${post.slug}`, className: "text-indigo-600 hover:text-indigo-800", children: "Read more \u2192" })] })] }, post.id))) })] })), isLoading && (_jsxs("div", { className: "text-center py-12", children: [_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto" }), _jsx("p", { className: "mt-4 text-gray-600", children: "Loading articles..." })] })), !isLoading && (!posts || posts.length === 0) && (_jsx("div", { className: "text-center py-12", children: _jsx("p", { className: "text-gray-600", children: "No articles found in this category yet." }) }))] }));
};
export default CategoryPage;
