import React from 'react';
import { Volume2, VolumeX, Copy, Check, Type, Sparkles } from 'lucide-react';

interface EditorialHeaderProps {
  currentTab: 'article' | 'explorer' | 'infographic';
  onTabChange: (tab: 'article' | 'explorer' | 'infographic') => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  onCycleFontSize: () => void;
  copied: boolean;
  onCopyText: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  currentTab,
  onTabChange,
  isPlayingAudio,
  onToggleAudio,
  fontSize,
  onCycleFontSize,
  copied,
  onCopyText,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0b101b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark adhering to Top Bar Contract */}
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className="font-editorial text-lg font-bold tracking-tight text-slate-100 hover:text-cyan-400 transition-colors sm:text-xl"
          >
            Sài Gòn Giải Phóng
          </a>
        </div>

        {/* Zone 2: Navigation Links / Mode Segmented Controls */}
        <nav className="hidden md:flex items-center gap-1 rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => onTabChange('article')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              currentTab === 'article'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Toàn văn bài viết
          </button>
          <button
            onClick={() => onTabChange('infographic')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              currentTab === 'infographic'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Infographic báo chí
          </button>
          <button
            onClick={() => onTabChange('explorer')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              currentTab === 'explorer'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Khám phá tư duy
          </button>
        </nav>

        {/* Zone 3: 1-2 primary functional actions */}
        <div className="flex items-center gap-2">
          {/* Audio narration button */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              isPlayingAudio
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 animate-pulse'
                : 'border border-slate-700 bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
            title={isPlayingAudio ? 'Dừng đọc' : 'Đọc bài viết'}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Dừng đọc</span>
              </>
            ) : (
              <>
                <Volume2 className="h-3.5 w-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Nghe bài</span>
              </>
            )}
          </button>

          {/* Copy exact text */}
          <button
            onClick={onCopyText}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            title="Sao chép toàn văn nguyên bản"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="hidden sm:inline text-emerald-300">Đã sao chép</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-slate-400" />
                <span className="hidden sm:inline">Sao chép văn bản</span>
              </>
            )}
          </button>

          {/* Font size toggle */}
          <button
            onClick={onCycleFontSize}
            className="rounded-lg border border-slate-700 bg-slate-800/80 p-1.5 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            title="Điều chỉnh kích cỡ chữ"
          >
            <Type className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile nav pills */}
      <div className="flex md:hidden border-t border-slate-800/60 px-4 py-2 gap-2 overflow-x-auto">
        <button
          onClick={() => onTabChange('article')}
          className={`px-3 py-1 text-xs font-medium whitespace-nowrap rounded-lg ${
            currentTab === 'article'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400'
          }`}
        >
          Toàn văn bài viết
        </button>
        <button
          onClick={() => onTabChange('infographic')}
          className={`px-3 py-1 text-xs font-medium whitespace-nowrap rounded-lg ${
            currentTab === 'infographic'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400'
          }`}
        >
          Infographic báo chí
        </button>
        <button
          onClick={() => onTabChange('explorer')}
          className={`px-3 py-1 text-xs font-medium whitespace-nowrap rounded-lg ${
            currentTab === 'explorer'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400'
          }`}
        >
          Khám phá tư duy
        </button>
      </div>
    </header>
  );
};
