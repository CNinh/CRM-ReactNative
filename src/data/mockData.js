/* Data dùng cho modal filter */
export const stage = [
    { id: 1, name: 'Khởi tạo' },
    { id: 2, name: 'Tìm hiểu nhu cầu' },
    { id: 3, name: 'Tư vấn/khảo sát' },
    { id: 4, name: 'Đang trình hồ sơ đề xuất tư vấn' },
    { id: 5, name: 'Giai đoạn chuẩn bị đầu tư' },
    { id: 6, name: 'Lập báo cáo đề xuất chủ trương' },
    { id: 7, name: 'Lập báo cáo kinh tế kỹ thuật' },
    { id: 8, name: 'Giai đoạn đầu tư' },
    { id: 9, name: 'Làm hồ sơ đấu thầu' },
    { id: 10, name: 'Khách hàng đang tạm dừng' },
    { id: 11, name: 'Báo giá' },
    { id: 12, name: 'Đàm phán' },
    { id: 13, name: 'Chốt thành công' },
    { id: 14, name: 'Thất bại' },
    { id: 15, name: 'Đã tạo dự án' }
];

export const service = [
    { id: 1, name: 'Dịch vụ điện toán đám mây VNPT Cloud hợp tác SBĐ' },
    { id: 2, name: 'Dịch vụ điện toán đám mây VNPT Cloud tự phát triển' },
    { id: 3, name: 'VNPT Cloud - Load Balancer', isChild: true },
    { id: 4, name: 'VNPT Cloud Object Storage', isChild: true },
    { id: 5, name: 'VNPT Cloud File Storage', isChild: true },
    { id: 6, name: 'VNPT Cloud - Advanced Virtual Server', isChild: true },
    { id: 7, name: 'VNPT Cloud - Advanced Object Storage', isChild: true },
    { id: 8, name: 'VNPT Cloud - Advanced Block Storage', isChild: true },
    { id: 9, name: 'IDG - VNPT Kubernetes Service (Manage Kubernetes)', isChild: true }
];

export const department = [
    { id: 1, name: 'Ban Giám đốc (Phòng Giải pháp)' },
    { id: 2, name: 'Ban Giám đốc (Trung tâm Kinh doanh Giải pháp' },
    { id: 3, name: 'Phòng Giải pháp (Trung tâm Kinh doanh Giải pháp)' },
    { id: 4, name: 'Phòng Khách hàng Doanh nghiệp Khánh Hoà (Trung tâm Kinh doanh Giải pháp)' },
    { id: 5, name: 'Phòng Khách hàng Doanh nghiệp Nam Khánh Hoà (Trung tâm Kinh doanh Giải pháp)' },
    { id: 6, name: 'Tổ Giải pháp A (Phòng Giải pháp)' },
    { id: 7, name: 'Tổ giải pháp B&C (Phòng Giải pháp)' },
    { id: 8, name: 'Tổ Nghiên cứu phát triển (Phòng Giải pháp)' }
];

export const staff = [
    { id: 1, name: 'Ngô Việt Thắng (thangnv.kha)' },
    { id: 2, name: 'Nguyễn Nữ Huyền Trân (trannh.kha)' },
    { id: 3, name: 'Nguyễn Thị Thu Hà (hantt.kha)' },
    { id: 4, name: 'Nguyễn Thị Trúc (trucnt.kha)' },
    { id: 5, name: 'Nguyễn Vũ Linh (linhnv.kha)' },
    { id: 6, name: 'Vương Hồng Quân (quanvh.kha)' },
    { id: 7, name: 'Phùng Hữu Quốc Phương (phuongphq.kha)' },
    { id: 8, name: 'Quản trị CTN (quantri)' },
    { id: 9, name: 'Đỗ Phương Liên (liendp.kha)' },
    { id: 10, name: 'Lê Tuấn Huy (huylt.kha)' },
    { id: 11, name: 'Phan Lương Bằng (bangpl.kha)' },
    { id: 12, name: 'Trần Duy Tân (tantd.kha)' }
];

/* Data cơ hội kinh doanh */
const baseOpportunity = {
    code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: ["Quản trị CTN", "Ngô Việt Thắng", "Trần Duy Tân", "Nguyễn Thị Thu hà", "Đỗ Phương Liên"],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50
}

