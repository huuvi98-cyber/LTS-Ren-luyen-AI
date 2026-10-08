import React from 'react';
import { 
  VERBATIM_SENTENCES, 
  VerbatimSentenceItem, 
  FULL_EXACT_TEXT 
} from '../data/textData';
import { 
  Cpu, 
  ShieldCheck, 
  FileText, 
  Compass, 
  HelpCircle, 
  Newspaper, 
  Target,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface VerbatimTextReaderProps {
  activeSentenceId: number | null;
  onSelectSentence: (id: number) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  currentSpeakingIndex: number | null;
}

export const VerbatimTextReader: React.FC<VerbatimTextReaderProps> = ({
  activeSentenceId,
  onSelectSentence,
  fontSize,
  currentSpeakingIndex,
}) => {
  const activeItem: VerbatimSentenceItem = 
    VERBATIM_SENTENCES.find((s) => s.id === activeSentenceId) || VERBATIM_SENTENCES[0];

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed sm:leading-loose';
      case 'xlarge':
        return 'text-xl sm:text-2xl leading-loose';
      case 'normal':
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case 'foundation':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'ethics':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'policy':
        return <FileText className="w-4 h-4 text-blue-400" />;
      case 'clarification':
        return <Target className="w-4 h-4 text-amber-400" />;
      case 'vision':
        return <Compass className="w-4 h-4 text-purple-400" />;
      case 'challenge':
        return <HelpCircle className="w-4 h-4 text-rose-400" />;
      case 'investigation':
        return <Newspaper className="w-4 h-4 text-sky-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Editorial Kicker and Series Title */}
      <div className="mb-8 border-b border-slate-800 pb-6 text-center lg:text-left">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400/90 mb-2">
          <span>Báo Sài Gòn Giải Phóng</span>
          <span className="text-slate-600">·</span>
          <span>Giáo Dục & Trí Tuệ Nhân Tạo</span>
          <span className="text-slate-600">·</span>
          <span>Tuyến bài 3 kỳ</span>
        </div>
        <h1 className="font-editorial text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-balance">
          Rèn Năng Lực AI Từ Phổ Thông
        </h1>
        <p className="mt-2 text-xs text-slate-400">
          Chuyên đề giáo dục về Khung nội dung AI học đường và quyền kiểm soát công nghệ của học sinh
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Main Broadsheet Reading Canvas (70% column) */}
        <article className="lg:col-span-8 rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Subtle AI Graphic corner circuit accent */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-indigo-500/5 blur-3xl" />

          {/* Graphic Header Ribbon inside editorial */}
          <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-editorial text-xs font-semibold tracking-wider text-slate-300 uppercase">
                Lời Tòa Soạn (LTS)
              </span>
            </div>
            <div className="text-xs text-slate-400">
              Chạm hoặc click từng câu để khám phá chiều sâu giáo dục
            </div>
          </div>

          {/* Verbatim Paragraph Set with Interactive Sentences */}
          <div className={`font-editorial text-slate-200 ${getFontSizeClass()}`}>
            {VERBATIM_SENTENCES.map((item, index) => {
              const isSelected = activeSentenceId === item.id;
              const isSpeaking = currentSpeakingIndex === index;

              return (
                <span
                  key={item.id}
                  onClick={() => onSelectSentence(item.id)}
                  onMouseEnter={() => onSelectSentence(item.id)}
                  className={`relative cursor-pointer transition-all duration-300 inline rounded-sm px-1 py-0.5 ${
                    isSelected
                      ? 'bg-cyan-950/60 text-white ring-1 ring-cyan-400/50 shadow-sm shadow-cyan-500/10'
                      : isSpeaking
                      ? 'bg-amber-950/50 text-amber-200 ring-1 ring-amber-400/50'
                      : 'hover:bg-slate-800/60 hover:text-cyan-200'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectSentence(item.id);
                    }
                  }}
                  aria-label={`Câu ${item.id}: ${item.badgeLabel}`}
                >
                  {/* Drop cap effect for the very first sentence 'LTS:' */}
                  {index === 0 ? (
                    <>
                      <span className="font-bold text-cyan-400 underline decoration-cyan-500/40 underline-offset-4 mr-1">
                        LTS:
                      </span>
                      <span>
                        {item.text.replace(/^LTS:\s*/, '')}
                      </span>
                    </>
                  ) : (
                    <span>{item.text}</span>
                  )}
                  {/* Space between sentences */}
                  {' '}
                </span>
              );
            })}
          </div>

          {/* Quick reading note */}
          <div className="mt-8 border-t border-slate-800/80 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Văn bản nguyên văn đầy đủ 100% theo bản quyền Báo Sài Gòn Giải Phóng</span>
            </div>
            <div className="text-slate-400 font-mono text-[11px]">
              7 luận điểm giáo dục · Khung nội dung 2026-2027
            </div>
          </div>
        </article>

        {/* Dynamic AI & Education Insight Panel (30% column) */}
        <aside className="lg:col-span-4 flex flex-col gap-4">
          <div className="sticky top-24 rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl transition-all duration-500">
            {/* Context Badge */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                {getThemeIcon(activeItem.theme)}
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {activeItem.badgeLabel}
                </span>
              </div>
              <span className="font-mono text-xs text-slate-400">
                0{activeItem.id} / 07
              </span>
            </div>

            {/* Sentence Spotlight */}
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block mb-1">
                Nguyên văn câu được chọn:
              </span>
              <p className="font-editorial text-sm italic text-slate-200 border-l-2 border-cyan-400 pl-3 py-1 bg-cyan-950/20 rounded-r-lg">
                "{activeItem.text}"
              </p>
            </div>

            {/* Two Graphic Pillars for this sentence */}
            <div className="space-y-3 mt-4">
              {/* AI Dimension */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5">
                <div className="flex items-center gap-2 text-xs font-medium text-cyan-300 mb-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Chiều kích Công nghệ AI</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeItem.aiAspect}
                </p>
              </div>

              {/* Education Dimension */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-300 mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chiều kích Giáo dục Phổ thông</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeItem.eduAspect}
                </p>
              </div>
            </div>

            {/* Selector Nav Strip */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <div className="text-[11px] text-slate-400 mb-2 font-medium">
                Chọn câu để xem phân tích:
              </div>
              <div className="grid grid-cols-7 gap-1">
                {VERBATIM_SENTENCES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onSelectSentence(s.id)}
                    className={`py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                      activeSentenceId === s.id
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    0{s.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
