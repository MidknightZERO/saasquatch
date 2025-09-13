// Hero Component
function Hero() {
    return React.createElement("header", {
        className: "relative pt-16 pb-32 px-4"
    }, React.createElement("div", {
        className: "max-w-6xl mx-auto text-center"
    }, [
        React.createElement("img", {
            src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=2000",
            alt: "Misty forest background",
            className: "absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-20 -z-10"
        }),
        React.createElement("img", {
            src: "https://i.imgur.com/CUkiHil.png",
            alt: "SaaSquatch Logo",
            className: "w-96 mx-auto mb-8 animate-float"
        }),
        React.createElement("h1", {
            className: "text-5xl md:text-7xl font-bold text-shimmer mb-6 drop-shadow-lg scale-in leading-loose px-4 py-4",
            children: "Where Bigfoot Meets Big Ideas"
        }),
        React.createElement("p", {
            className: "text-2xl text-white mb-8 italic drop-shadow scale-in",
            children: "(And We're Definitely Real, Unlike Our Mascot's Cousin)"
        }),
        React.createElement("div", {
            className: "w-8 h-8 mx-auto text-white animate-bounce drop-shadow-lg"
        })
    ]));
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Hero;
} else if (typeof window !== 'undefined') {
    window.Hero = Hero;
}
