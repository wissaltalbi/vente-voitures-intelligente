import { RegisterForm } from "@/components/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <RegisterForm />
      </div>
    </div>
  )
}
