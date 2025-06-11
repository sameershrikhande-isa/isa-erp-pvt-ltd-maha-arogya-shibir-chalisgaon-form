const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl relative overflow-hidden">
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 py-8 text-center">
        {/* Main Event Title */}
        <h1 className="mb-3">
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-50 bg-clip-text text-transparent tracking-tight leading-tight">
            Maha Arogya Shibir
          </span>
          <span className="block text-xl sm:text-2xl lg:text-3xl font-medium mt-1 text-blue-100 tracking-wide">
            Chalisgaon
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-blue-100 text-base sm:text-lg mb-4 font-light">
          Healthcare Registration Portal
        </p>
        
        {/* Refined Decorative Element */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20"></div>
          <div className="mx-3">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-20"></div>
        </div>
        
        {/* Rotary Club Information */}
        <p className="text-blue-200 text-sm sm:text-base font-medium">
          Rotary Club Thane Northend (3142)
        </p>
      </div>
    </header>
  )
}

export default Header 