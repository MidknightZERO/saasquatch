// Services Component (How We Do It)
function Services() {
    return React.createElement("section", {
        className: "py-32 px-4 bg-gradient-to-br from-yellow-100 to-purple-100"
    }, React.createElement("div", {
        className: "max-w-6xl mx-auto"
    }, [
        React.createElement("h2", {
            className: "text-4xl font-bold text-center text-teal-600 mb-16 hover:text-teal-700 transition-colors",
            children: "How We Do It"
        }),
        React.createElement("div", {
            className: "grid md:grid-cols-3 gap-8 mb-20"
        }, [
            // Mythical Mentorship Card
            React.createElement("div", {
                className: "card-hover bg-white p-8 rounded-xl shadow-lg"
            }, [
                React.createElement("div", {
                    className: "w-12 h-12 text-pink-500 mb-6 transform transition-transform group-hover:rotate-12"
                }),
                React.createElement("h3", {
                    className: "text-2xl font-bold text-pink-500 mb-4 hover:text-pink-600 transition-colors",
                    children: "Mythical Mentorship"
                }),
                React.createElement("p", {
                    className: "text-gray-600 mb-6 leading-relaxed",
                    children: "Our team of cryptid-certified developers, caffeine-addicted designers, and API shamans will guide your SaaS from \"awkward beta\" to \"legendary beast.\""
                }),
                React.createElement("ul", {
                    className: "space-y-3"
                }, [
                    React.createElement("li", {
                        className: "flex items-center text-gray-700"
                    }, [
                        React.createElement("span", {
                            className: "text-pink-500 mr-3"
                        }, "★"),
                        "1-on-1 Expert Guidance"
                    ]),
                    React.createElement("li", {
                        className: "flex items-center text-gray-700"
                    }, [
                        React.createElement("span", {
                            className: "text-pink-500 mr-3"
                        }, "🎯"),
                        "Strategic Planning"
                    ])
                ])
            ]),
            // Cloud Whispering Card
            React.createElement("div", {
                className: "card-hover bg-white p-8 rounded-xl shadow-lg"
            }, [
                React.createElement("div", {
                    className: "w-12 h-12 text-teal-500 mb-6 transform transition-transform group-hover:rotate-12"
                }),
                React.createElement("h3", {
                    className: "text-2xl font-bold text-teal-500 mb-4 hover:text-teal-600 transition-colors",
                    children: "Cloud Whispering"
                }),
                React.createElement("p", {
                    className: "text-gray-600 mb-6 leading-relaxed",
                    children: "We speak fluent AWS, Google Cloud, and Existential Dread. Let us tame your server costs and exorcise your bugs."
                }),
                React.createElement("ul", {
                    className: "space-y-3"
                }, [
                    React.createElement("li", {
                        className: "flex items-center text-gray-700"
                    }, [
                        React.createElement("span", {
                            className: "text-teal-500 mr-3"
                        }, "⚡"),
                        "Performance Optimization"
                    ]),
                    React.createElement("li", {
                        className: "flex items-center text-gray-700"
                    }, [
                        React.createElement("span", {
                            className: "text-teal-500 mr-3"
                        }, "🛡️"),
                        "Security Hardening"
                    ])
                ])
            ]),
            // Sasquatch-Scale Support Card
            React.createElement("div", {
                className: "card-hover bg-white p-8 rounded-xl shadow-lg"
            }, [
                React.createElement("div", {
                    className: "w-12 h-12 text-purple-500 mb-6 transform transition-transform group-hover:rotate-12"
                }),
                React.createElement("h3", {
                    className: "text-2xl font-bold text-purple-500 mb-4 hover:text-purple-600 transition-colors",
                    children: "Sasquatch-Scale Support"
                }),
                React.createElement("p", {
                    className: "text-gray-600 mb-6 leading-relaxed",
                    children: "Stuck? We'll stomp through your codebase like a 9-foot-tall forest creature who just discovered Red Bull."
                }),
                React.createElement("ul", {
                    className: "space-y-3"
                }, [
                    React.createElement("li", {
                        className: "flex items-center text-gray-700"
                    }, [
                        React.createElement("span", {
                            className: "text-purple-500 mr-3"
                        }, "💻"),
                        "24/7 Technical Support"
                    ]),
                    React.createElement("li", {
                        className: "flex items-center text-gray-700"
                    }, [
                        React.createElement("span", {
                            className: "text-purple-500 mr-3"
                        }, "🚀"),
                        "Rapid Problem Resolution"
                    ])
                ])
            ])
        ])
    ]));
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Services;
} else if (typeof window !== 'undefined') {
    window.Services = Services;
}
