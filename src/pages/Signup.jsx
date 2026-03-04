import React, { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const passRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      await signup(emailRef.current.value, passRef.current.value)
      navigate('/')
    } catch (err) {
      setError('Failed to create account')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input ref={emailRef} type="email" placeholder="Email" className="input input-bordered w-full" required />
        <input ref={passRef} type="password" placeholder="Password" className="input input-bordered w-full" required />
        <button className="btn btn-primary w-full" type="submit">Create Account</button>
      </form>
      <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  )
}
