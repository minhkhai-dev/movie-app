"use client"
import React from 'react'
import logo_movie from '../../public/images/logotmovie.png'
import Image from 'next/image'
import Link from 'next/link'
import { useMovieStore } from '@/store/useMovieStore'
import { Facebook, Ticket } from 'lucide-react'

export default function Footer() {
    const { language } = useMovieStore()
    return (
        <div
            className="w-full sm:min-h-[60vh] min-h-[45vh] relative mb-12 sm:mb-0"
            style={{
                backgroundImage: `url("https://www.huongnghiepaau.com/wp-content/uploads/2022/12/poster-phim.jpg")`,
                backgroundPosition: 'top',
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black" />

            <div className="relative z-10 pt-16 pb-10 px-5 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center md:items-start mb-12">
                        <div className="flex items-center sm:gap-4 gap-2">
                            <div className="w-12 sm:w-14 md:w-15">
                                <Image 
                                    src={logo_movie} 
                                    alt="Only2M Logo" 
                                    className="w-full drop-shadow-lg" 
                                />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tighter" 
                                style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8)' }}>
                                Only2M
                            </h2>
                        </div>
                        <p className="text-gray-400 mt-2 text-sm md:text-base text-center md:text-left">
                            {language === "en-US" 
                                ? "Watch thousands of movies and TV shows for free" 
                                : "Xem hàng ngàn phim và chương trình truyền hình miễn phí"}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-8 mb-16">
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                {language === "en-US" ? "Navigation" : "Điều hướng"}
                            </h3>
                            <div className="flex flex-col gap-3 text-gray-400 text-sm sm:text-base">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <Link href="/movies" className="hover:text-white transition-colors">
                                    {language === "en-US" ? "Movies" : "Phim"}
                                </Link>
                                <Link href="/tv" className="hover:text-white transition-colors">
                                    {language === "en-US" ? "TV Shows" : "Chương trình TV"}
                                </Link>
                                <Link href="/top-imdb" className="hover:text-white transition-colors">Top IMDb</Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                {language === "en-US" ? "Company" : "Công ty"}
                            </h3>
                            <div className="flex flex-col gap-3 text-gray-400 text-sm sm:text-base">
                                <Link href="/about" className="hover:text-white transition-colors">
                                    {language === "en-US" ? "About Us" : "Giới thiệu"}
                                </Link>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    {language === "en-US" ? "Contact" : "Liên hệ"}
                                </Link>
                                <Link href="/careers" className="hover:text-white transition-colors">
                                    {language === "en-US" ? "Careers" : "Tuyển dụng"}
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                {language === "en-US" ? "Legal" : "Pháp lý"}
                            </h3>
                            <div className="flex flex-col gap-3 text-gray-400 text-sm sm:text-base">
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    {language === "en-US" ? "Terms of Service" : "Điều khoản dịch vụ"}
                                </Link>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    {language === "en-US" ? "Privacy Policy" : "Chính sách bảo mật"}
                                </Link>
                                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                {language === "en-US" ? "Follow Us" : "Theo dõi chúng tôi"}
                            </h3>
                            <div className="flex flex-col gap-3 text-gray-400 text-sm sm:text-base">
                                <a href="mailto:only2@gmail.com" className="hover:text-white hover:underline transition-colors">Email: only2m@gmail.com</a>
                                <a href="tel:0987654321" className="hover:text-white hover:underline transition-colors">Gọi ngay</a>
                               
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
                        <p>
                            © {new Date().getFullYear()} Only2M. {language === "en-US" 
                                ? "All Rights Reserved." 
                                : "Đã đăng ký bản quyền."}
                        </p>
                        <p className="text-center md:text-right">
                            Made with Minh Khải - Minh Hiếu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
