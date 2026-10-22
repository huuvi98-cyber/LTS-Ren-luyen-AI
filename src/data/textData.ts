/**
 * Dữ liệu văn bản nguyên văn - Giữ nguyên 100% chữ, không thêm bớt nội dung.
 */

export const FULL_EXACT_TEXT = `LTS: Nâng cao năng lực trí tuệ nhân tạo (AI) cho trẻ từ bậc phổ thông là một trong những mục tiêu chiến lược trong Nghị quyết số 71-NQ/TW của Bộ Chính trị về đột phá phát triển giáo dục và đào tạo. Bộ Giáo dục đã ban hành Quyết định 2422/QĐ-BGDĐT của Bộ GD-ĐT về Khung nội dung giáo dục AI cho học sinh phổ thông, áp dụng từ năm học 2026-2027. Thực tế, AI vào trường học mang theo cơ hội học tập mới, nhưng cũng đặt trẻ em trước hàng loạt rủi ro: thông tin sai nhưng tạo “ảo giác” đúng, dữ liệu cá nhân bị xâm phạm, xuất hiện nội dung không phù hợp lứa tuổi, sự lệ thuộc vào máy và nguy cơ gian lận học tập. Không thể đóng cửa lớp học với AI, nhưng càng không thể mở cửa mà thiếu hàng rào an toàn. Dạy AI phải đồng thời trao năng lực sử dụng và hình thành khả năng tự bảo vệ cho học sinh. Tuyến bài “Rèn năng lực, dựng “lá chắn” khi dạy AI cho học sinh” tiếp cận thực tiễn lớp học từ nhiệm vụ kép đó.`;

export interface VerbatimSentenceItem {
  id: number;
  text: string;
  theme: 'foundation' | 'ethics' | 'policy' | 'clarification' | 'vision' | 'challenge' | 'investigation';
  badgeLabel: string;
  subLabel: string;
  aiAspect: string;
  eduAspect: string;
}

export const VERBATIM_SENTENCES: VerbatimSentenceItem[] = [
  {
    id: 1,
    text: `LTS: Nâng cao năng lực trí tuệ nhân tạo (AI) cho trẻ từ bậc phổ thông là một trong những mục tiêu chiến lược trong Nghị quyết số 71-NQ/TW của Bộ Chính trị về đột phá phát triển giáo dục và đào tạo.`,
    theme: 'foundation',
    badgeLabel: 'Nghị quyết 71-NQ/TW',
    subLabel: 'Mục tiêu chiến lược của Bộ Chính trị',
    aiAspect: 'Đột phá phát triển giáo dục & đào tạo trí tuệ nhân tạo',
    eduAspect: 'Định hướng chiến lược từ bậc phổ thông'
  },
  {
    id: 2,
    text: `Bộ Giáo dục đã ban hành Quyết định 2422/QĐ-BGDĐT của Bộ GD-ĐT về Khung nội dung giáo dục AI cho học sinh phổ thông, áp dụng từ năm học 2026-2027.`,
    theme: 'policy',
    badgeLabel: 'Quyết định 2422/QĐ-BGDĐT',
    subLabel: 'Khung nội dung giáo dục AI từ năm học 2026-2027',
    aiAspect: 'Chuẩn hóa khung nội dung AI trong trường phổ thông',
    eduAspect: 'Cơ sở pháp lý & lộ trình triển khai giáo dục AI'
  },
  {
    id: 3,
    text: `Thực tế, AI vào trường học mang theo cơ hội học tập mới, nhưng cũng đặt trẻ em trước hàng loạt rủi ro: thông tin sai nhưng tạo “ảo giác” đúng, dữ liệu cá nhân bị xâm phạm, xuất hiện nội dung không phù hợp lứa tuổi, sự lệ thuộc vào máy và nguy cơ gian lận học tập.`,
    theme: 'challenge',
    badgeLabel: 'Cơ hội & Rủi ro',
    subLabel: 'Ảo giác thông tin · Bảo mật dữ liệu · Lệ thuộc công nghệ',
    aiAspect: 'Nhận diện rủi ro thuật toán, ảo giác AI & bảo vệ dữ liệu',
    eduAspect: 'Cảnh báo và trang bị kỹ năng nhận diện thông tin độc hại'
  },
  {
    id: 4,
    text: `Không thể đóng cửa lớp học với AI, nhưng càng không thể mở cửa mà thiếu hàng rào an toàn.`,
    theme: 'ethics',
    badgeLabel: 'Hàng rào an toàn',
    subLabel: 'Mở cửa công nghệ đi kèm bảo vệ',
    aiAspect: 'Thiết lập nguyên tắc sử dụng AI an toàn & văn minh',
    eduAspect: 'Tạo môi trường học tập AI được định hướng và kiểm soát'
  },
  {
    id: 5,
    text: `Dạy AI phải đồng thời trao năng lực sử dụng và hình thành khả năng tự bảo vệ cho học sinh.`,
    theme: 'vision',
    badgeLabel: 'Nhiệm vụ kép',
    subLabel: 'Trao năng lực & Hình thành khả năng tự bảo vệ',
    aiAspect: 'Song hành giữa ứng dụng AI và an toàn thông tin số',
    eduAspect: 'Bồi dưỡng bản lĩnh, sự tự chủ và trách nhiệm công dân số'
  },
  {
    id: 6,
    text: `Tuyến bài “Rèn năng lực, dựng “lá chắn” khi dạy AI cho học sinh” tiếp cận thực tiễn lớp học từ nhiệm vụ kép đó.`,
    theme: 'investigation',
    badgeLabel: 'Tuyến bài báo chí',
    subLabel: 'Báo Sài Gòn Giải Phóng',
    aiAspect: 'Phản ánh thực tiễn đổi mới dạy và học AI học đường',
    eduAspect: 'Lời giải từ thực tiễn các lớp học phổ thông'
  }
];
