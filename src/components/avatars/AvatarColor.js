const COLOR_PAIRS = [
    { bg: '#FAEEDA', text: '#854F0B' },
    { bg: '#87CDA3', text: '#FFFFFF' },
    { bg: '#EEEDFE', text: '#3C3489' },
    { bg: '#E1F2FE', text: '#185FA5' },
    { bg: '#FEE2E2', text: '#991B1B' },
];

// Tách chữ cái đầu trong tên
export const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(/\s+/)
    return words
        .map(word => word[0].toUpperCase())
        .join("")
        .slice(0, 3); // Lấy tối đa 3 ký tự
}

// Dùng Hash String để lấy cặp màu cố định theo tên
export const getAvatarColorPair = (name) => {
    if (!name) return COLOR_PAIRS[0];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % COLOR_PAIRS.length;
    return COLOR_PAIRS[index];
}