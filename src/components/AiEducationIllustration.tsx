import React from 'react';

export const AiEducationIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto my-2 px-2 select-none">
      <div className="relative flex items-center justify-center">
        {/* Compact & Cute Animated Graphic: Đường chạy bắt đầu từ Sách qua iPad và Máy tính */}
        <svg
          viewBox="0 0 600 150"
          className="w-full h-auto max-h-[135px] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gentle kid shadow */}
            <filter id="cuteShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#0F172A" floodOpacity="0.08" />
            </filter>

            {/* Screen Gradients */}
            <linearGradient id="compScreenSmall" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            <linearGradient id="ipadScreenSmall" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Path gradient */}
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* ========================================================= */}
          {/* ĐƯỜNG CHẠY NĂNG LƯỢNG: TỪ SÁCH QUA IPAD VÀ MÁY TÍNH       */}
          {/* ========================================================= */}
          {/* Nhánh 1: Từ Sách (x: 290, y: 95) -> qua Máy tính (x: 105, y: 75) */}
          <path
            id="path-books-to-pc"
            d="M 270 95 C 220 50, 160 110, 105 75"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
            className="opacity-75"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-16"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Nhánh 2: Từ Sách (x: 320, y: 95) -> qua iPad (x: 485, y: 75) */}
          <path
            id="path-books-to-ipad"
            d="M 325 95 C 380 50, 440 110, 490 75"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
            className="opacity-75"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-16"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Hạt sao tri thức chạy từ Sách qua Máy tính */}
          <circle r="3.5" fill="#0284C7">
            <animateMotion
              path="M 270 95 C 220 50, 160 110, 105 75"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Hạt sao tri thức chạy từ Sách qua iPad */}
          <circle r="3.5" fill="#F59E0B">
            <animateMotion
              path="M 325 95 C 380 50, 440 110, 490 75"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* ========================================================= */}
          {/* 1. MÁY VI TÍNH (THU NHỎ, RÕ NÉT, ĐÁNG YÊU) - BÊN TRÁI     */}
          {/* ========================================================= */}
          <g transform="translate(45, 20)" filter="url(#cuteShadow)">
            {/* Chân đế màn hình */}
            <rect x="42" y="80" width="16" height="15" rx="3" fill="#94A3B8" />
            <ellipse cx="50" cy="97" rx="24" ry="5" fill="#CBD5E1" />

            {/* Khung màn hình máy vi tính */}
            <rect x="5" y="8" width="90" height="74" rx="10" fill="#F8FAFC" stroke="#0284C7" strokeWidth="2.5" />
            <circle cx="50" cy="13" r="1.8" fill="#64748B" /> {/* Webcam */}

            {/* Màn hình hiển thị AI học tập */}
            <rect x="11" y="18" width="78" height="58" rx="6" fill="url(#compScreenSmall)" />

            {/* Chú AI mini trên màn hình */}
            <g transform="translate(32, 26)">
              {/* Đầu robot mini */}
              <rect x="8" y="4" width="20" height="16" rx="4" fill="#FFFFFF" />
              {/* Mắt chớp vui vẻ */}
              <circle cx="13" cy="11" r="1.8" fill="#0284C7">
                <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="23" cy="11" r="1.8" fill="#0284C7">
                <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Nụ cười */}
              <path d="M 16 15 Q 18 17 20 15" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              {/* Anten */}
              <line x1="18" y1="1" x2="18" y2="4" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="18" cy="1" r="1.5" fill="#F59E0B" />
            </g>

            {/* Các thanh bài học trên màn hình máy tính */}
            <rect x="18" y="52" width="22" height="4" rx="2" fill="#FEF08A" />
            <rect x="18" y="59" width="34" height="4" rx="2" fill="#BAE6FD" />
            <rect x="18" y="66" width="28" height="4" rx="2" fill="#FFFFFF" />
            <circle cx="72" cy="60" r="8" fill="#38BDF8" opacity="0.4" />
            <path d="M 72 54 L 73 57 L 76 58 L 74 60 L 75 63 L 72 61 L 69 63 L 70 60 L 68 58 L 71 57 Z" fill="#FDE047" />

            {/* Bàn phím máy tính nhỏ nhắn */}
            <g transform="translate(10, 102)">
              <rect x="0" y="0" width="80" height="11" rx="3.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
              <circle cx="12" cy="5.5" r="1.5" fill="#EF4444" />
              <circle cx="20" cy="5.5" r="1.5" fill="#F59E0B" />
              <circle cx="28" cy="5.5" r="1.5" fill="#10B981" />
              <rect x="36" y="4" width="22" height="3" rx="1.5" fill="#94A3B8" />
              <circle cx="64" cy="5.5" r="1.5" fill="#3B82F6" />
              <circle cx="72" cy="5.5" r="1.5" fill="#EC4899" />
            </g>
          </g>

          {/* ========================================================= */}
          {/* 2. CÁC CUỐN SÁCH (KHỞI NGUỒN TRI THỨC) - Ở TRUNG TÂM     */}
          {/* ========================================================= */}
          <g transform="translate(245, 45)" filter="url(#cuteShadow)">
            {/* Cuốn sách 1 (dưới cùng - Xanh dương) */}
            <g transform="translate(0, 48)">
              <rect x="0" y="0" width="95" height="17" rx="4" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1" />
              <rect x="12" y="3" width="79" height="11" rx="2" fill="#F8FAFC" />
              <line x1="16" y1="6" x2="85" y2="6" stroke="#E2E8F0" strokeWidth="0.8" />
              <line x1="16" y1="9" x2="80" y2="9" stroke="#E2E8F0" strokeWidth="0.8" />
              <rect x="2" y="2" width="9" height="13" rx="2" fill="#1E40AF" />
              <text x="6.5" y="11" fill="#93C5FD" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                AI
              </text>
            </g>

            {/* Cuốn sách 2 (ở giữa - Xanh lá) */}
            <g transform="translate(5, 29)">
              <rect x="0" y="0" width="86" height="17" rx="4" fill="#10B981" stroke="#059669" strokeWidth="1" />
              <rect x="12" y="3" width="70" height="11" rx="2" fill="#F8FAFC" />
              <line x1="16" y1="6" x2="76" y2="6" stroke="#E2E8F0" strokeWidth="0.8" />
              <rect x="2" y="2" width="9" height="13" rx="2" fill="#047857" />
              {/* Dải ruy băng bookmark đỏ */}
              <path d="M 70 14 L 70 25 L 72.5 23 L 75 25 L 75 14 Z" fill="#EF4444" />
            </g>

            {/* Cuốn sách 3 (trên cùng - Đỏ cam) */}
            <g transform="translate(10, 10)">
              <rect x="0" y="0" width="78" height="17" rx="4" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
              <rect x="12" y="3" width="62" height="11" rx="2" fill="#F8FAFC" />
              <rect x="2" y="2" width="9" height="13" rx="2" fill="#B91C1C" />
              <text x="6.5" y="11" fill="#FECACA" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                ★
              </text>
              {/* Bookmark vàng */}
              <path d="M 58 14 L 58 24 L 60.5 22 L 63 24 L 63 14 Z" fill="#F59E0B" />
            </g>

            {/* Cuốn sách mở mini trên đỉnh chồng sách */}
            <g transform="translate(25, -6)">
              <rect x="0" y="0" width="46" height="15" rx="3" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
              <line x1="23" y1="0" x2="23" y2="15" stroke="#FFFFFF" strokeWidth="1.2" />
              <rect x="4" y="3" width="16" height="9" rx="1.5" fill="#FFFFFF" opacity="0.9" />
              <rect x="26" y="3" width="16" height="9" rx="1.5" fill="#FFFFFF" opacity="0.9" />
            </g>

            {/* Cây bút chì nhỏ xinh tựa vào sách */}
            <g transform="translate(86, 12) rotate(22)">
              <rect x="0" y="0" width="4.5" height="52" rx="1.5" fill="#F43F5E" stroke="#E11D48" strokeWidth="0.8" />
              <polygon points="0,52 4.5,52 2.2,59" fill="#FDE047" />
              <polygon points="1.5,57 3,57 2.2,59" fill="#1E293B" />
              <rect x="0" y="2" width="4.5" height="6" rx="1" fill="#FCA5A5" />
            </g>
          </g>

          {/* ========================================================= */}
          {/* 3. MÁY TÍNH BẢNG (IPAD NHỎ GỌN, RÕ NÉT) - BÊN PHẢI       */}
          {/* ========================================================= */}
          <g transform="translate(440, 25)" filter="url(#cuteShadow)">
            {/* Khung viền iPad thanh lịch */}
            <rect x="10" y="10" width="112" height="84" rx="12" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
            <circle cx="66" cy="14" r="1.5" fill="#64748B" /> {/* Camera */}

            {/* Màn hình cảm ứng iPad */}
            <rect x="17" y="18" width="98" height="68" rx="8" fill="url(#ipadScreenSmall)" />

            {/* Các icon ứng dụng học tập trên iPad */}
            {/* Icon 1: Hỏi đáp ? */}
            <rect x="23" y="24" width="22" height="22" rx="6" fill="#F87171" />
            <text x="34" y="39" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              ?
            </text>

            {/* Icon 2: Não bộ AI */}
            <rect x="49" y="24" width="22" height="22" rx="6" fill="#FBBF24" />
            <circle cx="60" cy="35" r="5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="60" cy="35" r="2" fill="#D97706" />

            {/* Icon 3: Lá chắn bảo vệ dữ liệu */}
            <rect x="75" y="24" width="22" height="22" rx="6" fill="#34D399" />
            <path d="M 86 29 L 91 32 C 91 36 89 39 86 40 C 83 39 81 36 81 32 Z" fill="#FFFFFF" />

            {/* Bảng vẽ / hiển thị bài tập trên iPad */}
            <rect x="23" y="51" width="74" height="28" rx="5" fill="#FFFFFF" opacity="0.95" />
            <path d="M 30 66 Q 42 58 54 66 T 78 66" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <circle cx="78" cy="66" r="2.5" fill="#F59E0B" />
            <circle cx="54" cy="66" r="2.5" fill="#EF4444" />
            <circle cx="30" cy="66" r="2.5" fill="#10B981" />

            {/* Thanh điều hướng iPad */}
            <line x1="56" y1="82" x2="76" y2="82" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

            {/* Cây bút cảm ứng iPad (Apple Pencil) nhỏ nhắn */}
            <g transform="translate(100, 52) rotate(-28)">
              <rect x="0" y="0" width="5.5" height="42" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <polygon points="0,42 5.5,42 2.7,48" fill="#E2E8F0" />
              <polygon points="2,46 3.5,46 2.7,48" fill="#0284C7" />
              <rect x="0" y="3" width="5.5" height="2.5" fill="#94A3B8" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
