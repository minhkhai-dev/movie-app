"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff, ArrowLeft, Globe } from 'lucide-react';
import logo_movie from '../../../public/images/logotmovie.png';
import { useMovieStore } from '@/store/useMovieStore';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { language } = useMovieStore();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            alert(language === "en-US"
                ? "Login successful! (Demo)"
                : "Đăng nhập thành công! (Demo)");
            setIsLoading(false);
            // router.push('/'); 
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center overflow-hidden px-2 sm:px-6">
            <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl py-8 sm:py-12">

                <div className="flex flex-col items-center mb-8 sm:mb-10">
                    <div className="w-16 sm:w-20 md:w-24 drop-shadow-2xl">
                        <Image
                            src={logo_movie}
                            alt="Only2M Logo"
                            className="w-full"
                            priority
                        />
                    </div>
                    <p className="text-gray-400 text-center mt-2 text-xs sm:text-sm">
                        {language === "en-US"
                            ? "Sign in to watch movies in high quality."
                            : "Đăng nhập để xem phim chất lượng cao"}
                    </p>
                </div>

                <div className="bg-gray-900/90 border border-gray-700 rounded-2xl sm:rounded-3xl px-3 py-5 sm:p-6 md:p-8 shadow-2xl backdrop-blur-xl">

                    <h2 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6 sm:mb-8">
                        {language === "en-US" ? "Welcome back" : "Chào mừng trở lại"}
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">

                        <div>
                            <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                                {language === "en-US" ? "Email or Username" : "Email hoặc tên đăng nhập"}
                            </label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                placeholder={language === "en-US" ? "Enter your email" : "Nhập email của bạn"}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                                {language === "en-US" ? "Password" : "Mật khẩu"}
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                    placeholder={language === "en-US" ? "Enter password" : "Nhập mật khẩu"}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="text-right">
                            <Link
                                href="/forgot-password"
                                className="text-xs sm:text-sm text-red-500 hover:text-red-400 transition-colors"
                            >
                                {language === "en-US" ? "Forgot password?" : "Quên mật khẩu?"}
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800/70 
                               transition-all duration-300 py-3 sm:py-4 rounded-lg sm:rounded-2xl 
                               font-bold text-base sm:text-lg text-white shadow-lg shadow-red-600/40 active:scale-[0.98]"
                        >
                            {isLoading
                                ? (language === "en-US" ? "Signing in..." : "Đang đăng nhập...")
                                : (language === "en-US" ? "Sign In" : "Đăng nhập")
                            }
                        </button>
                    </form>

                    <div className="my-6 sm:my-8 flex items-center gap-3 sm:gap-4">
                        <div className="flex-1 h-px bg-gray-700" />
                        <span className="text-gray-500 text-xs sm:text-sm">
                            {language === "en-US" ? "or" : "hoặc"}
                        </span>
                        <div className="flex-1 h-px bg-gray-700" />
                    </div>

                    <button className="w-full border border-gray-600 hover:border-gray-400 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base text-white transition-colors flex items-center justify-center gap-2 sm:gap-3">
                        <Globe size={18} />
                        <span>
                            {language === "en-US" ? "Continue with Google" : "Tiếp tục với Google"}
                        </span>
                    </button>
                </div>

                <p className="text-center text-gray-400 mt-6 sm:mt-8 text-xs sm:text-sm">
                    {language === "en-US" ? "Don't have an account?" : "Chưa có tài khoản?"}{' '}
                    <Link href="/register" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                        {language === "en-US" ? "Sign up" : "Đăng ký ngay"}
                    </Link>
                </p>
            </div>
        </div>
    );
}