import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
const Container = ({ children, className, size = 'lg' }) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl'
    };
    return (_jsx("div", { className: clsx('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className), children: children }));
};
export default Container;
