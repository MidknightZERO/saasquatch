// Lead Capture Form Component
function LeadCaptureForm({ tier, pricingPreference, source = 'pricing' }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        business_name: '',
        description: '',
        interested_tier: tier || '',
        pricing_preference: pricingPreference || 'monthly',
        source: source
    });
    
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null); // 'success', 'error', null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/.netlify/functions/capture-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    business_name: '',
                    description: '',
                    interested_tier: tier || '',
                    pricing_preference: pricingPreference || 'monthly',
                    source: source
                });
            } else {
                setSubmitStatus('error');
                console.error('Error:', result.error);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return React.createElement("div", {
        className: "bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto"
    }, [
        React.createElement("h3", {
            className: "text-2xl font-bold text-gray-800 mb-6 text-center",
            children: "Get Started Today"
        }),
        
        React.createElement("form", {
            onSubmit: handleSubmit,
            className: "space-y-4"
        }, [
            // Name
            React.createElement("div", {}, [
                React.createElement("label", {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Full Name *"
                }),
                React.createElement("input", {
                    type: "text",
                    id: "name",
                    name: "name",
                    value: formData.name,
                    onChange: handleInputChange,
                    required: true,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                    placeholder: "Enter your full name"
                })
            ]),
            
            // Email
            React.createElement("div", {}, [
                React.createElement("label", {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Email Address *"
                }),
                React.createElement("input", {
                    type: "email",
                    id: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleInputChange,
                    required: true,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                    placeholder: "Enter your email address"
                })
            ]),
            
            // Phone
            React.createElement("div", {}, [
                React.createElement("label", {
                    htmlFor: "phone",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Phone Number"
                }),
                React.createElement("input", {
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    value: formData.phone,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                    placeholder: "Enter your phone number"
                })
            ]),
            
            // Business Name
            React.createElement("div", {}, [
                React.createElement("label", {
                    htmlFor: "business_name",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Business Name"
                }),
                React.createElement("input", {
                    type: "text",
                    id: "business_name",
                    name: "business_name",
                    value: formData.business_name,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                    placeholder: "Enter your business name"
                })
            ]),
            
            // Description
            React.createElement("div", {}, [
                React.createElement("label", {
                    htmlFor: "description",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Tell us about your project"
                }),
                React.createElement("textarea", {
                    id: "description",
                    name: "description",
                    value: formData.description,
                    onChange: handleInputChange,
                    rows: 3,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent",
                    placeholder: "Briefly describe what you need..."
                })
            ]),
            
            // Submit Button
            React.createElement("button", {
                type: "submit",
                disabled: isSubmitting,
                className: `w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-teal-500 hover:bg-teal-600 text-white hover:shadow-lg'
                }`,
                children: isSubmitting ? 'Submitting...' : 'Get Started'
            })
        ]),
        
        // Status Messages
        submitStatus === 'success' && React.createElement("div", {
            className: "mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center",
            children: "✅ Thank you! We'll be in touch soon."
        }),
        
        submitStatus === 'error' && React.createElement("div", {
            className: "mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center",
            children: "❌ Something went wrong. Please try again."
        }),
        
        // Privacy Note
        React.createElement("p", {
            className: "text-xs text-gray-500 mt-4 text-center",
            children: "We respect your privacy and will never share your information."
        })
    ]);
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LeadCaptureForm;
} else if (typeof window !== 'undefined') {
    window.LeadCaptureForm = LeadCaptureForm;
}
