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

export const division = [
    { id: 1, name: 'Tổ Giải pháp A' },
    { id: 2, name: 'Tổ Giải pháp B&C' },
    { id: 3, name: 'Tổ Nghiên cứu phát triển' }
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

export const category = [
    { id: 1, name: 'Doanh nghiệp' },
    { id: 2, name: 'Hành chính sự nghiệp khác' },
    { id: 3, name: 'Tổ chức' },
    { id: 4, name: 'Hộ kinh doanh cá thể' },
    { id: 5, name: 'Khối Xây dựng & Bất động sản' },
    { id: 6, name: 'Khổi Giáo dục & Trường học' },
    { id: 7, name: 'Khối Ngân hàng & Tài chính' },
    { id: 8, name: 'Khối Hàng tiêu dùng nhanh' },
    { id: 9, name: 'Khối Cơ quan Hành chính Nhà nước' }
];

export const state = [
    { id: 1, name: 'Tìm năng' },
    { id: 2, name: 'Đã liên hệ' },
    { id: 3, name: 'Đàm phán' },
    { id: 4, name: 'Đang hợp tác' },
    { id: 5, name: 'Tạm ngưng' },
    { id: 6, name: 'Kết thúc' }
];

export const member = [
    { id: 1, name: 'Võ Thị Hồng Diệu', username: 'dieuvth.kha', team: 'Tổ Giải pháp A' },
    { id: 2, name: 'Vũ Lai Hiển', username: 'hienvl.kha', team: 'Tổ Giải pháp A' },
    { id: 3, name: 'Lữ Huỳnh Khánh Hưng', username: 'hunglhk.kha', team: 'Tổ Giải pháp A' },
    { id: 4, name: 'Nguyễn Thanh Huy', username: 'huynt.kha', team: 'Tổ Giải pháp A' },
    { id: 5, name: 'Nguyễn Thái Quốc Huy', username: 'huyntq.kha', team: 'Tổ Giải pháp A' },
    { id: 6, name: 'Trần Đăng Khoa', username: 'khoatd.kha', team: 'Tổ Giải pháp A' },
    { id: 7, name: 'Trần Đăng Khoa', username: 'khoatd.kha', team: 'Tổ Giải pháp A' },
    { id: 8, name: 'Trần Đăng Khoa', username: 'khoatd.kha', team: 'Tổ Giải pháp A' },
    { id: 9, name: 'Trần Đăng Khoa', username: 'khoatd.kha', team: 'Tổ Giải pháp A' }
];

export const role = [
    { id: 1, name: 'AM' },
    { id: 2, name: 'BA' },
    { id: 3, name: 'PM' },
    { id: 4, name: 'Lập trình' },
    { id: 5, name: 'Tester' },
    { id: 6, name: 'Quản lý' }
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
        staff: [
            {
                id: 201,
                name: "Quản trị CTN",
                username: "quantri",
                dept: "Phòng Quản trị",
                roles: ["AM", "BA", "Kiểm thử"]
            },
            {
                id: 202,
                name: "Đỗ Phương Liên",
                username: "liendp.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["PM", "Kiểm thử"]
            },
            {
                id: 203,
                name: "Lê Tuấn Huy",
                username: "huylt.kha",
                roles: ["PM"]
            },
            {
                id: 204,
                name: "Phan Lương Bằng",
                username: "bangpl.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["AM", "BA", "Quản lý"]
            },
            {
                id: 205,
                name: "Trần Duy Tân",
                username: "tantd.kha",
                roles: ["AM", "BA", "Kiểm thử"]
            }
        ],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50,
        description: ""
    },
    {
        id: 2,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        customerCode: "[KHA070768704]",
        customerName: "(Nguyễn Tiến Dũng) CÔNG TY CỔ PHẦN THUẬN HẢI ENERGY",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: [
            {
                id: 201,
                name: "Quản trị CTN",
                username: "quantri",
                dept: "Phòng Quản trị",
                roles: ["AM", "BA", "Kiểm thử"]
            },
            {
                id: 202,
                name: "Đỗ Phương Liên",
                username: "liendp.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["PM", "Kiểm thử"]
            },
            {
                id: 203,
                name: "Lê Tuấn Huy",
                username: "huylt.kha",
                roles: ["PM"]
            },
            {
                id: 204,
                name: "Phan Lương Bằng",
                username: "bangpl.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["AM", "BA", "Quản lý"]
            },
            {
                id: 205,
                name: "Trần Duy Tân",
                username: "tantd.kha",
                roles: ["AM", "BA", "Kiểm thử"]
            }
        ],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50,
        description: ""
    },
    {
        id: 3,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: [
            {
                id: 201,
                name: "Quản trị CTN",
                username: "quantri",
                dept: "Phòng Quản trị",
                roles: ["AM", "BA", "Kiểm thử"]
            },
            {
                id: 202,
                name: "Đỗ Phương Liên",
                username: "liendp.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["PM", "Kiểm thử"]
            },
            {
                id: 203,
                name: "Lê Tuấn Huy",
                username: "huylt.kha",
                roles: ["PM"]
            },
            {
                id: 204,
                name: "Phan Lương Bằng",
                username: "bangpl.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["AM", "BA", "Quản lý"]
            },
            {
                id: 205,
                name: "Trần Duy Tân",
                username: "tantd.kha",
                roles: ["AM", "BA", "Kiểm thử"]
            }
        ],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50,
        description: ""
    },
    {
        id: 4,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: [
            {
                id: 201,
                name: "Quản trị CTN",
                username: "quantri",
                dept: "Phòng Quản trị",
                roles: ["AM", "BA", "Kiểm thử"]
            },
            {
                id: 202,
                name: "Đỗ Phương Liên",
                username: "liendp.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["PM", "Kiểm thử"]
            },
            {
                id: 203,
                name: "Lê Tuấn Huy",
                username: "huylt.kha",
                roles: ["PM"]
            },
            {
                id: 204,
                name: "Phan Lương Bằng",
                username: "bangpl.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["AM", "BA", "Quản lý"]
            },
            {
                id: 205,
                name: "Trần Duy Tân",
                username: "tantd.kha",
                roles: ["AM", "BA", "Kiểm thử"]
            }
        ],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50,
        description: ""
    },
    {
        id: 5,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: [
            {
                id: 201,
                name: "Quản trị CTN",
                username: "quantri",
                dept: "Phòng Quản trị",
                roles: ["AM", "BA", "Kiểm thử"]
            },
            {
                id: 202,
                name: "Đỗ Phương Liên",
                username: "liendp.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["PM", "Kiểm thử"]
            },
            {
                id: 203,
                name: "Lê Tuấn Huy",
                username: "huylt.kha",
                roles: ["PM"]
            },
            {
                id: 204,
                name: "Phan Lương Bằng",
                username: "bangpl.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["AM", "BA", "Quản lý"]
            },
            {
                id: 205,
                name: "Trần Duy Tân",
                username: "tantd.kha",
                roles: ["AM", "BA", "Kiểm thử"]
            }
        ],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50,
        description: ""
    },
    {
        id: 6,
        code: "[BO00000080]",
        name: "Truyền thanh thông minh - xã Hoà Trí",
        stage: "Tìm hiểu nhu cầu",
        dept: "Phòng Văn hoá xã hội",
        services: ["VNPT SmartCloud", "VNPT WAF", "vnPortal", "VNPT DNS Protection", "VNPT Cloud Object Storage", "VNPT Cloud - Advanced Object Storage"],
        staff: [
            {
                id: 201,
                name: "Quản trị CTN",
                username: "quantri",
                dept: "Phòng Quản trị",
                roles: ["AM", "BA", "Kiểm thử"]
            },
            {
                id: 202,
                name: "Đỗ Phương Liên",
                username: "liendp.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["PM", "Kiểm thử"]
            },
            {
                id: 203,
                name: "Lê Tuấn Huy",
                username: "huylt.kha",
                roles: ["PM"]
            },
            {
                id: 204,
                name: "Phan Lương Bằng",
                username: "bangpl.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["AM", "BA", "Quản lý"]
            },
            {
                id: 205,
                name: "Trần Duy Tân",
                username: "tantd.kha",
                roles: ["AM", "BA", "Kiểm thử"]
            }
        ],
        date: "07/05/2026",
        time: "16:25",
        expectedValue: 160000000,
        probability: 50,
        description: ""
    }, {
        id: 7,
        code: "[BO00000081]",
        name: "Số hóa quy trình quản lý văn bản bệnh viện",
        stage: "Lập báo giá",
        dept: "Sở Y tế Khánh Hòa",
        services: ["VNPT HIS", "VNPT LIS"],
        staff: [
            {
                id: 124,
                name: "Nguyễn Văn A",
                username: "anv.kha",
                roles: ["AM"]
            },
            {
                id: 121,
                name: "Phạm Thị B",
                username: "bpt.kha",
                roles: ["BA"]
            }
        ],
        date: "10/05/2026",
        time: "09:15",
        expectedValue: 450000000,
        probability: 80,
        description: ""
    },
    {
        id: 8,
        code: "[BO00000082]",
        name: "Triển khai hạ tầng Internet dedicated",
        stage: "Thương thảo hợp đồng",
        dept: "Công ty Cổ phần Thủy sản",
        services: ["Metronet", "Internet Leasedline"],
        staff: [
            {
                id: 25,
                name: "Nguyễn Vũ Linh",
                username: "linhnv.kha",
                roles: ["Tester"]
            },
            {
                id: 15,
                name: "Vương Hồng Quân",
                usernmae: "quanvh.kha",
                roles: ["BA", "PM"]
            },
            {
                id: 61,
                name: "Ngô Việt Thắng",
                username: "thangnv.kha",
                roles: ["AM", "BA"]
            }
        ],
        date: "12/05/2026",
        time: "14:00",
        expectedValue: 85000000,
        probability: 90,
        description: ""
    },
];

