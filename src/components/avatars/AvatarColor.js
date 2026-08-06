const COLOR_PAIRS = [
    { bg: '#FAEEDA', text: '#854F0B' },
    { bg: '#87CDA3', text: '#FFFFFF' },
    { bg: '#EEEDFE', text: '#3C3489' },
    { bg: '#E1F2FE', text: '#185FA5' },
    { bg: '#FEE2E2', text: '#991B1B' },
    { bg: '#F1EFE8', text: '#5F5E5A' },
    { bg: '#F09595', text: '#FFFFFF' }
];

// Kiểm tra có phải tên viết tắt không
const isAbbreviation = (word) => {
    return word.length > 1 && word === word.toUpperCase() && /^[A-Z]+$/.test(word);
};

/* Tách chữ cái đầu trong tên */
export const getInitials = (name) => {
    if (!name) return "";
    
    const words = name.trim().split(/\s+/);
    const count = words.length;

    if (count === 0) return "";

    // Truờng hợp tên >= 4
    const lastWord = words[count -1];

    // Lấy họ + tên + chữ cái cuối trong từ viết tắt
    if (isAbbreviation(lastWord)) {
        const firstChar = words[0][0].toUpperCase();
        const secondChar = words[1][0].toUpperCase();
        const lastChar = lastWord[lastWord.length - 1].toUpperCase();

        return `${firstChar}${secondChar}${lastChar}`;
    }

    // Lấy hết nếu tên <= 3
    if (count <= 3) {
        return words.map(w => w[0].toUpperCase()).join("");
    }

    // Lấy họ + tên đệm 1 + tên nếu tên >=4
    const firstChar = words[0][0].toUpperCase();
    const secondChar = words[1][0].toUpperCase();
    const lastChar = lastWord[0].toUpperCase();

    return `${firstChar}${secondChar}${lastChar}`;
}


/* Dùng Hash String để lấy cặp màu cố định theo tên */
export const getAvatarColorPair = (name) => {
    if (!name) return COLOR_PAIRS[0];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % COLOR_PAIRS.length;
    return COLOR_PAIRS[index];
};