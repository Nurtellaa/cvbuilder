
const Testimonial = () => {

    const cardsData = [
    {
        image: 'https://images.unsplash.com/photo-1655435440223-75b23d0805e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Ethan Park',
        role: 'Senior Product Manager',
        company: 'TechFlow Inc.',
        quote: 'From blank page to interview call in 48 hours. The AI suggestions helped me highlight achievements I\'d overlooked for years.',
    },
    {
        image: 'https://images.unsplash.com/photo-1594311418510-ee5485be4f73?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Valentina Morales',
        role: 'Marketing Director',
        company: 'BrandVision Co.',
        quote: 'After 6 months of rejections, I landed 3 interviews in 2 weeks. The ATS optimization feature was the game-changer I needed.',
    },
    {
        image: 'https://images.unsplash.com/photo-1587572070314-9d681a93f04f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Noah Bennett',
        role: 'Software Engineer',
        company: 'CloudSync',
        quote: 'The technical resume templates are brilliant. Recruiters actually commented on how clean and professional my CV looked.',
    },
    {
        image: 'https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Anika Iyer',
        role: 'Financial Analyst',
        company: 'Global Finance Corp',
        quote: 'Transitioning careers seemed impossible until I used the industry-specific phrasing suggestions. Got my dream role!',
    },
    {
        image: 'https://images.unsplash.com/photo-1580483046931-aaba29b81601?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Mila Novak',
        role: 'UX Designer',
        company: 'CreativeMinds Studio',
        quote: 'The visual templates made my portfolio and resume cohesive. Finally got noticed by top design agencies.',
    },
    {
        image: 'https://images.unsplash.com/photo-1708805553616-0b17c2c3e195?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Hassan El-Amin',
        role: 'Data Scientist',
        company: 'Analytics Pro',
        quote: 'Quantifying my achievements with their metrics guidance increased my interview callback rate by 300%.',
    }
    ];


    const CreateCard = ({ card }) => (
        <div className="group p-6 bg-white rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 w-80 shrink-0 mx-3 hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-5">
                <img
                    className="size-12 rounded-full border-2 border-white shadow-md object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    src={card.image}
                    alt={card.name}
                    />
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900">{card.name}</h4>
                        <svg className="fill-teal-500 flex-shrink-0" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <p className="text-sm text-teal-700 font-medium">{card.role}</p>
                    <p className="text-xs text-slate-500">{card.company}</p>
                </div>
            </div>
            
            <div className="relative">
                <div className="absolute -top-4 -left-2 text-4xl text-teal-100 font-serif opacity-60">"</div>
                <p className="text-slate-700 leading-relaxed pl-4 pt-2 italic">{card.quote}</p>
            </div>
            
            <div className="flex gap-1 mt-5">
                {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-amber-400">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                ))}
            </div>
        </div>
    );


  return (
    <>
    <div id='testimonials' className='flex flex-col items-center my-28 scroll-mt-20'>
        <div className="text-center max-w-3xl mx-auto px-4 mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 bg-gradient-to-r from-teal-50 to-teal-100 rounded-full px-5 py-2.5 mb-6 border border-teal-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <span>Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Real Results from <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Dream Job Landers</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
                Don't just take our word for it—see how professionals transformed their careers and landed positions at top companies with CVBuilder.
            </p>
        </div>

        {/* First Marquee Row */}
        <div className="marquee-row w-full overflow-hidden relative py-4">
            <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-white via-white to-transparent"></div>
            <div className="marquee-inner flex transform-gpu gap-6 py-6">
                {[...cardsData, ...cardsData].map((card, index) => (
                    <CreateCard key={index} card={card} />
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-white via-white to-transparent"></div>
        </div>

        {/* Second Marquee Row */}
        <div className="marquee-row w-full overflow-hidden relative py-4 mt-8">
            <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-white via-white to-transparent"></div>
            <div className="marquee-inner marquee-reverse flex transform-gpu gap-6 py-6">
                {[...cardsData.slice(2), ...cardsData.slice(2)].map((card, index) => (
                    <CreateCard key={index} card={card} />
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-white via-white to-transparent"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-50/50 to-cyan-50/50 rounded-2xl border border-teal-100 p-8 md:p-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">94%</div>
                    <p className="text-sm text-slate-600 font-medium">Interview Success Rate</p>
                </div>
                <div>
                    <div className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">2.3x</div>
                    <p className="text-sm text-slate-600 font-medium">More Callbacks</p>
                </div>
                <div>
                    <div className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">48h</div>
                    <p className="text-sm text-slate-600 font-medium">Average to Interview</p>
                </div>
                <div>
                    <div className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">10K+</div>
                    <p className="text-sm text-slate-600 font-medium">Dream Jobs Landed</p>
                </div>
            </div>
        </div>
    </div>

    <style>{`
        @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }

        .marquee-inner {
            animation: marqueeScroll 40s linear infinite;
            width: fit-content;
        }

        .marquee-reverse {
            animation-direction: reverse;
            animation-duration: 35s;
        }

        .marquee-row:hover .marquee-inner {
            animation-play-state: paused;
        }
    `}</style>
    </>
  )
}

export default Testimonial
