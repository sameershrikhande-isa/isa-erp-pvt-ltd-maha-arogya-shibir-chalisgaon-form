const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="text-center">
          {/* Simple ISA ERP Credit */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
            <span>Powered by</span>
            <img 
              src="/isa-logo-favicon.jpg" 
              alt="ISA Logo" 
              className="w-5 h-5 rounded-full opacity-80"
            />
            <span>ISA ERP Pvt Ltd</span>
            <span>•</span>
            <span>© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 