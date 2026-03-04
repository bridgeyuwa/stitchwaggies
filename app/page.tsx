export default function HomePage() {
  return (
<div className="relative flex min-h-screen w-full flex-col">
<div className="w-full bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
<div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-12">
<header className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="size-10 text-primary flex items-center justify-center rounded-full bg-purple-50">
<span className="material-symbols-outlined text-3xl">pets</span>
</div>
<h2 className="text-primary-dark text-2xl font-bold tracking-tight font-serif">Waggies</h2>
</div>
<div className="hidden md:flex items-center gap-10">
<nav className="flex items-center gap-8">
<a className="text-gray-600 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide" href="#">Services</a>
<a className="text-gray-600 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide" href="#">About</a>
<a className="text-gray-600 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide" href="#">Relocation</a>
<a className="text-gray-600 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide" href="#">Blog</a>
</nav>
<button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 group">
<span>Get a Quote</span>
<span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
<div className="md:hidden text-primary-dark">
<span className="material-symbols-outlined text-3xl">menu</span>
</div>
</header>
</div>
</div>
<div className="w-full relative bg-surface-purple overflow-hidden">
<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-12 py-12 md:py-20 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-100 shadow-sm w-fit">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-primary-dark text-xs font-bold tracking-widest uppercase">Premium Pet Services in Abuja</span>
</div>
<h1 className="text-primary-dark text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight font-serif">
                            Luxury care for your <span className="text-primary italic">cherished</span> companions.
                        </h1>
<p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                            From international relocation to 5-star boarding suites. We provide world-class veterinary and grooming services tailored for the discerning pet owner.
                        </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="flex items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-primary-dark text-white text-base font-semibold transition-all shadow-glow hover:translate-y-[-2px]">
                                Book Appointment
                            </button>
<button className="flex items-center justify-center rounded-full h-14 px-8 bg-white border border-purple-200 hover:border-primary text-primary-dark text-base font-medium transition-all hover:bg-purple-50 group">
<span className="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform">play_circle</span>
                                View Our Facility
                            </button>
</div>
<div className="flex items-center gap-4 mt-6 text-sm text-gray-500 font-medium">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCuDhflmMnhP4K7ygILf45nJOdfIh2188OhtVrcwkmTZCVhknq5BWgG1tZvYMoWlVTpgF3jAwmioTTZqP5kvPpIPAVItN0Yio6RcxIY8aaWazhKgWUAxtLz3xlEjm2cyAe_-MbplUBjKKAwzb7czV2tbi31sB5gVMFaGz365aIlTwPWo07swBrW0I7Q48gcepv0Z2VeA0jMfDCl7KR5VIw4FnNEPqU-8hA18WEhSYX7DcU6G3ETJghkX3QkBvQlaCdrRKFcnyZGKFxW\")' }}></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuA-IqUeQXBeZ2KXtATH2ibHmmaZjwzqUmwvnoZAbhkuTXb8rLvRD8nQk6ge9yF0KBwzgecH5x9Z9fTGmMDqaEJVDXyzUmrWHgfqq1-NmM-JA4Ip7rxyc7pXjZOjBDT5lpnVp2NTWaTTeM6D1YugvJVsLDu1AmHuH6WSSmpzyAyInmIC6-_IK6QkvcD9f-EbC7UUSBmW1MQGtChyhBAWiYmMiJ0lrPSSBOojhIkoRqjfcUwxXSjVC33QPUrjh9RVT36DuJzd0_gRYsMW\")' }}></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuArQhJ0eNuSQYTimF3equpg93EPTrCMKSLtXmLdis8sZf4zhIc4xC1qFMqN5QFKodFc7s-wsNncodjfgVwqFVty507GOu1lfxFyQba7z5VIHEVxvYfI4AMBeRJlkL8hrsHaWz8L-sPXjsYErF7LAA1tkFYXkYcqMJ42Zs6zVMTv6cftGzk5EAOf2a29WVIGqK6uMDFZW2Eia_kK5bwbg16qMZqJANlJ74kM2FMHMOpO6-R42-aTnxl79GxuinCKFjxfYtm_txLCThxq\")' }}></div>
</div>
<p>Trusted by <span className="text-primary font-bold">1,000+</span> Abuja pet parents</p>
</div>
</div>
<div className="relative order-1 lg:order-2 h-[500px] lg:h-[650px]">
<div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-10 rounded-[2rem] rotate-3 transform scale-95"></div>
<div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
<div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCg06Bi49W8OMiRQk8GDEMBB8tclbr3rcHtbMyFmkJ6cnbL5-KBjfK51ta8-j6qPC0C5Gg01ZcbDhIiLFkitcXTjiPVoIwzIke-Olo4VQ2aYAzZ1Y3uNEhGJf_Li1hXLnL3txOAr6QQAKYwLejPOzWqcPv_ADzNa0GSKKmvilc9LGMi_3C_NDQFYS6LGyUYXTdIMuQeLGQDRi33grF1n_1oR-K_CJ9wPqY3P1mGTAPCUhG03NCdyaiZFe8FdF-FXU7z-OCW75rh93Qu\")' }}>
<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl text-white backdrop-blur-md border-white/20">
<div className="flex justify-between items-end">
<div>
<p className="text-secondary font-serif italic text-lg mb-1">Featured Service</p>
<h3 className="text-xl font-bold">VIP Relocation Package</h3>
</div>
<div className="bg-white/20 p-2 rounded-full">
<span className="material-symbols-outlined">arrow_outward</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center gap-1 animate-bounce duration-[3000ms]">
<span className="material-symbols-outlined text-secondary text-4xl">verified</span>
<span className="text-xs font-bold text-primary-dark uppercase tracking-wider">Certified</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-full bg-white border-b border-purple-50 py-10">
<div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-gray-400 font-serif text-lg italic whitespace-nowrap">Partners in Excellence</p>
<div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 w-full">
<div className="flex items-center gap-2 text-primary-dark font-bold text-xl"><span className="material-symbols-outlined text-3xl">flight_takeoff</span> SkyPets</div>
<div className="flex items-center gap-2 text-primary-dark font-bold text-xl"><span className="material-symbols-outlined text-3xl">health_and_safety</span> VetAssoc</div>
<div className="flex items-center gap-2 text-primary-dark font-bold text-xl"><span className="material-symbols-outlined text-3xl">verified</span> TopTier</div>
<div className="flex items-center gap-2 text-primary-dark font-bold text-xl"><span className="material-symbols-outlined text-3xl">pets</span> PetAlliance</div>
</div>
</div>
</div>
<div className="w-full bg-surface py-20">
<div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Our Expertise</span>
<h2 className="text-primary-dark text-4xl md:text-5xl font-bold font-serif mb-6">Curated Services for Your Pet</h2>
<p className="text-gray-500 text-lg">We offer a comprehensive suite of premium services designed to meet every need of your furry companion with elegance and care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 border border-purple-50">
<div className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuD8zMeLP6ESzVNlEiUIMeqNo39rxSo0QWsdUUPiub856XZD95tgaC9TVYlM5InAGjQF5PBkOieuBiJ2FYOjI8Y7mAz3_5bVSzQ9Q-W4nKTuqrpH_e_V0gh2mznDCDB66JIruUaeX7g4-pF9lQUw9xAqL-ijY2fdaAaAeW_nJ93dvvjroQShmAIefL-FlJGH_2f4x7Tiy67wVdeChUVSQ4xOdWr9ezWlY3DB_Q0spNNoCnO-FbpB9o3e-aMrSGk1wci_fRiv-MzgZAZd\")' }}>
<div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/0 transition-colors"></div>
</div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-sm">
<span className="material-symbols-outlined block">flight</span>
</div>
<div className="p-8">
<h3 className="text-primary-dark text-2xl font-bold font-serif mb-3">Pet Relocation</h3>
<p className="text-gray-500 mb-6 line-clamp-2">Seamless import/export handling globally. We navigate the complex paperwork so you don't have to.</p>
<a className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase group-hover:text-primary-light transition-colors" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 border border-purple-50">
<div className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuA-hFLGUTZfR4o6aEmNZblS2r51j254QMcrSmpvNX3gqf_PRrK4s4gMZDlNMovWT6w3T_GpetAuHCroSsYBK9jakgwd2tcq-ncK3OC3Fa6axI61kTa1IUJICwA8mYBa_rhA2Dh3TV4uIXJb1O0Iw2sQ6qnHppigFgxpAQsDbWg5tzx-r9sNF_2M5pObOb8oTnakgOtF80OU4vK6ClwuKgdFGRmhd6aGpTjFzvD15SopA7DUGZ8JNDxSSDPkN9SlBhE41EDqGmI6Axfm\")' }}>
<div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/0 transition-colors"></div>
</div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-sm">
<span className="material-symbols-outlined block">king_bed</span>
</div>
<div className="p-8">
<h3 className="text-primary-dark text-2xl font-bold font-serif mb-3">Luxury Boarding</h3>
<p className="text-gray-500 mb-6 line-clamp-2">Climate-controlled suites &amp; 24/7 care. Your pet's opulent home away from home.</p>
<a className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase group-hover:text-primary-light transition-colors" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 border border-purple-50">
<div className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCUV3DoqI5ledi3PKkcPvhJNfH7WGrXvgM89jbCbfWOs-6gpvL76xviEXOD5-lDeVYqXZDU3phSKjrBMt4eA96Kgb3qh8mSJkHk4LMnafp5hZ55MTXN7si0Oj1LNBygxjHc4UZ35YrJAkFZNhTvhO9MSvKKF46jLSY757IKPuX96P94JZZPqhL1crs1p1ZDzZVPCFzN0dqUmc8aJzqnRKurXcOAhokzl369Xaqt-8pc4fDFrH6VPwXgsw2EL_H9_ZBubtHVufAAr57v\")' }}>
<div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/0 transition-colors"></div>
</div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-sm">
<span className="material-symbols-outlined block">content_cut</span>
</div>
<div className="p-8">
<h3 className="text-primary-dark text-2xl font-bold font-serif mb-3">Grooming Spa</h3>
<p className="text-gray-500 mb-6 line-clamp-2">Top-tier styling and hygiene services. We make your pet look and feel their absolute best.</p>
<a className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase group-hover:text-primary-light transition-colors" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 border border-purple-50">
<div className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuC22jvIEiXh0ddEB6nfgwXx20P-LQMxxDtFS9e8K6koYJnwnKPrcogsv5rCYmp0I1VGA18N8e_EyCj-MkidqdDVNUnIk2RLdnjokhlGjY6TuWVnhoZIKFZA3PNHINQutrfpS_7k_qOV3fCSSozwyGsE7o8cY_PkOW1FadTmEyT3aRGiDtq4pDdf_jykXGuLExfT-thS2BBiLPExrYkf97CHk75TvvrDIRBex3AdOKKx2B4xCkI7AtUZN8wZFI10T10f8yPZ8gqtz9qr\")' }}>
<div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/0 transition-colors"></div>
</div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-sm">
<span className="material-symbols-outlined block">medical_services</span>
</div>
<div className="p-8">
<h3 className="text-primary-dark text-2xl font-bold font-serif mb-3">Vet Services</h3>
<p className="text-gray-500 mb-6 line-clamp-2">Preventative care &amp; health checks. Experienced vets on-site for complete peace of mind.</p>
<a className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase group-hover:text-primary-light transition-colors" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 border border-purple-50">
<div className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBmd8xXxW_oQhjGyRngta_b_G0TdAztFfgHUHcn5btMzOIh3q3eQk9tbqth3qPo9CWbuMYp8WpoWcpQM_5jT7uiC9VRtOxUAeYt6LloE-jFSki2BUrXQqQiGy3nTIVvjhj66UOsmWcxUq5Lz30b-5vlokWvpK0FUB897pMCrrNFKH7Tmc9VExw20xfsBZd8dgqysHE0Ig3d3NLp0P9ZGwWT0ZoVW-g6E7l50ZAoj9EAGz6RpKd8IvyX6y5dQBM0AGt2upSp4a0vHE7J\")' }}>
<div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/0 transition-colors"></div>
</div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-sm">
<span className="material-symbols-outlined block">school</span>
</div>
<div className="p-8">
<h3 className="text-primary-dark text-2xl font-bold font-serif mb-3">Dog Training</h3>
<p className="text-gray-500 mb-6 line-clamp-2">Obedience and behavioral training using positive reinforcement techniques.</p>
<a className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase group-hover:text-primary-light transition-colors" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 border border-purple-50">
<div className="h-64 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDTHx-2eTZ7bwYucOWHLo7yqtzUxvxjRdAb4ZpHiWevyYa1KvptQ3f-zghgc_4vKzVAfs5vVlPV2rgs7kI2FCajkWDLoMdjPapYSNyqkdN0kZsErZv9eix2rZBmjWcDSPL6cGjQ_-2weGgk7JKU6Xd6gpDTPlWDn49qUugijUJdlSwBRKd42KKg_9KKij4oO59SWhw0jGlM3Ehw32RTSVkI9bQtSRXzJ1qVFkmRnmqBkOnCjPsogYNb93pTrK6HhXijRWCk7Y3EebHF\")' }}>
<div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/0 transition-colors"></div>
</div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-full shadow-sm">
<span className="material-symbols-outlined block">qr_code</span>
</div>
<div className="p-8">
<h3 className="text-primary-dark text-2xl font-bold font-serif mb-3">Microchipping</h3>
<p className="text-gray-500 mb-6 line-clamp-2">Secure identification for your pets. Quick, painless, and essential for international travel.</p>
<a className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase group-hover:text-primary-light transition-colors" href="#">
                                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="w-full bg-primary-dark relative overflow-hidden text-white py-24">
<div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#E8D5B5 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-12 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex flex-col gap-8 flex-1">
<div>
<h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Waggies Difference</h2>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                                Where veterinary expertise meets <span className="text-secondary italic">uncompromising</span> luxury.
                            </h1>
</div>
<p className="text-purple-100 text-lg leading-relaxed max-w-xl font-light">
                            We combine expert medical knowledge with a passion for animal welfare to provide world-class care right here in Abuja. Our facility is designed for comfort, safety, and joy.
                        </p>
<div className="grid gap-6 mt-4">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<div>
<h3 className="text-xl font-bold font-serif text-white">Expert Supervision</h3>
<p className="text-purple-200 text-sm mt-1 leading-relaxed">Lead by qualified veterinarians with years of experience ensuring safety first.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-2xl">schedule</span>
</div>
<div>
<h3 className="text-xl font-bold font-serif text-white">24/7 Concierge Care</h3>
<p className="text-purple-200 text-sm mt-1 leading-relaxed">Round-the-clock monitoring for boarders and critical cases. We never sleep so they can.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
<div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-2xl">public</span>
</div>
<div>
<h3 className="text-xl font-bold font-serif text-white">Global Standards</h3>
<p className="text-purple-200 text-sm mt-1 leading-relaxed">Strict adherence to international pet travel and hygiene regulations.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full relative h-[600px] hidden lg:block">
<div className="absolute top-0 right-0 w-2/3 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-500 z-10">
<div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCsSINFHfWbj8j2FYPWRVvYqy__gmZgJsuqS1ouM0KEMvj44vK6KrbOAsJSGxJbMueC4dzWqfJTfXqwiVJm7Dx3Xls_wMLUzEuFl3umTIHtfoXxNpZbar9Uq1CjpBNP1iaYvfdl8yuBbqjW9wpxF978Jg-dqZP7Z_IaIwcGFqjC3T6C2j4aAR16Ir56PoOf5OdXo4X1sj6sSJvIdTtnOvT2SWzuYO6xu1MJokkkuRmp8wo96z1HmnBbNRPNolv6fhc-ppayergVRiV9\")' }}></div>
</div>
<div className="absolute bottom-10 left-0 w-2/3 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform -rotate-3 hover:rotate-0 transition-all duration-500 z-20">
<div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDb4wF9rkW0Fxie_svZ2So-4tmgxeSoS5aBtcS8a-ujo4N33b8TPGeAq7Im9G1tQoMHf5HSdeqiuzy-81-fSgu7oaDpOprNI60P7vr6pp_u-9DQPC0Bs4KiOmWQoL5pUOH5FwjGwW36yL3IVrJkXipNyST_cAkL1J2cvI1M9cgnJLUKXAbaDm1mdm04T2XJnL7aKAU5Mp9sOzvVK_oyqN_6oH7vrybLpRrW8ngf97fR4fRFJ2p9aZQCtXu_3aO5zxG_535S1n07t3uD\")' }}></div>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary-dark p-6 rounded-full shadow-2xl z-30 flex flex-col items-center justify-center w-40 h-40">
<span className="text-4xl font-bold font-serif">100%</span>
<span className="text-xs uppercase tracking-widest font-bold">Love</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-full bg-surface-purple py-24">
<div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-12">
<div className="text-center mb-16">
<span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Testimonials</span>
<h2 className="text-primary-dark text-4xl font-bold font-serif mb-4">Happy Tails &amp; Happy Parents</h2>
<p className="text-gray-500 max-w-2xl mx-auto">Don't just take our word for it. See what the Waggies community has to say.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col gap-6 relative">
<span className="absolute top-6 right-8 text-6xl text-purple-100 font-serif leading-none">"</span>
<div className="flex gap-1 text-yellow-400">
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
</div>
<p className="text-gray-600 italic leading-relaxed z-10 relative">"Waggies handled my dog's relocation to London perfectly. The team was communicative and handled all the complex paperwork. Highly recommended for peace of mind!"</p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-purple-50">
<div className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-purple-100" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCuDhflmMnhP4K7ygILf45nJOdfIh2188OhtVrcwkmTZCVhknq5BWgG1tZvYMoWlVTpgF3jAwmioTTZqP5kvPpIPAVItN0Yio6RcxIY8aaWazhKgWUAxtLz3xlEjm2cyAe_-MbplUBjKKAwzb7czV2tbi31sB5gVMFaGz365aIlTwPWo07swBrW0I7Q48gcepv0Z2VeA0jMfDCl7KR5VIw4FnNEPqU-8hA18WEhSYX7DcU6G3ETJghkX3QkBvQlaCdrRKFcnyZGKFxW\")' }}></div>
<div>
<p className="text-sm font-bold text-primary-dark">Chioma A.</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">Relocation Client</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col gap-6 relative">
<span className="absolute top-6 right-8 text-6xl text-purple-100 font-serif leading-none">"</span>
<div className="flex gap-1 text-yellow-400">
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
</div>
<p className="text-gray-600 italic leading-relaxed z-10 relative">"The grooming spa is top notch. My poodle, Bella, always comes back smelling amazing and looking like a show dog. The staff handles her with such gentle care."</p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-purple-50">
<div className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-purple-100" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuA-IqUeQXBeZ2KXtATH2ibHmmaZjwzqUmwvnoZAbhkuTXb8rLvRD8nQk6ge9yF0KBwzgecH5x9Z9fTGmMDqaEJVDXyzUmrWHgfqq1-NmM-JA4Ip7rxyc7pXjZOjBDT5lpnVp2NTWaTTeM6D1YugvJVsLDu1AmHuH6WSSmpzyAyInmIC6-_IK6QkvcD9f-EbC7UUSBmW1MQGtChyhBAWiYmMiJ0lrPSSBOojhIkoRqjfcUwxXSjVC33QPUrjh9RVT36DuJzd0_gRYsMW\")' }}></div>
<div>
<p className="text-sm font-bold text-primary-dark">Emmanuel K.</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">Grooming Client</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col gap-6 relative">
<span className="absolute top-6 right-8 text-6xl text-purple-100 font-serif leading-none">"</span>
<div className="flex gap-1 text-yellow-400">
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
<span className="material-symbols-outlined text-base">star</span>
</div>
<p className="text-gray-600 italic leading-relaxed z-10 relative">"Finally a place in Abuja that I trust with my pets when I travel. The daily video updates gave me so much comfort. It's truly a luxury experience for them."</p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-purple-50">
<div className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-purple-100" style={{ backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuArQhJ0eNuSQYTimF3equpg93EPTrCMKSLtXmLdis8sZf4zhIc4xC1qFMqN5QFKodFc7s-wsNncodjfgVwqFVty507GOu1lfxFyQba7z5VIHEVxvYfI4AMBeRJlkL8hrsHaWz8L-sPXjsYErF7LAA1tkFYXkYcqMJ42Zs6zVMTv6cftGzk5EAOf2a29WVIGqK6uMDFZW2Eia_kK5bwbg16qMZqJANlJ74kM2FMHMOpO6-R42-aTnxl79GxuinCKFjxfYtm_txLCThxq\")' }}></div>
<div>
<p className="text-sm font-bold text-primary-dark">Sarah O.</p>
<p className="text-xs text-gray-400 uppercase tracking-wide">Boarding Client</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full py-16 px-4 bg-white">
<div className="max-w-[1280px] mx-auto bg-gradient-to-r from-primary to-[#501c75] rounded-[2.5rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
<div className="relative z-10 max-w-xl">
<h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">Ready to pamper your pet?</h2>
<p className="text-purple-100 font-medium text-lg leading-relaxed">Book a service today or get a free quote for your pet's specific needs. Excellence awaits.</p>
</div>
<div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
<button className="bg-secondary hover:bg-[#dcc095] text-primary-dark px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center">Get a Free Quote</button>
<button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all w-full sm:w-auto text-center backdrop-blur-sm">Contact Us</button>
</div>
</div>
</div>
<footer className="w-full bg-surface-purple text-primary-dark pt-20 pb-10 border-t border-purple-100">
<div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-purple-200 pb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined text-4xl">pets</span>
<span className="text-2xl font-bold text-primary-dark font-serif">Waggies</span>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Premium pet care services in Abuja. We are dedicated to the health, happiness, and safety of your furry family members.
                        </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-purple-100" href="#"><span className="material-symbols-outlined text-xl">thumb_up</span></a>
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-purple-100" href="#"><span className="material-symbols-outlined text-xl">photo_camera</span></a>
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-purple-100" href="#"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
</div>
</div>
<div>
<h3 className="font-bold text-lg mb-6 font-serif">Services</h3>
<ul className="flex flex-col gap-3 text-sm text-gray-600">
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Pet Relocation</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Luxury Boarding</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Grooming Spa</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Vet Services</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Dog Training</a></li>
</ul>
</div>
<div>
<h3 className="font-bold text-lg mb-6 font-serif">Company</h3>
<ul className="flex flex-col gap-3 text-sm text-gray-600">
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>About Us</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Careers</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Blog</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Privacy Policy</a></li>
<li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>Terms of Service</a></li>
</ul>
</div>
<div>
<h3 className="font-bold text-lg mb-6 font-serif">Contact</h3>
<ul className="flex flex-col gap-4 text-sm text-gray-600">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl">location_on</span>
<span>123 Wuse II, Abuja, Nigeria</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">call</span>
<span className="font-semibold">+234 800 WAGGIES</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">mail</span>
<span>hello@waggies.ng</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
<p>© 2025 Waggies Pet Services. All rights reserved.</p>
<p className="flex items-center gap-1">Designed with <span className="text-red-400 text-base">♥</span> for pet lovers.</p>
</div>
</div>
</footer>
<div className="fixed bottom-8 right-8 z-50">
<button className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 ring-4 ring-white">
<span className="material-symbols-outlined text-3xl">chat</span>
</button>
</div>
</div>
  );
}
