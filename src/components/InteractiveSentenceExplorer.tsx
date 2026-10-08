import React, { useState } from 'react';
import { 
  VERBATIM_SENTENCES, 
  VerbatimSentenceItem, 
  FULL_EXACT_TEXT 
} from '../data/textData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Cpu, 
  BookOpen, 
  Share2, 
  Check, 
  Compass, 
  CheckCircle2,
  FileText,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

interface InteractiveSentenceExplorerProps {
  onCopyExactText: () => void;
  copied: boolean;
}

export const InteractiveSentenceExplorer: React.FC<InteractiveSentenceExplorerProps> = ({
  onCopyExactText,
  copied,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentItem: VerbatimSentenceItem = VERBATIM_SENTENCES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < VERBATIM_SENTENCES.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : VERBATIM_SENTENCES.length - 1));
  };

  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Khám Phá Chiều Sâu 7 Luận Điểm</span>
        </div>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
          Hành Trình Rèn Năng Lực AI
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          Chuyển đổi từng câu trong toàn văn nguyên bản để đào sâu góc nhìn công nghệ và sư phạm
        </p>
      </div>

      {/* Progress Timeline Rail */}
      <div className="flex items-center justify-between gap-1 sm:gap-2 px-2">
        {VERBATIM_SENTENCES.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            className={`flex-1 py-2 rounded-lg text-center transition-all ${
              idx === currentIndex
                ? 'bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 shadow-sm'
                : idx < currentIndex
                ? 'bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-slate-200'
                : 'bg-slate-900/60 border border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
          >
            <div className="text-[10px] font-mono block">CÂU 0{item.id}</div>
            <div className="text-xs font-semibold hidden md:block truncate px-1">
              {item.badgeLabel}
            </div>
          </button>
        ))}
      </div>

      {/* Main Focus Card */}
      <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-cyan-500/20 px-2.5 py-1 text-xs font-mono font-bold text-cyan-300 border border-cyan-500/30">
              0{currentItem.id} / 07
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              {currentItem.badgeLabel}
            </span>
          </div>
          <span className="text-xs text-slate-500">
            {currentItem.subLabel}
          </span>
        </div>

        {/* Verbatim Sentence Text with pristine prominence */}
        <div className="mb-8">
          <div className="text-xs font-medium text-slate-400 mb-2 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nguyên văn văn bản:</span>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-950/70 p-6 shadow-inner">
            <blockquote className="font-editorial text-lg sm:text-xl lg:text-2xl text-slate-100 leading-relaxed">
              "{currentItem.text}"
            </blockquote>
          </div>
        </div>

        {/* Dual Dimension Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* AI Perspective */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Góc nhìn Trí tuệ nhân tạo (AI)</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentItem.aiAspect}
            </p>
          </div>

          {/* Education Perspective */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Góc nhìn Giáo dục & Sư phạm</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentItem.eduAspect}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onCopyExactText}
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              title="Sao chép toàn văn nguyên bản"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Đã chép</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Sao chép toàn văn</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
          >
            <span>Câu tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Complete Verbatim Text Box below for total transparency */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Toàn văn trọn vẹn (Nguyên văn từ Báo SGGP)
          </div>
          <span className="text-[11px] text-slate-500 font-mono">116 từ · Đầy đủ 100%</span>
        </div>
        <p className="font-editorial text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-slate-700 pl-4 py-1">
          {FULL_EXACT_TEXT}
        </p>
      </div>
    </div>
  );
};
