import AuthForm from "@/components/AuthForm";

export default function SignupPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side - Branding */}
        <div className="hidden md:block text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Join CuraDoc
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              Start your healthcare journey today
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Create your account and get access to comprehensive healthcare management tools
            </p>
          </div>
          <div className="mt-8 md:mt-12 space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white text-lg md:text-xl flex-shrink-0">
                👨‍⚕️
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">For Doctors</h3>
                <p className="text-xs md:text-sm text-gray-600">Manage patients and appointments</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white text-lg md:text-xl flex-shrink-0">
                👤
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">For Patients</h3>
                <p className="text-xs md:text-sm text-gray-600">Track your health records</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Signup Form */}
        <div className="flex justify-center md:justify-end w-full">
          <AuthForm type="signup" />
        </div>
      </div>
    </main>
  );
}
