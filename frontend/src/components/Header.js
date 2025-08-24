import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Header = () => {
    return (_jsx("header", { className: "bg-gray-800 text-white", children: _jsx("nav", { className: "container mx-auto px-6 py-4", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "text-xl font-bold", children: "Blog & Analytics" }), _jsxs("div", { className: "space-x-4", children: [_jsx(Link, { to: "/", className: "hover:text-gray-300", children: "Blog" }), _jsx(Link, { to: "/analytics", className: "hover:text-gray-300", children: "Analytics" })] })] }) }) }));
};
export default Header;
