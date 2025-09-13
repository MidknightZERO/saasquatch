// Process and Guarantee Component
function ProcessGuarantee() {
    return React.createElement("section", {
        className: "py-20 px-4 bg-white"
    }, React.createElement("div", {
        className: "max-w-6xl mx-auto"
    }, [
        React.createElement("div", {
            className: "grid md:grid-cols-2 gap-12"
        }, [
            // Our Process
            React.createElement("div", {
                className: "bg-white p-8 rounded-xl shadow-lg"
            }, [
                React.createElement("h3", {
                    className: "text-2xl font-bold text-gray-800 mb-6",
                    children: "Our Process"
                }),
                React.createElement("div", {
                    className: "space-y-4"
                }, [
                    React.createElement("div", {
                        className: "flex items-center"
                    }, [
                        React.createElement("div", {
                            className: "w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold mr-4",
                            children: "1"
                        }),
                        React.createElement("span", {
                            className: "text-gray-700",
                            children: "Discovery & Planning"
                        })
                    ]),
                    React.createElement("div", {
                        className: "flex items-center"
                    }, [
                        React.createElement("div", {
                            className: "w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold mr-4",
                            children: "2"
                        }),
                        React.createElement("span", {
                            className: "text-gray-700",
                            children: "Strategic Implementation"
                        })
                    ]),
                    React.createElement("div", {
                        className: "flex items-center"
                    }, [
                        React.createElement("div", {
                            className: "w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold mr-4",
                            children: "3"
                        }),
                        React.createElement("span", {
                            className: "text-gray-700",
                            children: "Launch & Scale"
                        })
                    ])
                ])
            ]),
            // Our Guarantee
            React.createElement("div", {
                className: "bg-white p-8 rounded-xl shadow-lg"
            }, [
                React.createElement("h3", {
                    className: "text-2xl font-bold text-gray-800 mb-6",
                    children: "Our Guarantee"
                }),
                React.createElement("div", {
                    className: "space-y-4"
                }, [
                    React.createElement("div", {
                        className: "flex items-center"
                    }, [
                        React.createElement("span", {
                            className: "text-pink-500 mr-3 text-xl",
                            children: "★"
                        }),
                        React.createElement("span", {
                            className: "text-gray-700",
                            children: "100% Satisfaction or Your Berries Back"
                        })
                    ]),
                    React.createElement("div", {
                        className: "flex items-center"
                    }, [
                        React.createElement("span", {
                            className: "text-teal-500 mr-3 text-xl",
                            children: "🛡️"
                        }),
                        React.createElement("span", {
                            className: "text-gray-700",
                            children: "Enterprise-Grade Security"
                        })
                    ]),
                    React.createElement("div", {
                        className: "flex items-center"
                    }, [
                        React.createElement("span", {
                            className: "text-purple-500 mr-3 text-xl",
                            children: "⚡"
                        }),
                        React.createElement("span", {
                            className: "text-gray-700",
                            children: "Lightning-Fast Response Times"
                        })
                    ])
                ])
            ])
        ])
    ]));
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProcessGuarantee;
} else if (typeof window !== 'undefined') {
    window.ProcessGuarantee = ProcessGuarantee;
}
