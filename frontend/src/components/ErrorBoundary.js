import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
        // Log the error to an error reporting service
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsxs("div", { className: "max-w-2xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg", children: [_jsx("h1", { className: "text-2xl font-bold text-red-600 mb-4", children: "Something went wrong" }), _jsx("p", { className: "text-gray-600 mb-4", children: "We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists." }), process.env.NODE_ENV === 'development' && this.state.error && (_jsxs("div", { className: "mt-4", children: [_jsx("h2", { className: "text-lg font-semibold mb-2", children: "Error Details:" }), _jsx("pre", { className: "bg-gray-100 p-4 rounded overflow-x-auto", children: this.state.error.toString() }), this.state.errorInfo && (_jsx("pre", { className: "bg-gray-100 p-4 rounded overflow-x-auto mt-2", children: this.state.errorInfo.componentStack }))] })), _jsx("button", { onClick: () => window.location.reload(), className: "mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors", children: "Refresh Page" })] }) }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
