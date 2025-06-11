const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        {/* Main Event Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          Maha Arogya Shibir, Chalisgaon
        </h1>
        
        {/* Subtitle */}
        <p className="text-blue-100 text-lg mb-6">
          Healthcare Registration Portal
        </p>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-32"></div>
          <div className="mx-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-32"></div>
        </div>
        
        {/* Powered By */}
        <div className="flex items-center justify-center space-x-2 text-blue-200">
          <span className="text-sm">Powered by</span>
          <img 
            src="/isa-logo-favicon.jpg" 
            alt="ISA Logo" 
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm font-medium">ISA ERP Pvt Ltd</span>
        </div>
      </div>
    </header>
  )
}

export default Header 