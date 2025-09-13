// Import all components
// Note: In a real React app, these would be proper imports
// For now, we'll assume the components are loaded via script tags

// Main entry point
function initializeApp() {
    // Wait for React to be available
    if (typeof React === 'undefined') {
        console.error('React is not loaded');
        return;
    }

    // Get the root element
    const rootElement = document.getElementById('root');
    if (!rootElement) {
        console.error('Root element not found');
        return;
    }

    // Render the app
    ReactDOM.render(React.createElement(App), rootElement);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
