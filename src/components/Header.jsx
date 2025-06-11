const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl relative overflow-hidden">
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-8">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden text-center">
          {/* Main Event Title */}
          <h1 className="mb-3">
            <span className="block text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-blue-50 bg-clip-text text-transparent tracking-tight leading-tight">
              Maha Arogya Shibir
            </span>
            <span className="block text-xl sm:text-2xl font-medium mt-1 text-blue-100 tracking-wide">
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
          <p className="text-blue-100 text-base sm:text-2xl font-bold">
            Rotary Club Thane Northend (3142)
          </p>
        </div>

        {/* Desktop Layout - Two Sections */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          {/* Left Section - Event Information */}
          <div className="text-left pr-8 lg:pr-12">
            <h1 className="mb-3">
              <span className="block text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-blue-50 bg-clip-text text-transparent tracking-tight leading-tight">
                Maha Arogya Shibir
              </span>
              <span className="block text-2xl xl:text-3xl font-medium mt-1 text-blue-100 tracking-wide">
                Chalisgaon
              </span>
            </h1>
            <p className="text-blue-100 text-lg xl:text-xl font-light">
              Healthcare Registration Portal
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="mx-6 lg:mx-8 flex flex-col items-center">
            <div className="w-px h-16 xl:h-20 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <div className="my-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-px h-16 xl:h-20 bg-gradient-to-t from-transparent via-white/40 to-transparent"></div>
          </div>

          {/* Right Section - Organization Information */}
          <div className="text-right pl-8 lg:pl-12">
            <div className="space-y-2">
              <h3 className="text-2xl xl:text-2xl font-semibold text-white">
                Rotary Club Thane Northend
              </h3>
              <p className="text-blue-200 text-base xl:text-lg">
                District No. 3142
              </p>
              <div className="flex items-center justify-end space-x-2 mt-3">
                <span className="font-bold text-blue-300">+</span>
                <span className="text-blue-200 text-sm xl:text-base">Community Health Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 