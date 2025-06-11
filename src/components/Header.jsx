const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl relative overflow-hidden">
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      <div className="relative max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Main Event Title */}
        <h1 className="mb-4">
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-50 bg-clip-text text-transparent tracking-tight leading-tight">
            Maha Arogya Shibir
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium mt-2 text-blue-100 tracking-wide">
            Chalisgaon
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-blue-100 text-lg sm:text-xl mb-8 font-light">
          Healthcare Registration Portal
        </p>
        
        {/* Refined Decorative Element */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
          <div className="mx-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
        </div>
        
        {/* Clean Powered By */}
        <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
          <span className="text-sm text-blue-100">Powered by</span>
          <img 
            src="/isa-logo-favicon.jpg" 
            alt="ISA Logo" 
            className="w-6 h-6 rounded-full border border-white/30"
          />
          <span className="text-sm font-medium text-white">ISA ERP Pvt Ltd</span>
        </div>
      </div>
    </header>
  )
}

export default Header 