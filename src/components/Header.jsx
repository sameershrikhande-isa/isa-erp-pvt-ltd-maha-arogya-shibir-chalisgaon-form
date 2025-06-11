const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl relative overflow-hidden">
      {/* Sophisticated Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
      <div className="absolute top-16 right-12 w-1 h-1 bg-blue-200/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 left-16 w-1.5 h-1.5 bg-white/15 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      
      <div className="relative max-w-6xl mx-auto px-8 py-16 text-center">
        {/* Healthcare Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
              <path d="M8 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
            </svg>
          </div>
        </div>
        
        {/* Main Event Title with Enhanced Typography */}
        <h1 className="mb-6">
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-white via-blue-50 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-none">
            Maha Arogya Shibir
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-5xl font-light mt-3 text-blue-100/90 tracking-widest uppercase">
            Chalisgaon
          </span>
        </h1>
        
        {/* Enhanced Subtitle with Icon */}
        <div className="mb-10">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <svg className="w-5 h-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2L3 7v11h14V7l-7-5zM10 18v-5h-4v5h4z" clipRule="evenodd" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          </div>
          <p className="text-blue-100/80 text-xl sm:text-2xl font-light tracking-wide leading-relaxed">
            Healthcare Registration Portal
          </p>
        </div>
        
        {/* Sophisticated Decorative Element */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-white/30"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-br from-white to-blue-100 rounded-full shadow-xl animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
            </div>
            <div className="w-3 h-3 bg-blue-200/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent via-white/60 to-white/30"></div>
          </div>
        </div>
        
        {/* Premium Powered By Section */}
        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/25 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-100/70 font-light tracking-wide">Powered by</span>
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/isa-logo-favicon.jpg" 
                alt="ISA Logo" 
                className="w-8 h-8 rounded-full shadow-lg border-2 border-white/40"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-white/30 rounded-full blur-sm"></div>
            </div>
            <span className="text-sm font-semibold text-white tracking-wide">ISA ERP Pvt Ltd</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 