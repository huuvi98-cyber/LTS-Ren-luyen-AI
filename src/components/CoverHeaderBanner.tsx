import React from 'react';
import { Sparkles } from 'lucide-react';

export const CoverHeaderBanner: React.FC = () => {
  return (
    <div className="w-full mb-8">
      <div className="relative aspect-[16/9] w-full overflow-hidden shadow-xl border-b border-blue-900/30 bg-slate-950 group">
        {/* Clean Background Image Template */}
        <img
          src="/assets/aistudio/Dao_tao_AI_-Ky_1-bia-k_text_bd2c5899.jpg"
          alt="Bài 1: Dạy trẻ biết tự bảo vệ trước AI - Báo Sài Gòn Giải Phóng"
          className="w-full h-full object-cover select-none"
        />

        {/* ========================================================= */}
        {/* OVERLAY DYNAMIC TITLE TYPOGRAPHY                          */}
        {/* ========================================================= */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* DYNAMIC TITLE OVERLAY (Clear separation from laptop on mobile) */}
          <div className="absolute top-[8%] sm:top-[9%] lg:top-[12%] left-[48%] min-[380px]:left-[48%] xs:left-[48.5%] sm:left-[46%] right-[1%] sm:right-[2%] bottom-[2%] flex flex-col justify-center items-start text-left z-20">
            {/* Subtitle: BÀI 1 */}
            <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1.5 lg:mb-3">
              <span className="font-rounded font-black uppercase text-[11px] min-[380px]:text-[13px] xs:text-[14.5px] sm:text-base md:text-xl lg:text-3xl xl:text-4xl text-sky-200 tracking-wider sm:tracking-widest border-b-2 sm:border-b-3 border-sky-400 pb-0.5 drop-shadow-md">
                BÀI 1
              </span>
            </div>

            {/* Title Line 1: DẠY TRẺ */}
            <h1 className="font-rounded font-black text-white text-[16.5px] min-[380px]:text-[19px] xs:text-[23px] sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight uppercase leading-none whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              DẠY TRẺ
            </h1>

            {/* Title Line 2: BIẾT TỰ BẢO VỆ */}
            <h2 className="font-rounded font-black text-white text-[16.5px] min-[380px]:text-[19px] xs:text-[23px] sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight uppercase leading-none mt-0.5 sm:mt-1.5 md:mt-2 lg:mt-3.5 whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              BIẾT TỰ BẢO VỆ
            </h2>

            {/* Title Line 3: "TRƯỚC" + "AI" */}
            <div className="flex items-start gap-1.5 sm:gap-2.5 lg:gap-4 mt-0.5 sm:mt-1.5 md:mt-2 lg:mt-3.5 whitespace-nowrap">
              {/* Chữ "TRƯỚC" */}
              <span className="font-rounded font-black text-white text-[16.5px] min-[380px]:text-[19px] xs:text-[23px] sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight uppercase leading-none sm:-mt-0.5 md:-mt-1 lg:-mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                TRƯỚC
              </span>

              {/* Chữ "AI" theo đúng font mẫu, KHÔNG ĐỔ BÓNG, VỆT SÁNG LƯỚT BÊN TRONG CHỮ AI */}
              <div className="relative inline-flex items-start overflow-hidden sm:-mt-0.5 md:-mt-1 lg:-mt-2">
                <img
                  src="/assets/aistudio/Dao_tao_AI_-Ky_1-AI_7b49630f.png"
                  alt="AI"
                  className="h-5 min-[380px]:h-6.5 xs:h-8.5 sm:h-10 md:h-14 lg:h-24 xl:h-30 2xl:h-36 w-auto object-contain select-none"
                />
                {/* Vệt sáng nhẹ chỉ xuất hiện bên trong thân chữ AI, không lem ra nền */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    WebkitMaskImage: 'url(/assets/aistudio/Dao_tao_AI_-Ky_1-AI_7b49630f.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'left top',
                    maskImage: 'url(/assets/aistudio/Dao_tao_AI_-Ky_1-AI_7b49630f.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'left top',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/85 to-transparent -skew-x-12 animate-shimmer" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Animated Signal Waves over Wifi icon on Laptop (Bottom Left) */}
          <div className="absolute bottom-[20%] left-[21%] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-cyan-300/80 animate-ping" />
          </div>

          {/* 4. Glowing Pulse on Paper Plane Cursor (Top Right of Banner Box) */}
          <div className="absolute top-[16%] right-[8%] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-sky-400/20 blur-sm animate-pulse" />
            <Sparkles className="w-4 h-4 text-sky-200 absolute animate-spin-slow" />
          </div>

          {/* 5. Subtle glowing border aura on hover */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-400/20 group-hover:ring-sky-400/50 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};
