import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const categories = [
    { name: 'Engineering', slug: 'engineering' },
    { name: 'Science', slug: 'science' },
    { name: 'Technology', slug: 'technology' },
    { name: 'Programming', slug: 'programming' },
    { name: 'Mathematics', slug: 'mathematics' }
];
export const Navigation = () => {
    return (_jsx("nav", { className: "bg-white shadow-md", children: _jsx("div", { className: "container mx-auto px-6 py-3", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-2xl font-bold text-gray-800", children: "TechBlog" }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: categories.map(category => (_jsx(Link, { to: `/category/${category.slug}`, className: "text-gray-600 hover:text-gray-900 transition-colors duration-200", children: category.name }, category.slug))) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Link, { to: "/about", className: "text-gray-600 hover:text-gray-900 transition-colors duration-200", children: "About" }), _jsx(Link, { to: "/guidelines", className: "text-gray-600 hover:text-gray-900 transition-colors duration-200", children: "Guidelines" })] })] }) }) }));
};
