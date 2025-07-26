import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, mot_de_passe: password }),
      })

      const data = await response.json()
      if (!response.ok) {
        setError(data.detail || "Erreur lors de la connexion")
        return
      }

      localStorage.setItem("token", data.access_token)
      navigate("/dashboard")
    } catch (err) {
      console.error(err)
      setError("Erreur serveur")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Connexion</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Entrez vos informations pour accéder à votre compte.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="email" className="mb-2 block">
            Adresse e-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="votre.email@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="mb-2 block">
            Mot de passe
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>

      <Button type="submit" className="w-full">
        Se connecter
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Pas de compte ?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          S’inscrire
        </Link>
      </p>
    </form>
  )
}
