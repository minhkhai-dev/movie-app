# 🎬 Movie App

Một ứng dụng web hiển thị danh sách phim mới nhất, chi tiết phim, thể loại và trailer — được phát triển bằng **React**, **Next.js**, và sử dụng **The Movie Database (TMDB) API**.

## 🚀 Demo

Truy cập bản demo tại: https://khai-movie-app.vercel.app/

## 📸 Screenshot


## 🛠️ Công nghệ sử dụng

- ⚛️ React + Next.js
- 🌐 TMDB API (The Movie Database)
- 💨 TailwindCSS
- 🧠 Zustand (quản lý state)
- 🎥 SwiperJS (carousel phim)
- 🔍 Lazy Loading + Skeleton Loading
- ✅ TypeScript

## 🔍 Tính năng

- [x] Xem danh sách phim phổ biến, thịnh hành, sắp chiếu
- [x] Xem chi tiết từng phim (ảnh, mô tả, ngày phát hành, trailer)
- [x] Xem phim theo thể loại
- [x] Giao diện responsive, tối ưu cho desktop và mobile
- [x] Lazy loading hình ảnh và hiệu ứng loading mượt mà
- [x] Tìm kiếm phim với `query params`
- [x] Tối ưu SEO với Next.js

## 🧾 Cấu trúc thư mục
├── components/ # Các component như MovieItem, Header, Footer

├── pages/ # Các trang như index.tsx, movie/[id].tsx

├── public/ # Ảnh, icon, logo

├── store/ # Quản lý state bằng Zustand

├── styles/ # File Tailwind hoặc CSS bổ sung

└── utils/ # Các hàm helper gọi API

# Clone dự án
git clone https://github.com/your-username/movie-app.git

# Cài dependencies
cd movie-app
npm install

# Tạo file môi trường
touch .env.local
# Thêm key vào .env.local
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
# Chạy project
npm run dev

📌 Ghi chú
Dự án sử dụng API TMDB, bạn cần đăng ký tại https://www.themoviedb.org để lấy API Key.

Không commit file .env.local lên GitHub — đã được .gitignore.

🧑‍💻 Tác giả
Minh Khai – Facebook | GitHub

Dự án học tập trong quá trình thực hành frontend.
