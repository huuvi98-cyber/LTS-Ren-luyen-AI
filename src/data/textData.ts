/**
 * Dữ liệu văn bản nguyên văn - Giữ nguyên 100% chữ, không thêm bớt nội dung.
 */

export const FULL_EXACT_TEXT = `LTS: Dạy trí tuệ nhân tạo (AI) trong trường phổ thông trước hết là dạy học sinh làm chủ công nghệ, không để máy làm thay việc suy nghĩ, tư duy, sáng tạo. Các em cần biết đặt câu hỏi, kiểm chứng, bảo vệ dữ liệu và chịu trách nhiệm về lựa chọn của mình. Tinh thần đó thể hiện rõ trong Quyết định 2422/QĐ-BGDĐT của Bộ GD-ĐT về Khung nội dung giáo dục AI cho học sinh phổ thông, áp dụng từ năm học 2026-2027. Mục tiêu của dạy AI cho học sinh không nhằm biến tất cả học sinh thành kỹ sư AI. Mục tiêu lớn hơn là hình thành năng lực sống, học tập và làm việc trong một xã hội có AI. Từ định hướng đến tiết học thực chất vẫn còn nhiều câu hỏi: dạy thế nào cho từng lứa tuổi, đánh giá ra sao, làm gì để học sinh giữ quyền kiểm soát? Báo Sài Gòn Giải Phóng giới thiệu tuyến bài “Rèn năng lực AI từ phổ thông” (3 kỳ), đi tìm câu trả lời từ từ tiễn diễn ra trong những lớp học.`;

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
    text: `LTS: Dạy trí tuệ nhân tạo (AI) trong trường phổ thông trước hết là dạy học sinh làm chủ công nghệ, không để máy làm thay việc suy nghĩ, tư duy, sáng tạo.`,
    theme: 'foundation',
    badgeLabel: 'Tư duy chủ động',
    subLabel: 'Làm chủ công nghệ',
    aiAspect: 'AI là công cụ trợ lực, không thay thế nhận thức',
    eduAspect: 'Bồi dưỡng tư duy phản biện & sức sáng tạo cá nhân'
  },
  {
    id: 2,
    text: `Các em cần biết đặt câu hỏi, kiểm chứng, bảo vệ dữ liệu và chịu trách nhiệm về lựa chọn của mình.`,
    theme: 'ethics',
    badgeLabel: 'Bộ 4 năng lực cốt lõi',
    subLabel: 'Hỏi · Kiểm chứng · Bảo mật · Trách nhiệm',
    aiAspect: 'An toàn dữ liệu, đạo đức AI & truy vết kết quả',
    eduAspect: 'Rèn luyện thói quen tự chủ & tư duy đa chiều'
  },
  {
    id: 3,
    text: `Tinh thần đó thể hiện rõ trong Quyết định 2422/QĐ-BGDĐT của Bộ GD-ĐT về Khung nội dung giáo dục AI cho học sinh phổ thông, áp dụng từ năm học 2026-2027.`,
    theme: 'policy',
    badgeLabel: 'Căn cứ chính sách',
    subLabel: 'Quyết định 2422/QĐ-BGDĐT (Năm học 2026-2027)',
    aiAspect: 'Chuẩn hóa khung nội dung giáo dục AI học đường',
    eduAspect: 'Lộ trình triển khai đồng bộ từ Bộ Giáo dục & Đào tạo'
  },
  {
    id: 4,
    text: `Mục tiêu của dạy AI cho học sinh không nhằm biến tất cả học sinh thành kỹ sư AI.`,
    theme: 'clarification',
    badgeLabel: 'Định vị mục tiêu',
    subLabel: 'Không phổ cập kỹ sư công nghệ',
    aiAspect: 'Phổ cập hiểu biết ứng dụng, không đào tạo hẹp',
    eduAspect: 'Giảm tải áp lực kỹ thuật, phổ cập diện rộng'
  },
  {
    id: 5,
    text: `Mục tiêu lớn hơn là hình thành năng lực sống, học tập và làm việc trong một xã hội có AI.`,
    theme: 'vision',
    badgeLabel: 'Tầm nhìn tương lai',
    subLabel: 'Năng lực sống & làm việc thời đại AI',
    aiAspect: 'Thích ứng và đồng hành cùng tiến bộ công nghệ',
    eduAspect: 'Chuẩn bị hành trang công dân số toàn diện'
  },
  {
    id: 6,
    text: `Từ định hướng đến tiết học thực chất vẫn còn nhiều câu hỏi: dạy thế nào cho từng lứa tuổi, đánh giá ra sao, làm gì để học sinh giữ quyền kiểm soát?`,
    theme: 'challenge',
    badgeLabel: 'Câu hỏi thực tiễn',
    subLabel: 'Lứa tuổi · Đánh giá · Quyền kiểm soát',
    aiAspect: 'Kiểm soát thuật toán và giao thoa con người - máy',
    eduAspect: 'Phương pháp sư phạm phù hợp từng cấp học'
  },
  {
    id: 7,
    text: `Báo Sài Gòn Giải Phóng giới thiệu tuyến bài “Rèn năng lực AI từ phổ thông” (3 kỳ), đi tìm câu trả lời từ từ tiễn diễn ra trong những lớp học.`,
    theme: 'investigation',
    badgeLabel: 'Tuyến bài báo chí',
    subLabel: 'Báo Sài Gòn Giải Phóng (3 kỳ phóng sự)',
    aiAspect: 'Ghi nhận thực nghiệm AI trực tiếp từ lớp học',
    eduAspect: 'Lời giải từ thực tiễn đổi mới giáo dục'
  }
];
