// Mission Component
function Mission() {
    const scrollY = React.useState(0)[0];
    
    const parallaxStyle = {
        transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
        backgroundPosition: "center -200px",
        backgroundSize: "140% auto",
        top: "-100px",
        height: "calc(100% + 200px)"
    };

    return React.createElement("section", {
        className: "py-20 px-4 bg-white relative overflow-hidden"
    }, [
        React.createElement("div", {
            className: "absolute inset-0 bg-cover opacity-30",
            style: {
                backgroundImage: "url(https://i.imgur.com/BK58wVg.jpeg)",
                ...parallaxStyle
            }
        }),
        React.createElement("div", {
            className: "max-w-4xl mx-auto text-center relative z-10"
        }, [
            React.createElement("h2", {
                className: "text-4xl font-bold text-pink-500 mb-8 hover:text-pink-600 transition-colors",
                children: "Our Mission"
            }),
            React.createElement("p", {
                className: "text-lg text-gray-700 leading-relaxed mb-6 hover:text-gray-900 transition-colors backdrop-blur-sm bg-white/80 p-6 rounded-lg",
                children: "At SaaSquatch, we believe the best software solutions aren't just built—they're unearthed. Like the elusive Sasquatch, your company's potential is out there, lurking in the foggy wilderness of the internet."
            }),
            React.createElement("p", {
                className: "text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors backdrop-blur-sm bg-white/80 p-6 rounded-lg",
                children: `We exist to turn your "Wait, does this even work?" into "Holy $#!%, we're scaling!" Because let's face it: building a SaaS is like trying to assemble IKEA furniture in the dark. We bring the flashlight (and the meatballs).`
            })
        ])
    ]);
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Mission;
} else if (typeof window !== 'undefined') {
    window.Mission = Mission;
}