export const optServices = [
    { id: 1, name: 'VNPT SmartCloud', desc: 'Dịch vụ điện toán đám mây VNPT Cloud tự phát triển' },
    { id: 2, name: 'VNPT SmartCloud', desc: 'Dịch vụ điện toán đám mây VNPT Cloud tự phát triển' },
    { id: 3, name: 'VNPT SmartCloud', desc: 'Dịch vụ điện toán đám mây VNPT Cloud tự phát triển' },
    { id: 4, name: 'VNPT SmartCloud', desc: 'Dịch vụ điện toán đám mây VNPT Cloud tự phát triển' },
    { id: 5, name: 'VNPT SmartCloud', desc: 'Dịch vụ điện toán đám mây VNPT Cloud tự phát triển' },
];

export const optDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.";

export const optAttachments = [
    { id: 1, name: 'danhsachbophan14042026...xlsx', type: 'excel' },
    { id: 2, name: 'danhsachbophan14042026...xlsx', type: 'word' },
    { id: 3, name: 'danhsachbophan14042026...xlsx', type: 'pdf' },
    { id: 4, name: 'danhsachbophan14042026...xlsx', type: 'image' },
];

export const optHistories = [
    {
        id: 101,
        opportunityId: 1,
        userInitial: "TDT",
        userAvatarBg: "#F0A2A2",
        stage: "Tìm hiểu nhu cầu",
        date: "07/05/2026",
        time: "16:25",
        canEdit: true,
        participants: [
            "Hoàng Anh Nam",
            "Vương Hồng Quân"
        ],
        contactPerson: {
            name: "Nguyễn Đạt",
            dept: "Sở Nội vụ tỉnh Khánh Hòa",
            phone: "0844931111"
        },
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
        attachments: [
            {
                id: "att_1",
                name: "danhsachbophan14042026.xlsx",
                type: "excel",
                url: ""
            },
            {
                id: "att_2",
                name: "danhsachbophan14042026.docx",
                type: "word",
                url: ""
            },
            {
                id: "att_3",
                name: "danhsachbophan14042026.pdf",
                type: "pdf",
                url: ""
            },
            {
                id: "att_4",
                name: "danhsachbophan14042026.png",
                type: "image",
                url: ""
            }
        ]
    },
    {
        id: 102,
        opportunityId: 1,
        userInitial: "NVT",
        userAvatarBg: "#81C784",
        stage: "Lập báo giá",
        date: "08/05/2026",
        time: "09:30",
        canEdit: false,
        participants: [
            "Ngô Việt Thắng",
            "Trần Duy Tân"
        ],
        contactPerson: {
            name: "Lê Văn Hùng",
            dept: "Phòng CNTT",
            phone: "0912345678"
        },
        content: "Đã làm việc với bộ phận kỹ thuật để thống nhất danh mục dịch vụ VNPT SmartCloud và VNPT WAF.",
        attachments: [
            {
                id: "att_5",
                name: "baogia_truyenthanh_v1.pdf",
                type: "pdf",
                url: ""
            }
        ]
    },
    {
        id: 103,
        opportunityId: 1,
        userInitial: "QTC",
        userAvatarBg: "#64B5F6",
        stage: "Khảo sát thực tế",
        date: "06/05/2026",
        time: "14:00",
        canEdit: false,
        participants: [
            "Quản trị CTN"
        ],
        contactPerson: {
            name: "Nguyễn Đạt",
            dept: "Sở Nội vụ tỉnh Khánh Hòa",
            phone: "0844931111"
        },
        content: "Tiến hành khảo sát vị trí lắp đặt hệ thống loa truyền thanh thông minh tại xã Hoà Trí.",
        attachments: []
    },
    {
        id: 104,
        opportunityId: 7,
        userInitial: "NVA",
        userAvatarBg: "#FFB74D",
        stage: "Lập báo giá",
        date: "10/05/2026",
        time: "09:15",
        canEdit: true,
        participants: [
            "Nguyễn Văn A",
            "Phạm Thị B"
        ],
        contactPerson: {
            name: "Trần Minh Tâm",
            dept: "Sở Y tế Khánh Hòa",
            phone: "0905123456"
        },
        content: "Gửi dự thảo phương án triển khai phần mềm VNPT HIS và VNPT LIS.",
        attachments: [
            {
                id: "att_6",
                name: "phuongan_trienkhai_his.docx",
                type: "word",
                url: ""
            }
        ]
    }
];

