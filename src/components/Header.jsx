const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl relative overflow-hidden">
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Main Event Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 tracking-wide">
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
            Maha Arogya Shibir
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-blue-100">
            Chalisgaon
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-blue-100 text-lg sm:text-xl mb-8 font-light tracking-wide">
          Healthcare Registration Portal
        </p>
        
        {/* Enhanced Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20 sm:w-32"></div>
          <div className="mx-6">
            <div className="w-3 h-3 bg-gradient-to-r from-white to-blue-100 rounded-full shadow-lg animate-pulse"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20 sm:w-32"></div>
        </div>
        
        {/* Enhanced Powered By */}
        <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-sm text-blue-100 font-light">Powered by</span>
          <img 
            src="/isa-logo-favicon.jpg" 
            alt="ISA Logo" 
            className="w-7 h-7 rounded-full shadow-md border-2 border-white/30"
          />
          <span className="text-sm font-semibold text-white">ISA ERP Pvt Ltd</span>
        </div>
      </div>
    </header>
  )
}

export default Header 