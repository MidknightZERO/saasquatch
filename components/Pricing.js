// Pricing Component
function Pricing() {
    const [isYearly, setIsYearly] = React.useState(false);
    const [showLeadForm, setShowLeadForm] = React.useState(null);

    const togglePricing = () => {
        setIsYearly(!isYearly);
    };

    const closeLeadForm = () => {
        setShowLeadForm(null);
    };

    return React.createElement("section", {
        id: "pricing",
        className: "py-20 px-4 bg-gradient-to-br from-yellow-100 via-white to-purple-100 relative overflow-hidden"
    }, [
        // Background pattern
        React.createElement("div", {
            className: "absolute inset-0 opacity-10",
            style: {
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='forest' patternUnits='userSpaceOnUse' width='100' height='100'><rect width='100' height='100' fill='%23fef9c3'/><path d='M10,80 Q15,60 20,80 Q25,50 30,80 Q35,40 40,80 Q45,70 50,80 Q55,30 60,80 Q65,60 70,80 Q75,40 80,80 Q85,50 90,80' stroke='%23d1d5db' stroke-width='0.5' fill='none' opacity='0.3'/></pattern></defs><rect width='100' height='100' fill='url(%23forest)'/></svg>")`
            }
        }),
        React.createElement("div", {
            className: "max-w-6xl mx-auto relative z-10"
        }, [
            // Header
            React.createElement("div", {
                className: "text-center mb-16"
            }, [
                React.createElement("h2", {
                    className: "text-4xl font-bold text-gray-800 mb-4",
                    children: "Choose Your Adventure"
                }),
                React.createElement("p", {
                    className: "text-lg text-gray-600 mb-8 italic",
                    children: "(Because every Sasquatch needs the right tools to thrive in the digital wilderness)"
                }),
                // Toggle
                React.createElement("div", {
                    className: "flex items-center justify-center gap-4 mb-8"
                }, [
                    React.createElement("span", {
                        className: "text-lg font-medium text-gray-700",
                        children: "Monthly"
                    }),
                    React.createElement("label", {
                        className: "relative inline-block w-16 h-8"
                    }, [
                        React.createElement("input", {
                            type: "checkbox",
                            checked: isYearly,
                            onChange: togglePricing,
                            className: "sr-only"
                        }),
                        React.createElement("span", {
                            className: `absolute inset-0 rounded-full transition-all duration-300 ${isYearly ? 'bg-teal-500' : 'bg-gray-300'}`
                        }),
                        React.createElement("span", {
                            className: `absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${isYearly ? 'transform translate-x-8' : ''}`
                        })
                    ]),
                    React.createElement("span", {
                        className: "text-lg font-medium text-gray-700",
                        children: "Yearly"
                    }),
                    React.createElement("span", {
                        className: "bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium",
                        children: "Save 20%"
                    })
                ])
            ]),
            // Pricing Cards
            React.createElement("div", {
                className: "grid md:grid-cols-3 gap-8 mb-16"
            }, [
                // Tier 1: Business Website
                React.createElement("div", {
                    className: "bg-white rounded-2xl shadow-lg p-8 border-t-4 border-pink-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                }, [
                    React.createElement("div", {
                        className: "text-center mb-8"
                    }, [
                        React.createElement("div", {
                            className: "text-4xl mb-4",
                            children: "🏢"
                        }),
                        React.createElement("h3", {
                            className: "text-2xl font-bold text-gray-800 mb-2",
                            children: "Business Website"
                        }),
                        React.createElement("div", {
                            className: "mb-4"
                        }, [
                            React.createElement("span", {
                                className: "text-4xl font-bold text-pink-500",
                                children: isYearly ? "£12" : "£15"
                            }),
                            React.createElement("span", {
                                className: "text-gray-600 ml-2",
                                children: "/month"
                            })
                        ]),
                        React.createElement("p", {
                            className: "text-sm text-gray-500",
                            children: isYearly ? "£12/month" : "£15/month"
                        })
                    ]),
                    React.createElement("p", {
                        className: "text-gray-600 mb-6",
                        children: "Get your business online with a professional presence that works 24/7. Perfect for small businesses, freelancers, and service providers."
                    }),
                    React.createElement("ul", {
                        className: "space-y-3 mb-8"
                    }, [
                        "Custom domain name included",
                        "Professional responsive design",
                        "Up to 5 pages",
                        "Contact forms and enquiry handling",
                        "Basic SEO optimization",
                        "99.9% uptime hosting",
                        "SSL certificate included",
                        "Email forwarding (+£10/month)"
                    ].map((feature, index) => 
                        React.createElement("li", {
                            key: index,
                            className: "flex items-center text-gray-700"
                        }, [
                            React.createElement("span", {
                                className: "text-pink-500 mr-3 font-bold",
                                children: "✓"
                            }),
                            feature
                        ])
                    )),
                    React.createElement("div", {
                        className: "text-center"
                    }, [
                        React.createElement("button", {
                            onClick: () => setShowLeadForm({ tier: 'business', pricing: isYearly ? 'yearly' : 'monthly' }),
                            className: "w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300",
                            children: "Get Started"
                        }),
                        React.createElement("p", {
                            className: "text-xs text-gray-500 mt-2",
                            children: "12-month contract (30-day rolling at £30/month)"
                        })
                    ])
                ]),
                // Tier 2: E-Commerce Website (Most Popular)
                React.createElement("div", {
                    className: "bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative transform scale-105"
                }, [
                    React.createElement("div", {
                        className: "absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium",
                        children: "Most Popular"
                    }),
                    React.createElement("div", {
                        className: "text-center mb-8"
                    }, [
                        React.createElement("div", {
                            className: "text-4xl mb-4",
                            children: "🛒"
                        }),
                        React.createElement("h3", {
                            className: "text-2xl font-bold text-gray-800 mb-2",
                            children: "E-Commerce Website"
                        }),
                        React.createElement("div", {
                            className: "mb-4"
                        }, [
                            React.createElement("span", {
                                className: "text-4xl font-bold text-teal-500",
                                children: isYearly ? "£20" : "£25"
                            }),
                            React.createElement("span", {
                                className: "text-gray-600 ml-2",
                                children: "/month"
                            })
                        ]),
                        React.createElement("p", {
                            className: "text-sm text-gray-500",
                            children: isYearly ? "£20/month" : "£25/month"
                        })
                    ]),
                    React.createElement("p", {
                        className: "text-gray-600 mb-6",
                        children: "Start selling online with a fully-featured shop that grows with your business. Ideal for retailers and product-based businesses."
                    }),
                    React.createElement("ul", {
                        className: "space-y-3 mb-8"
                    }, [
                        "Everything from Business Website",
                        "Full e-commerce functionality",
                        "Secure checkout system",
                        "Easy-to-use CMS",
                        "Inventory management",
                        "Payment gateway integration",
                        "Order management & tracking",
                        "Customer accounts",
                        "SEO-optimized product pages",
                        "Analytics and reporting"
                    ].map((feature, index) => 
                        React.createElement("li", {
                            key: index,
                            className: "flex items-center text-gray-700"
                        }, [
                            React.createElement("span", {
                                className: "text-teal-500 mr-3 font-bold",
                                children: "✓"
                            }),
                            feature
                        ])
                    )),
                    React.createElement("div", {
                        className: "text-center"
                    }, [
                        React.createElement("button", {
                            onClick: () => setShowLeadForm({ tier: 'ecommerce', pricing: isYearly ? 'yearly' : 'monthly' }),
                            className: "w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300",
                            children: "Get Started"
                        }),
                        React.createElement("p", {
                            className: "text-xs text-gray-500 mt-2",
                            children: "12-month contract (30-day rolling at £50/month)"
                        })
                    ])
                ]),
                // Tier 3: Custom Software
                React.createElement("div", {
                    className: "bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                }, [
                    React.createElement("div", {
                        className: "text-center mb-8"
                    }, [
                        React.createElement("div", {
                            className: "text-4xl mb-4",
                            children: "⚙️"
                        }),
                        React.createElement("h3", {
                            className: "text-2xl font-bold text-gray-800 mb-2",
                            children: "Custom Software"
                        }),
                        React.createElement("div", {
                            className: "mb-4"
                        }, [
                            React.createElement("span", {
                                className: "text-4xl font-bold text-purple-500",
                                children: isYearly ? "£1,200" : "£1,500"
                            }),
                            React.createElement("span", {
                                className: "text-gray-600 ml-2",
                                children: "+ setup"
                            })
                        ]),
                        React.createElement("p", {
                            className: "text-sm text-gray-500",
                            children: isYearly ? "£100/month" : "£100/month maintenance"
                        })
                    ]),
                    React.createElement("p", {
                        className: "text-gray-600 mb-6",
                        children: "Streamline your operations with bespoke software built for your exact needs. Transform your business processes with custom solutions."
                    }),
                    React.createElement("ul", {
                        className: "space-y-3 mb-8"
                    }, [
                        "Comprehensive business analysis",
                        "Custom domain & hosting",
                        "Bespoke software development",
                        "User training & documentation",
                        "Data migration support",
                        "Multi-user access & permissions",
                        "Secure cloud hosting",
                        "Daily backups",
                        "3-month warranty",
                        "Ongoing maintenance"
                    ].map((feature, index) => 
                        React.createElement("li", {
                            key: index,
                            className: "flex items-center text-gray-700"
                        }, [
                            React.createElement("span", {
                                className: "text-purple-500 mr-3 font-bold",
                                children: "✓"
                            }),
                            feature
                        ])
                    )),
                    React.createElement("div", {
                        className: "text-center"
                    }, [
                        React.createElement("button", {
                            onClick: () => setShowLeadForm({ tier: 'custom', pricing: isYearly ? 'yearly' : 'monthly' }),
                            className: "w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300",
                            children: "Get Quote"
                        }),
                        React.createElement("p", {
                            className: "text-xs text-gray-500 mt-2",
                            children: "12-month contract (30-day rolling at £3,500+ setup)"
                        })
                    ])
                ])
            ]),
            // Footer
            React.createElement("div", {
                className: "text-center"
            }, [
                React.createElement("p", {
                    className: "text-gray-600 mb-2",
                    children: "All prices exclude VAT. Setup typically completed within 2-4 weeks for websites, 6-12 weeks for custom software."
                }),
                React.createElement("p", {
                    className: "text-sm text-gray-500 italic",
                    children: "Note: Hosting costs included - content updates charged separately"
                })
            ])
        ]),
        
        // Lead Capture Modal
        showLeadForm && React.createElement("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
            onClick: closeLeadForm
        }, [
            React.createElement("div", {
                className: "bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
                onClick: (e) => e.stopPropagation()
            }, [
                React.createElement("div", {
                    className: "flex justify-between items-center p-6 border-b"
                }, [
                    React.createElement("h2", {
                        className: "text-xl font-bold text-gray-800",
                        children: `Get Started with ${showLeadForm.tier === 'business' ? 'Business Website' : showLeadForm.tier === 'ecommerce' ? 'E-Commerce Website' : 'Custom Software'}`
                    }),
                    React.createElement("button", {
                        onClick: closeLeadForm,
                        className: "text-gray-500 hover:text-gray-700 text-2xl",
                        children: "×"
                    })
                ]),
                React.createElement("div", {
                    className: "p-6"
                }, [
                    React.createElement(LeadCaptureForm, {
                        tier: showLeadForm.tier,
                        pricingPreference: showLeadForm.pricing,
                        source: 'pricing'
                    })
                ])
            ])
        ])
    ]);
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Pricing;
} else if (typeof window !== 'undefined') {
    window.Pricing = Pricing;
}
