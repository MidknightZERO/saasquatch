// Main App Component
function App() {
    const [scrollY, setScrollY] = React.useState(0);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [showScrollTop, setShowScrollTop] = React.useState(false);

    // Scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowScrollTop(window.scrollY > 300);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body overflow effect
    React.useEffect(() => {
        if (isModalOpen || isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen, isMenuOpen]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return React.createElement("div", {
        className: "min-h-screen bg-gradient-to-b from-teal-400 to-purple-400"
    }, [
        // Hero Section
        React.createElement(Hero, { key: "hero" }),
        
        // Mission Section
        React.createElement(Mission, { key: "mission" }),
        
        // Services Section
        React.createElement(Services, { key: "services" }),
        
        // Process and Guarantee Section
        React.createElement(ProcessGuarantee, { key: "process-guarantee" }),
        
        // Pricing Section - This is where we want it!
        React.createElement(Pricing, { key: "pricing" }),
        
        // Why Choose Us Section
        React.createElement(WhyChooseUs, { key: "why-choose-us" }),
        
        // Join the Herd Section
        React.createElement(JoinTheHerd, { key: "join-the-herd" }),
        
        // Footer
        React.createElement(Footer, { key: "footer" }),
        
        // Scroll to top button
        showScrollTop && React.createElement("button", {
            onClick: scrollToTop,
            className: "fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50",
            children: "↑"
        })
    ]);
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
} else if (typeof window !== 'undefined') {
    window.App = App;
}
