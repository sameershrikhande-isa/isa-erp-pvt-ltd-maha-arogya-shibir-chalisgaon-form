const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-600 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Organization Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <img 
                  src="/isa-logo-favicon.jpg" 
                  alt="ISA Logo" 
                  className="w-10 h-10 rounded-full shadow-lg border-2 border-gray-600"
                />
                <div>
                  <p className="text-sm text-gray-400">Powered by</p>
                  <h4 className="text-lg font-semibold text-white">ISA ERP Pvt Ltd</h4>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering healthcare through innovative digital solutions and comprehensive management systems.
              </p>
            </div>
            
            {/* Event Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-300 border-b border-gray-700 pb-2">
                Health Camp
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Chalisgaon, Maharashtra
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Free Healthcare Services
                </p>
              </div>
            </div>
            
            {/* Partner Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-300 border-b border-gray-700 pb-2">
                Organized By
              </h4>
              <div className="space-y-3">
                <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600">
                  <p className="font-medium text-white text-sm">
                    Rotary Club Thane Northend
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    District 3142
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  In partnership with local healthcare providers
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <p>© {currentYear} ISA ERP Pvt Ltd</p>
                <span className="hidden sm:inline">•</span>
                <p className="hidden sm:inline">All Rights Reserved</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-xs text-gray-500">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-300">ISA ERP Pvt Ltd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 