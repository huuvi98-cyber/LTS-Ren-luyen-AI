import React from 'react';
import { 
  VERBATIM_SENTENCES, 
  FULL_EXACT_TEXT 
} from '../data/textData';
import { 
  Cpu, 
  ShieldCheck, 
  FileCheck2, 
  Target, 
  Compass, 
  HelpCircle, 
  Newspaper, 
  ArrowRight,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
  Lock,
  Search,
  Scale
} from 'lucide-react';

interface InfographicCardViewProps {
  onSelectSentence: (id: number) => void;
}

export const InfographicCardView: React.FC<InfographicCardViewProps> = ({
  onSelectSentence,
}) => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Editorial Infographic Title */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Infographic Chuyên Đề Báo Chí & Giáo Dục</span>
        </div>
        <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance">
          Bản Đồ Năng Lực AI Trong Trường Phổ Thông
        </h2>
        <p className="mt-2 text-sm text-slate-400 text-balance">
          Trực quan hóa cấu trúc tư duy và định hướng giáo dục từ tuyến bài của Báo Sài Gòn Giải Phóng
        </p>
      </div>

      {/* Grid of Infographic Cards with Original Verbatim Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Tư duy làm chủ công nghệ */}
        <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl hover:border-cyan-400/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Cpu className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-slate-500">MỆNH ĐỀ 01</span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Nguyên tắc cốt lõi
          </div>
          <blockquote className="font-editorial text-slate-100 text-sm leading-relaxed border-l-2 border-cyan-500 pl-3 py-1 bg-cyan-950/30 rounded-r-lg">
            "{VERBATIM_SENTENCES[0].text}"
          </blockquote>
          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="text-cyan-300 font-medium">Học sinh làm chủ công nghệ</span>
            <span className="text-slate-500">Không để máy thay thế tư duy</span>
          </div>
        </div>

        {/* Card 2: 4 Kỹ năng bảo vệ và tự chủ */}
        <div className="relative rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl hover:border-emerald-400/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-slate-500">MỆNH ĐỀ 02</span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Hành vi & Năng lực
          </div>
          <blockquote className="font-editorial text-slate-100 text-sm leading-relaxed border-l-2 border-emerald-500 pl-3 py-1 bg-emerald-950/30 rounded-r-lg">
            "{VERBATIM_SENTENCES[1].text}"
          </blockquote>
          <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Đặt câu hỏi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kiểm chứng</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bảo vệ dữ liệu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chịu trách nhiệm</span>
            </div>
          </div>
        </div>

        {/* Card 3: Khung chính sách Bộ GD-ĐT */}
        <div className="relative rounded-2xl border border-blue-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl hover:border-blue-400/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileCheck2 className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-slate-500">MỆNH ĐỀ 03</span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Văn bản định hướng
          </div>
          <blockquote className="font-editorial text-slate-100 text-sm leading-relaxed border-l-2 border-blue-500 pl-3 py-1 bg-blue-950/30 rounded-r-lg">
            "{VERBATIM_SENTENCES[2].text}"
          </blockquote>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="text-blue-300 font-semibold">QĐ 2422/QĐ-BGDĐT</span>
            <span className="rounded bg-blue-950/80 px-2 py-0.5 text-blue-300 font-mono text-[11px] border border-blue-800/60">
              Từ năm 2026-2027
            </span>
          </div>
        </div>

        {/* Card 4: Không nhằm biến học sinh thành kỹ sư */}
        <div className="relative rounded-2xl border border-amber-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl hover:border-amber-400/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Target className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-slate-500">MỆNH ĐỀ 04</span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Xác định giới hạn
          </div>
          <blockquote className="font-editorial text-slate-100 text-sm leading-relaxed border-l-2 border-amber-500 pl-3 py-1 bg-amber-950/30 rounded-r-lg">
            "{VERBATIM_SENTENCES[3].text}"
          </blockquote>
          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="text-amber-300">Không biến tất cả thành kỹ sư</span>
            <span className="text-slate-500">Giáo dục phổ thông đại chúng</span>
          </div>
        </div>

        {/* Card 5: Mục tiêu lớn hơn - Năng lực sống */}
        <div className="relative rounded-2xl border border-purple-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl hover:border-purple-400/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Compass className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-slate-500">MỆNH ĐỀ 05</span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            Mục tiêu lớn hơn
          </div>
          <blockquote className="font-editorial text-slate-100 text-sm leading-relaxed border-l-2 border-purple-500 pl-3 py-1 bg-purple-950/30 rounded-r-lg">
            "{VERBATIM_SENTENCES[4].text}"
          </blockquote>
          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="text-purple-300 font-medium">Năng lực sống · Học tập · Làm việc</span>
            <span className="text-slate-500">Xã hội có AI</span>
          </div>
        </div>

        {/* Card 6: 3 Câu hỏi từ thực tế lớp học */}
        <div className="relative rounded-2xl border border-rose-500/30 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl hover:border-rose-400/60 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <HelpCircle className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-slate-500">MỆNH ĐỀ 06</span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
            Trăn trở sư phạm
          </div>
          <blockquote className="font-editorial text-slate-100 text-sm leading-relaxed border-l-2 border-rose-500 pl-3 py-1 bg-rose-950/30 rounded-r-lg">
            "{VERBATIM_SENTENCES[5].text}"
          </blockquote>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-300 flex flex-wrap gap-2">
            <span className="rounded bg-rose-950/60 px-2 py-0.5 border border-rose-800/40">Dạy theo lứa tuổi?</span>
            <span className="rounded bg-rose-950/60 px-2 py-0.5 border border-rose-800/40">Đánh giá ra sao?</span>
            <span className="rounded bg-rose-950/60 px-2 py-0.5 border border-rose-800/40">Quyền kiểm soát?</span>
          </div>
        </div>
      </div>

      {/* Feature Wide Card: Tuyến bài Báo Sài Gòn Giải Phóng (Sentence 07) */}
      <div className="rounded-2xl border border-sky-500/40 bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
              <Newspaper className="w-4 h-4" />
              <span>Báo Sài Gòn Giải Phóng giới thiệu tuyến bài</span>
            </div>
            <blockquote className="font-editorial text-base sm:text-lg text-slate-100 leading-relaxed border-l-4 border-sky-400 pl-4 py-1">
              "{VERBATIM_SENTENCES[6].text}"
            </blockquote>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <div className="rounded-xl border border-sky-500/30 bg-sky-950/60 p-4 text-center">
              <span className="block text-2xl font-bold text-sky-300 font-mono">3 KỲ</span>
              <span className="text-xs text-slate-400">Tuyến bài chuyên đề</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
