"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff, ArrowLeft, Globe } from 'lucide-react';
import logo_movie from '../../../public/images/logotmovie.png';
import { useMovieStore } from '@/store/useMovieStore';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const { language } = useMovieStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert(language === "en-US" ? "Passwords do not match!" : "Mật khẩu xác nhận không khớp!");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            alert(language === "en-US" 
                ? "Account created successfully! (Demo)" 
                : "Tạo tài khoản thành công! (Demo)");
            setIsLoading(false);
            // router.push('/login');
        }, 1800);
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
                            ? "Create an account to watch movies in high quality." 
                            : "Tạo tài khoản để lưu phim yêu thích"}
                    </p>
                </div>

                 <div className="bg-gray-900/90 border border-gray-700 rounded-2xl sm:rounded-3xl px-3 py-5 sm:p-6 md:p-8 shadow-2xl backdrop-blur-xl">

                    <h2 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6 sm:mb-8">
                        {language === "en-US" ? "Create Account" : "Tạo tài khoản"}
                    </h2>

                    <form onSubmit={handleRegister} className="space-y-4 sm:space-y-6">

                        <div>
                            <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                                {language === "en-US" ? "Username" : "Tên đăng nhập"}
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                placeholder={language === "en-US" ? "Choose a username" : "Chọn tên đăng nhập"}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                                {language === "en-US" ? "Email" : "Email"}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                    placeholder={language === "en-US" ? "Create password" : "Tạo mật khẩu"}
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

                        <div>
                            <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                                {language === "en-US" ? "Confirm Password" : "Xác nhận mật khẩu"}
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                    placeholder={language === "en-US" ? "Confirm your password" : "Nhập lại mật khẩu"}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800/70 
                               transition-all duration-300 py-3 sm:py-4 rounded-lg sm:rounded-2xl 
                               font-bold text-sm sm:text-base text-white shadow-lg shadow-red-600/40 active:scale-[0.98] mt-2"
                        >
                            {isLoading
                                ? (language === "en-US" ? "Creating account..." : "Đang tạo tài khoản...")
                                : (language === "en-US" ? "Create Account" : "Đăng ký")
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
                    {language === "en-US" ? "Already have an account?" : "Đã có tài khoản?"}{' '}
                    <Link href="/login" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                        {language === "en-US" ? "Sign in" : "Đăng nhập"}
                    </Link>
                </p>
            </div>
        </div>
    );
}