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
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        {/* <div className="border-t border-gray-700">
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
        </div> */}
      </div>
    </footer>
  )
}

export default Footer 