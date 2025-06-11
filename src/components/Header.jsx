const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-800/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          {/* Logo and Organization */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/isa-logo-favicon.jpg" 
              alt="ISA Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg border-2 border-white/20"
            />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-100">
                ISA ERP Pvt Ltd
              </h3>
              <p className="text-sm text-blue-200">Healthcare Management</p>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="block">Maha Arogya Shibir</span>
            <span className="block text-blue-200 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium mt-1">
              Chalisgaon
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Healthcare Registration Portal
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-32"></div>
            <div className="mx-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-32"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 