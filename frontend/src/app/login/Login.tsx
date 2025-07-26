import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Login Form */}
      <div className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md space-y-8">
          <LoginForm />
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative hidden lg:block">
        <img
          src="https://static.vecteezy.com/system/resources/previews/043/213/057/non_2x/car-logo-against-red-and-blue-background-design-a-sleek-emblem-for-an-automotive-repair-business-minimalist-simple-modern-logo-design-free-vector.jpg"
          alt="Car logo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
    </div>
  )
}