export const optMembers = [
    {
        id: 201,
        opportunityId: 1,
        name: "Quản trị CTN",
        username: "quantri",
        dept: "",
        roles: ["AM", "BA", "Kiểm thử"]
    },
    {
        id: 202,
        opportunityId: 1,
        name: "Đỗ Phương Liên",
        username: "liendp.kha",
        dept: "Tổ Nghiên cứu phát triển",
        roles: ["PM", "Kiểm thử"]
    },
    {
        id: 203,
        opportunityId: 1,
        name: "Lê Tuấn Huy",
        username: "huylt.kha",
        dept: "",
        roles: ["PM"]
    },
    {
        id: 204,
        opportunityId: 1,
        name: "Phan Lương Bằng",
        username: "bangpl.kha",
        dept: "Tổ Nghiên cứu phát triển",
        roles: ["AM", "BA", "Quản lý"]
    },
    {
        id: 205,
        opportunityId: 1,
        name: "Trần Duy Tân",
        username: "tantd.kha",
        dept: "",
        roles: ["AM", "BA", "Kiểm thử"]
    },
    {
        id: 206,
        opportunityId: 1,
        name: "Ngô Việt Thắng",
        username: "thangnv.kha",
        dept: "Phòng Giải pháp Doanh nghiệp",
        roles: ["AM", "Quản lý"]
    },
    {
        id: 207,
        opportunityId: 1,
        name: "Nguyễn Thị Thu Hà",
        username: "hantt.kha",
        dept: "",
        roles: ["BA"]
    },
    {
        id: 208,
        opportunityId: 7,
        name: "Nguyễn Văn A",
        username: "anv.kha",
        dept: "Phòng Kỹ thuật",
        roles: ["PM", "BA"]
    },
    {
        id: 209,
        opportunityId: 7,
        name: "Phạm Thị B",
        username: "bpt.kha",
        dept: "Phòng Triển khai",
        roles: ["Kiểm thử"]
    }
];

