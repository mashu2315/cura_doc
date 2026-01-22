
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side - Branding */}
        <div className="hidden md:block text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              CuraDoc
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              Your Trusted Healthcare Partner
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Connecting doctors and patients for better healthcare management
            </p>
          </div>
          <div className="mt-8 md:mt-12 space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white text-lg md:text-xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">Secure & Private</h3>
                <p className="text-xs md:text-sm text-gray-600">Your data is protected</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white text-lg md:text-xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">Easy Management</h3>
                <p className="text-xs md:text-sm text-gray-600">Streamlined workflows</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white text-lg md:text-xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">24/7 Access</h3>
                <p className="text-xs md:text-sm text-gray-600">Available anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex justify-center md:justify-end w-full">
          <AuthForm type="login" />
        </div>
      </div>
    </main>
  );
}
