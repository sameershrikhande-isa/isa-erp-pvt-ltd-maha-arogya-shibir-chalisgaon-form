const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="text-center space-y-3">
          {/* Main Organization */}
          <h4 className="text-lg font-semibold text-white">
            Rotary Club Thane Northend (3142)
          </h4>
          
          {/* Event Details */}
          <p className="text-gray-300 text-sm">
            Maha Arogya Shibir • Chalisgaon • Free Healthcare Services
          </p>
          
          {/* Subtle ISA ERP Credit */}
          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
              <span>Powered by</span>
              <img 
                src="/isa-logo-favicon.jpg" 
                alt="ISA Logo" 
                className="w-4 h-4 rounded-full opacity-70"
              />
              <span>ISA ERP Pvt Ltd</span>
              <span>•</span>
              <span>© {currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 