export const opportunity = [
    {
        id: 1,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: ["Quản trị CTN", "Ngô Việt Thắng", "Trần Duy Tân", "Nguyễn Thị Thu hà", "Đỗ Phương Liên"],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50
    },
    {
        id: 2,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: ["Quản trị CTN", "Ngô Việt Thắng", "Trần Duy Tân", "Nguyễn Thị Thu hà", "Đỗ Phương Liên"],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50
    },
    {
        id: 3,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: ["Quản trị CTN", "Ngô Việt Thắng", "Trần Duy Tân", "Nguyễn Thị Thu hà", "Đỗ Phương Liên"],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50
    },
    {
        id: 4,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: ["Quản trị CTN", "Ngô Việt Thắng", "Trần Duy Tân", "Nguyễn Thị Thu hà", "Đỗ Phương Liên"],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50
    },
    {
        id: 5,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: ["Quản trị CTN", "Ngô Việt Thắng", "Trần Duy Tân", "Nguyễn Thị Thu hà", "Đỗ Phương Liên"],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50
    },
    {
        id: 6,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: ["Quản trị CTN", "Ngô Việt Thắng", "Trần Duy Tân", "Nguyễn Thị Thu hà", "Đỗ Phương Liên"],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50
    },{
        id: 7,
        code: "[BO00000081]",
        name: "Số hóa quy trình quản lý văn bản bệnh viện",
        stage: "Lập báo giá",
        dept: "Sở Y tế Khánh Hòa",
        services: ["VNPT HIS", "VNPT LIS"],
        staff: ["Nguyễn Văn A", "Phạm Thị B"],
        date: "10/05/2026",
        time: "09:15",
        expectedValue: 450000000,
        winRate: 80,
    },
    {
        id: 8,
        code: "[BO00000082]",
        name: "Triển khai hạ tầng Internet dedicated",
        stage: "Thương thảo hợp đồng",
        dept: "Công ty Cổ phần Thủy sản",
        services: ["Metronet", "Internet Leasedline"],
        staff: ["Nguyễn Vũ Linh", "Vương Hồng Quân", "Ngô Việt Thắng"],
        date: "12/05/2026",
        time: "14:00",
        expectedValue: 85000000,
        winRate: 90,
    },
];

/* Data dự án */
const baseProject = {
    code: "[DA00000103]",
        name: "Dự án nuôi em",
        stage: "Tư vấn/khảo sát",
        dept: "Ban Chỉ Huy Bộ Đội Biên Phòng",
        services: ["Camera AI", "Dịch vụ điện toán đám mây VNPT Cloud hợp tác SBĐ", "Hạ tầng Cloud"],
        staff: ["Phan Lương Bằng", "Trần Duy Tân"],
        date: "01/04/2026",
        time: "08:00",
        cost: 120000000,
        revenue: 0,
        successRate: 100
}

