/**
 * Dữ liệu văn bản nguyên văn - Giữ nguyên 100% chữ, không thêm bớt nội dung.
 */

export const FULL_EXACT_TEXT = `LTS: Nâng cao năng lực trí tuệ nhân tạo (AI) cho trẻ từ bậc phổ thông là một trong những mục tiêu chiến lược trong Nghị quyết số 71-NQ/TW của Bộ Chính trị về đột phá phát triển giáo dục và đào tạo. Dạy AI cho học sinh trước hết là dạy học sinh làm chủ công nghệ, không để máy làm thay việc suy nghĩ, tư duy, sáng tạo. Chương trình dạy-học không nhằm biến tất cả học sinh thành kỹ sư AI. Mục tiêu cao nhất là hình thành năng lực sống, học tập và làm việc trong một xã hội có AI. Tinh thần đó thể hiện trong Quyết định 2422/QĐ-BGDĐT của Bộ GD-ĐT về Khung nội dung giáo dục AI cho học sinh phổ thông, áp dụng từ năm học 2026-2027. Tuy nhiên, khi triển khai trong thực tế tại các trường vẫn còn nhiều câu hỏi: dạy thế nào cho từng lứa tuổi, đánh giá ra sao, làm gì để học sinh giữ quyền kiểm soát? Tuyến bài “Rèn năng lực AI từ phổ thông” (4 kỳ) trên báo Sài Gòn Giải Phóng sẽ tìm ra câu trả lời từ thực tiễn các lớp học.`;

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
    text: `Dạy AI cho học sinh trước hết là dạy học sinh làm chủ công nghệ, không để máy làm thay việc suy nghĩ, tư duy, sáng tạo.`,
    theme: 'ethics',
    badgeLabel: 'Tư duy làm chủ',
    subLabel: 'Không để máy suy nghĩ thay',
    aiAspect: 'AI trợ lực, con người làm chủ tư duy và sáng tạo',
    eduAspect: 'Rèn luyện thói quen tự chủ & tư duy đa chiều'
  },
  {
    id: 3,
    text: `Chương trình dạy-học không nhằm biến tất cả học sinh thành kỹ sư AI.`,
    theme: 'clarification',
    badgeLabel: 'Định vị mục tiêu',
    subLabel: 'Không phổ cập kỹ sư công nghệ',
    aiAspect: 'Phổ cập hiểu biết ứng dụng, không đào tạo hẹp',
    eduAspect: 'Giảm tải áp lực kỹ thuật, phổ cập diện rộng'
  },
  {
    id: 4,
    text: `Mục tiêu cao nhất là hình thành năng lực sống, học tập và làm việc trong một xã hội có AI.`,
    theme: 'vision',
    badgeLabel: 'Mục tiêu cao nhất',
    subLabel: 'Năng lực sống & làm việc thời đại AI',
    aiAspect: 'Thích ứng và đồng hành cùng tiến bộ công nghệ',
    eduAspect: 'Chuẩn bị hành trang công dân số toàn diện'
  },
  {
    id: 5,
    text: `Tinh thần đó thể hiện trong Quyết định 2422/QĐ-BGDĐT của Bộ GD-ĐT về Khung nội dung giáo dục AI cho học sinh phổ thông, áp dụng từ năm học 2026-2027.`,
    theme: 'policy',
    badgeLabel: 'Căn cứ chính sách',
    subLabel: 'Quyết định 2422/QĐ-BGDĐT (Năm học 2026-2027)',
    aiAspect: 'Chuẩn hóa khung nội dung giáo dục AI học đường',
    eduAspect: 'Lộ trình triển khai đồng bộ từ Bộ Giáo dục & Đào tạo'
  },
  {
    id: 6,
    text: `Tuy nhiên, khi triển khai trong thực tế tại các trường vẫn còn nhiều câu hỏi: dạy thế nào cho từng lứa tuổi, đánh giá ra sao, làm gì để học sinh giữ quyền kiểm soát?`,
    theme: 'challenge',
    badgeLabel: 'Câu hỏi thực tiễn',
    subLabel: 'Lứa tuổi · Đánh giá · Quyền kiểm soát',
    aiAspect: 'Kiểm soát thuật toán và giao thoa con người - máy',
    eduAspect: 'Phương pháp sư phạm phù hợp từng cấp học'
  },
  {
    id: 7,
    text: `Tuyến bài “Rèn năng lực AI từ phổ thông” (4 kỳ) trên báo Sài Gòn Giải Phóng sẽ tìm ra câu trả lời từ thực tiễn các lớp học.`,
    theme: 'investigation',
    badgeLabel: 'Tuyến bài báo chí',
    subLabel: 'Báo Sài Gòn Giải Phóng (4 kỳ phóng sự)',
    aiAspect: 'Ghi nhận thực nghiệm AI trực tiếp từ lớp học',
    eduAspect: 'Lời giải từ thực tiễn đổi mới giáo dục'
  }
];
