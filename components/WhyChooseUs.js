// Why Choose Us Component
function WhyChooseUs() {
    const scrollY = React.useState(0)[0];
    
    const parallaxStyle = {
        transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
        backgroundPosition: "center -150px",
        backgroundSize: "130% auto",
        top: "-100px",
        height: "calc(100% + 200px)"
    };

    return React.createElement("section", {
        className: "py-20 px-4 bg-gray-900 relative overflow-hidden"
    }, [
        React.createElement("div", {
            className: "absolute inset-0 bg-cover opacity-20",
            style: {
                backgroundImage: "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000)",
                ...parallaxStyle
            }
        }),
        React.createElement("div", {
            className: "max-w-6xl mx-auto text-center relative z-10"
        }, [
            React.createElement("h2", {
                className: "text-4xl font-bold text-white mb-16",
                children: "Why Choose Us?"
            }),
            React.createElement("div", {
                className: "grid md:grid-cols-3 gap-8"
            }, [
                // Footprints, Not Fingerprints
                React.createElement("div", {
                    className: "bg-white p-8 rounded-xl shadow-lg"
                }, [
                    React.createElement("div", {
                        className: "w-12 h-12 text-pink-500 mb-6 mx-auto"
                    }),
                    React.createElement("h3", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "Footprints, Not Fingerprints"
                    }),
                    React.createElement("p", {
                        className: "text-gray-600",
                        children: "We leave no trace... except for the trail of thriving startups."
                    })
                ]),
                // 100% Cryptid-Approved
                React.createElement("div", {
                    className: "bg-white p-8 rounded-xl shadow-lg"
                }, [
                    React.createElement("div", {
                        className: "w-12 h-12 text-teal-500 mb-6 mx-auto"
                    }),
                    React.createElement("h3", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "100% Cryptid-Approved"
                    }),
                    React.createElement("p", {
                        className: "text-gray-600",
                        children: "Our mascot, Sassy, once scared a venture capitalist into signing a term sheet. True story."
                    })
                ]),
                // No-Nonsense (But All-Fun)
                React.createElement("div", {
                    className: "bg-white p-8 rounded-xl shadow-lg"
                }, [
                    React.createElement("div", {
                        className: "w-12 h-12 text-purple-500 mb-6 mx-auto"
                    }),
                    React.createElement("h3", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "No-Nonsense (But All-Fun)"
                    }),
                    React.createElement("p", {
                        className: "text-gray-600",
                        children: "Board meetings involve fewer spreadsheets and more interpretive dance breaks."
                    })
                ])
            ])
        ])
    ]);
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WhyChooseUs;
} else if (typeof window !== 'undefined') {
    window.WhyChooseUs = WhyChooseUs;
}
