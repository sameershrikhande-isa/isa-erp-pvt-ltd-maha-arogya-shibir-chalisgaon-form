import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  mobileNumber: z.string().regex(/^\d{10}$/, 'Mobile number must be 10 digits'),
  village: z.string().optional(),
  checkupCategory: z.string().min(1, 'Please select a checkup category')
})

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfyp0S8aSGfvScG7CCvvFDDcrCTAjbiQNRx5fM0r0277hFSjg/formResponse'
const FULLNAME_FIELD = 'entry.1592521812'
const MOBILENUMBER_FIELD = 'entry.1133440685'
const VILLAGE_FIELD = 'entry.1335509485'
const CHECKUP_CATEGORY_FIELD = 'entry.1545618867'
const DATE_YEAR_FIELD = 'entry.1544033047_year'
const DATE_MONTH_FIELD = 'entry.1544033047_month'
const DATE_DAY_FIELD = 'entry.1544033047_day'

const checkupCategories = [
  'Cardiac',
  'ENT',
  'Surgery',
  'Orthopedic',
  'Ophthalmic',
  'Gynaec'
]

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data) => {
    const currentDate = new Date()
    const formData = new FormData()
    
    formData.append(FULLNAME_FIELD, data.fullName)
    formData.append(MOBILENUMBER_FIELD, data.mobileNumber)
    if (data.village) {
      formData.append(VILLAGE_FIELD, data.village)
    }
    formData.append(CHECKUP_CATEGORY_FIELD, data.checkupCategory)
    formData.append(DATE_YEAR_FIELD, currentDate.getFullYear().toString())
    formData.append(DATE_MONTH_FIELD, (currentDate.getMonth() + 1).toString())
    formData.append(DATE_DAY_FIELD, currentDate.getDate().toString())
    
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })
    reset()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 text-white px-6 py-6 text-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            Maha Arogya Shibir Chalisgaon
          </h1>
          <p className="text-sm sm:text-base mb-1 opacity-90">
            Rotary Club Thane Northend (3142)
          </p>
          <p className="text-xs opacity-75">
            Powered by - ISA ERP Pvt Ltd
          </p>
        </div>

        {/* Form Section */}
        <div className="px-6 py-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800 text-center">
            Registration Form
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                {...register('fullName')}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2">{errors.fullName.message}</p>
              )}
            </div>

            {/* Mobile Number Field */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <input
                id="mobileNumber"
                type="tel"
                {...register('mobileNumber')}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="1234567890"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-2">{errors.mobileNumber.message}</p>
              )}
            </div>

            {/* Village Field */}
            <div>
              <label htmlFor="village" className="block text-sm font-medium text-gray-700 mb-2">
                Village
              </label>
              <input
                id="village"
                type="text"
                {...register('village')}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your village (optional)"
              />
              {errors.village && (
                <p className="text-red-500 text-sm mt-2">{errors.village.message}</p>
              )}
            </div>

            {/* Checkup Category Field */}
            <div>
              <label htmlFor="checkupCategory" className="block text-sm font-medium text-gray-700 mb-2">
                Checkup Category *
              </label>
              <select
                id="checkupCategory"
                {...register('checkupCategory')}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white"
              >
                <option value="">Select checkup category</option>
                {checkupCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.checkupCategory && (
                <p className="text-red-500 text-sm mt-2">{errors.checkupCategory.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 text-base mt-6 touch-manipulation"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