export const optPlans = [
    {
        id: 301,
        opportunityId: 1,
        date: "07/05/2026",
        time: "16:25",
        title: "Kế hoạch triển khai hệ thống ERP",
        location: "1 Hùng Vương - Nha Trang - Khánh Hòa",
        relatedUsers: [],
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 302,
        opportunityId: 1,
        date: "07/05/2026",
        time: "16:25",
        title: "Kế hoạch triển khai hệ thống ERP",
        location: "1 Hùng Vương - Nha Trang - Khánh Hòa",
        relatedUsers: [
            {
                id: 201,
                name: "Quản trị CTN",
                username: "quantri",
                roles: ["AM", "BA", "Kiểm thử"]
            },
            {
                id: 202,
                name: "Đỗ Phương Liên",
                username: "liendp.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["PM", "Kiểm thử"]
            },
            {
                id: 203,
                name: "Lê Tuấn Huy",
                username: "huylt.kha",
                roles: ["PM"]
            },
            {
                id: 204,
                name: "Phan Lương Bằng",
                username: "bangpl.kha",
                dept: "Tổ Nghiên cứu phát triển",
                roles: ["AM", "BA", "Quản lý"]
            },
            {
                id: 205,
                name: "Trần Duy Tân",
                username: "tantd.kha",
                roles: ["AM", "BA", "Kiểm thử"]
            }
        ],
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 303,
        opportunityId: 1,
        date: "12/05/2026",
        time: "08:30",
        title: "Demo chạy thử tính năng VNPT SmartCloud",
        location: "Phòng họp số 2 - VNPT Khánh Hòa",
        relatedUsers: [
            { id: "u1", name: "Quản trị CTN", username: "quantri", role: ["PM"] },
            { id: "u2", name: "Ngô Việt Thắng", username: "thangnv.kha", role: ["BA", "Kiểm thử"] }
        ],
        content: "Chuẩn bị kịch bản demo tính năng quản trị tài nguyên Cloud và bảo mật DNS Protection cho khách hàng."
    },
    {
        id: 304,
        opportunityId: 7,
        date: "15/05/2026",
        time: "14:00",
        title: "Họp thống nhất quy trình VNPT HIS với Sở Y tế",
        location: "Sở Y tế tỉnh Khánh Hòa",
        relatedUsers: [
            { id: "u8", name: "Nguyễn Văn A", username: "anv.kha", role: ["AM"] },
            { id: "u9", name: "Phạm Thị B", username: "bpt.kha", role: ["BA"] }
        ],
        content: "Thảo luận các điều khoản tích hợp hệ thống LIS hiện tại của bệnh viện vào phần mềm HIS mới."
    }
];

