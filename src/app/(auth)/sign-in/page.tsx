'use client'

import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import cartAndMobile from "@/assets/dl.beatsnoop 1.png"

export default function SigninPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn === 'true') {
            router.push('/account')
        }
    }, [router])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        if (userData.email === email && userData.password === password) {
            localStorage.setItem('isLoggedIn', 'true')
            router.push('/account')
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <div className="max-w-7xl mx-auto min-h-screen my-16 mr-20 w-full flex flex-col lg:flex-row">
            {/* Left Section with Image */}
            <div className="w-full lg:w-1/2 bg-[#CBE4E8] flex items-center justify-center">
                <div className="relative w-full max-w-xl aspect-square">
                    <Image
                        src={cartAndMobile || "/placeholder.svg"}
                        alt="Shopping cart with phone and shopping bags"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Right Section with Form */}
            <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
                <div className="w-full max-w-md space-y-8">
                    <div className="space-y-2 text-center lg:text-left">
                        <h1 className="text-3xl font-medium mb-3">Log in to Exclusive</h1>
                        <p className="text-black font-poppins font-normal text-base">Enter your details below</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full my-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full my-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-4 w-full flex flex-row justify-between">
                            <button
                                className="w-36 h-[57px] font-medium font-poppins text-base bg-[#e74c3c] hover:bg-[#DB4444] text-[#FAFAFA] py-4 rounded-[4px] transition-colors"
                                type="submit"
                            >
                                Log In
                            </button>
                            <div className="text-center">
                                <Link
                                    href="/forgot-password"
                                    className="text-[#DB4444] hover:text-[#e74c3c] text-base font-normal font-poppins transition-colors"
                                >
                                    Forget Password?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

