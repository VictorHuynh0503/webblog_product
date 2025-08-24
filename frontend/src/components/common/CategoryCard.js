import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export const CategoryCard = ({ category }) => {
    return (_jsx(Link, { to: `/category/${category.slug}`, className: "block", children: _jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300", children: [category.imageUrl && (_jsx("img", { src: category.imageUrl, alt: category.name, className: "w-full h-48 object-cover" })), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: category.name }), _jsx("p", { className: "text-gray-600", children: category.description })] })] }) }));
};