export const optLogs = [
    {
        id: 401,
        opportunityId: 1,
        reviewTitle: "Rà soát đột xuất khách hàng trọng điểm",
        date: "26/05/2026",
        time: "14:54",
        level: "Cấp 3",
        reviewerName: "Phan Lương Bằng",
        status: "confirmed",
        statusLabel: "Đã xác nhận rà soát",
        comment: "",
        attachment: null
    },
    {
        id: 402,
        opportunityId: 1,
        reviewTitle: "Rà soát đột xuất khách hàng trọng điểm",
        date: "26/05/2026",
        time: "14:54",
        level: "Cấp 3",
        reviewerName: "Phan Lương Bằng",
        status: "commented",
        statusLabel: "Đã cho ý kiến",
        comment: "đã rà soát dự án này update",
        attachment: null
    },
    {
        id: 403,
        opportunityId: 1,
        reviewTitle: "Rà soát đột xuất khách hàng trọng điểm",
        date: "26/05/2026",
        time: "14:54",
        level: "Cấp 3",
        reviewerName: "Phan Lương Bằng",
        status: "commented",
        statusLabel: "Đã cho ý kiến",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
        attachment: {
            id: "img_log_1",
            name: "645909d5-4324-437c-ad5b-496a689c634c.jpg",
            type: "image",
            url: ""
        }
    },
    {
        id: 404,
        opportunityId: 7,
        reviewTitle: "Rà soát định kỳ Quý II/2026",
        date: "10/05/2026",
        time: "09:15",
        level: "Cấp 2",
        reviewerName: "Lê Tuấn Huy",
        status: "confirmed",
        statusLabel: "Đã xác nhận rà soát",
        comment: "Tiến độ triển khai đáp ứng yêu cầu của Sở Y tế.",
        attachment: null
    }
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
];

