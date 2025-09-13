// Footer Component
function Footer() {
    const currentYear = new Date().getFullYear();

    return React.createElement("footer", {
        className: "bg-gray-900 text-white py-12 px-4"
    }, React.createElement("div", {
        className: "max-w-6xl mx-auto"
    }, [
        React.createElement("div", {
            className: "flex flex-col md:flex-row justify-between items-center"
        }, [
            React.createElement("div", {
                className: "flex items-center mb-4 md:mb-0"
            }, [
                React.createElement("img", {
                    src: "https://i.imgur.com/CUkiHil.png",
                    alt: "SaaSquatch Logo",
                    className: "h-8 w-8 mr-3"
                }),
                React.createElement("span", {
                    className: "text-xl font-bold",
                    children: "SaaSquatch"
                })
            ]),
            React.createElement("div", {
                className: "flex space-x-6"
            }, [
                React.createElement("a", {
                    href: "#terms",
                    className: "text-gray-400 hover:text-white transition-colors",
                    children: "Terms of Service"
                }),
                React.createElement("a", {
                    href: "#privacy",
                    className: "text-gray-400 hover:text-white transition-colors",
                    children: "Privacy Policy"
                })
            ])
        ]),
        React.createElement("div", {
            className: "text-center mt-8 pt-8 border-t border-gray-800"
        }, [
            React.createElement("p", {
                className: "text-gray-400 text-sm",
                children: `© ${currentYear} SaaSquatch Technologies. All rights reserved.`
            })
        ])
    ]));
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Footer;
} else if (typeof window !== 'undefined') {
    window.Footer = Footer;
}
