// Join the Herd Component
function JoinTheHerd() {
    const [email, setEmail] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

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
                body: JSON.stringify({
                    email: email,
                    source: 'email_signup',
                    interested_tier: 'newsletter'
                })
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setEmail('');
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

    return React.createElement("section", {
        className: "py-20 px-4 bg-gradient-to-r from-pink-500 to-teal-500"
    }, React.createElement("div", {
        className: "max-w-4xl mx-auto text-center"
    }, [
        React.createElement("h2", {
            className: "text-4xl font-bold text-white mb-6",
            children: "Join the Herd"
        }),
        React.createElement("p", {
            className: "text-xl text-white mb-8",
            children: "Ready to stop chasing shadows? Let's build something your competitors will swear doesn't exist... until it's eating their lunch."
        }),
        React.createElement("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        }, [
            React.createElement("input", {
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "Enter your email",
                className: "px-6 py-3 rounded-lg text-gray-800 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white",
                required: true
            }),
            React.createElement("button", {
                type: "submit",
                disabled: isSubmitting,
                className: `bg-white text-pink-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                }`
            }, [
                React.createElement("span", {
                    children: isSubmitting ? 'Submitting...' : "Let's Talk"
                }),
                React.createElement("span", {
                    children: "✈️"
                })
            ])
        ]),
        
        // Status Messages
        submitStatus === 'success' && React.createElement("div", {
            className: "mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center",
            children: "✅ Thanks for joining! We'll be in touch soon."
        }),
        
        submitStatus === 'error' && React.createElement("div", {
            className: "mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center",
            children: "❌ Something went wrong. Please try again."
        }),
        
        React.createElement("p", {
            className: "text-white text-sm italic",
            children: "P.S. We also accept payment in trail mix and Yeti sighting coordinates."
        })
    ]));
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = JoinTheHerd;
} else if (typeof window !== 'undefined') {
    window.JoinTheHerd = JoinTheHerd;
}
