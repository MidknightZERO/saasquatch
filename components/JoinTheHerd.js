// Join the Herd Component
function JoinTheHerd() {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission here
        console.log('Email submitted:', email);
        setEmail('');
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
                className: "bg-white text-pink-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
            }, [
                React.createElement("span", {
                    children: "Let's Talk"
                }),
                React.createElement("span", {
                    children: "✈️"
                })
            ])
        ]),
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