export const project = [
    {
        id: 1,
        code: "[DA00000102]",
        name: "Nâng cấp bổ sung cụm loa Truyền Thanh Thông Minh Đông Ninh Hoà",
        stage: "Tư vấn/khảo sát",
        dept: "PHÒNG VĂN HOÁ XÃ - HỘI PHƯỜNG ĐÔNG NINH HOÀ",
        services: ["VNPT IOC", "Camera AI", "Hạ tầng Cloud"],
        staff: ["Nguyễn Vũ Linh", "Vương Hồng Quân", "Ngô Việt Thắng"],
        date: "01/04/2026",
        time: "08:00",
        cost: 1200000000,
        revenue: 2500000000,
        successRate: 50
    },
    {
        id: 2,
        code: "[DA00000102]",
        name: "Nâng cấp bổ sung cụm loa Truyền Thanh Thông Minh Đông Ninh Hoà",
        stage: "Tư vấn/khảo sát",
        dept: "PHÒNG VĂN HOÁ XÃ - HỘI PHƯỜNG ĐÔNG NINH HOÀ",
        services: ["VNPT IOC", "Camera AI", "Hạ tầng Cloud"],
        staff: ["Nguyễn Vũ Linh", "Vương Hồng Quân", "Ngô Việt Thắng"],
        date: "01/04/2026",
        time: "08:00",
        cost: 1200000000,
        revenue: 2500000000,
        successRate: 20
    },
    {
        id: 3,
        code: "[DA00000102]",
        name: "Nâng cấp bổ sung cụm loa Truyền Thanh Thông Minh Đông Ninh Hoà",
        stage: "Tư vấn/khảo sát",
        dept: "PHÒNG VĂN HOÁ XÃ - HỘI PHƯỜNG ĐÔNG NINH HOÀ",
        services: ["VNPT IOC", "Camera AI", "Hạ tầng Cloud"],
        staff: ["Nguyễn Vũ Linh", "Vương Hồng Quân", "Ngô Việt Thắng"],
        date: "01/04/2026",
        time: "08:00",
        cost: 1200000000,
        revenue: 2500000000,
        successRate: 100
    },
    {
        id: 4,
        code: "[DA00000103]",
        name: "Dự án nuôi em",
        stage: "Tư vấn/khảo sát",
        dept: "Ban Chỉ Huy Bộ Đội Biên Phòng",
        services: ["Camera AI", "Dịch vụ điện toán đám mây VNPT Cloud hợp tác SBĐ", "Hạ tầng Cloud"],
        staff: ["Phan Lương Bằng", "Trần Duy Tân"],
        date: "01/04/2026",
        time: "08:00",
        cost: 120000000,
        revenue: 0,
        successRate: 100
    },
    {
        id: 5,
        code: "[DA00000103]",
        name: "Dự án nuôi em",
        stage: "Tư vấn/khảo sát",
        dept: "Ban Chỉ Huy Bộ Đội Biên Phòng",
        services: ["Camera AI", "Dịch vụ điện toán đám mây VNPT Cloud hợp tác SBĐ", "Hạ tầng Cloud"],
        staff: ["Phan Lương Bằng", "Trần Duy Tân"],
        date: "01/04/2026",
        time: "08:00",
        cost: 120000000,
        revenue: 0,
        successRate: 100
    },
    {
        id: 6,
        code: "[DA00000103]",
        name: "Dự án nuôi em",
        stage: "Tư vấn/khảo sát",
        dept: "Ban Chỉ Huy Bộ Đội Biên Phòng",
        services: ["Camera AI", "Dịch vụ điện toán đám mây VNPT Cloud hợp tác SBĐ", "Hạ tầng Cloud"],
        staff: ["Phan Lương Bằng", "Trần Duy Tân"],
        date: "01/04/2026",
        time: "08:00",
        cost: 120000000,
        revenue: 0,
        successRate: 100
    },
    {
        id: 7,
        code: "[DA00000103]",
        name: "Dự án nuôi em",
        stage: "Tư vấn/khảo sát",
        dept: "Ban Chỉ Huy Bộ Đội Biên Phòng",
        services: ["Camera AI", "Dịch vụ điện toán đám mây VNPT Cloud hợp tác SBĐ", "Hạ tầng Cloud"],
        staff: ["Phan Lương Bằng", "Trần Duy Tân"],
        date: "01/04/2026",
        time: "08:00",
        cost: 120000000,
        revenue: 0,
        successRate: 100
    },
    {
        id: 8,
        code: "[DA00000103]",
        name: "Dự án nuôi em",
        stage: "Tư vấn/khảo sát",
        dept: "Ban Chỉ Huy Bộ Đội Biên Phòng",
        services: ["Camera AI", "Dịch vụ điện toán đám mây VNPT Cloud hợp tác SBĐ", "Hạ tầng Cloud"],
        staff: ["Phan Lương Bằng", "Trần Duy Tân"],
        date: "01/04/2026",
        time: "08:00",
        cost: 120000000,
        revenue: 0,
        successRate: 100
    },
];

/* Data kế hoạch */
export const plan = [
    {
        id: 1,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Kế hoạch test",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "22/07/2026",
        time: "13:00",
        description: ""
    },
    {
        id: 2,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Kế hoạch test",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "22/07/2026",
        time: "09:22",
        description: ""
    },
    {
        id: 3,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Kế hoạch test",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "22/07/2026",
        time: "15:00",
        description: ""
    },
    {
        id: 4,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Lập báo cáo kinh tế kỹ thuật",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "20/07/2026",
        time: "13:40",
        description: ""
    },
    {
        id: 5,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Kế hoạch triển khai",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "24/07/2026",
        time: "14:20",
        description: ""
    },
    {
        id: 6,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Lập báo cáo đề xuất chủ trương",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "28/07/2026",
        time: "08:50",
        description: ""
    },
    {
        id: 7,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Làm hồ sơ đấu thầu",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "03/08/2026",
        time: "12:30",
        description: ""
    },
    {
        id: 8,
        name: "Triển khai hệ thống BBTC mới",
        stage: "Báo giá",
        dept: "Thuận Hải Energy",
        address: "1 Hùng Vương - Nha trang - Khánh Hoà",
        staff: ["Phan Lương Bằng"],
        date: "07/08/2026",
        time: "09:00",
        description: ""
    },
]

/* =================================================== */
/* Hàm helper duplicate data */
/* =================================================== */
const duplicateData = (baseItem, count) => {
    return Array.from({ length: count }, (_, index) => ({
        ...baseItem,
        id: index + 1,
    }));
};

export const mockOpportunity = duplicateData(baseOpportunity, 15);
export const mockProject = duplicateData(baseProject, 15);