/* Data khách hàng */
const baseCustomer = {
    code: "[KHA070768704]",
    name: "(Nguyễn Tiến Dũng) CÔNG TY CỔ PHẦN THUẬN HẢI ENERGY",
    tax: "0124624562",
    mail: "energy@gmail.com",
    contact: "0775566138",
    phone: "0915162897",
    mess: "0352925631",
    category: "Quản lý doanh nghiệp",
    toc: "Doanh nghiệp",
    foundingDate: "24/04/2019",
    fund: 1000000000,
    address: "52 Lê Hồng Phong - Nha Trang - Khánh Hoà",
    state: "Tiềm năng"
}

const baseContact = {
    id: 1,
    code: "[KHA070761408]",
    name: "Lê Thị Bảo Ngọc",
    tax: "0124624562",
    email: "abcc@gmail.com",
    phone: "543162897",
    mobile: "0412162897",
    message: "0748925631",
    position: "Quản lý doanh nghiệp",
    toc: "Doanh nghiệp",
    foundingDate: "04/12/2014",
    fund: 1000000000,
    address: "29 Tố Hữu - Nha Trang - Khánh Hoà",
    state: "Đã liên hệ",
    status: "Hoạt động"
}

/* Data kỷ niệm */
export const anniversaryType = [
    { id: 1, name: 'Sinh nhật' },
    { id: 2, name: 'Ngày ký hợp đồng' },
    { id: 3, name: 'Ngày thành lập' }
];

export const anniversary = [
    {
        id: 1,
        title: 'Sinh nhật',
        icon: 'birthday',
        date: '03/06/2026',
        calendarType: 'Dương lịch',
        hasReminder: true,
        note: 'Khách hàng năm ngoái đặt bánh kem 2 tầng vị chocolate, có yêu cầu ship tận công ty trước 9h sáng và tặng kèm hoa hồng đỏ. Năm nay nên đặt trước ít nhất 3 ngày để kịp chuẩn bị.'
    },
    {
        id: 2,
        title: 'Ngày ký hợp đồng',
        icon: 'contract',
        date: '05/08/2026',
        calendarType: 'Âm lịch',
        hasReminder: true,
        note: ''
    },
    {
        id: 3,
        title: 'Ngày thành lập',
        icon: 'company',
        date: '21/07/2026',
        calendarType: 'Dương lịch',
        hasReminder: true,
        note: ''
    },
    {
        id: 4,
        title: 'Ngày thành lập',
        icon: 'company',
        date: '21/07/2026',
        calendarType: 'Dương lịch',
        hasReminder: true,
        note: ''
    },
    {
        id: 5,
        title: 'Ngày thành lập',
        icon: 'company',
        date: '21/07/2026',
        calendarType: 'Dương lịch',
        hasReminder: true,
        note: ''
    },
];

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
export const mockCustomer = duplicateData(baseCustomer, 15);
export const mockContact = duplicateData(baseContact, 4);
export const addContact = duplicateData(baseContact, 10);