import React, { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const emailRef = useRef()
  const passRef = useRef()
  const { login, loginWithGoogle } = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      await login(emailRef.current.value, passRef.current.value)
      navigate('/')
    } catch (err) {
      setError('Failed to sign in')
    }
  }

  async function handleGoogle(e) {
    e?.preventDefault()
    setError('')
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (err) {
      setError('Google sign-in failed')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input ref={emailRef} type="email" placeholder="Email" className="input input-bordered w-full" required />
        <input ref={passRef} type="password" placeholder="Password" className="input input-bordered w-full" required />
        <button className="btn btn-primary w-full" type="submit">Login</button>
      </form>
      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn btn-outline w-full">Sign in with Google</button>
      <p className="mt-4">Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
    </div>
  )
}
