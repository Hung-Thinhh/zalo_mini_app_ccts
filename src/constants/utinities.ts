import * as Icon from "@components/icons";
import { Utinity } from "@dts";
import phongchongthientaiCT from "@assets/phongchongthientaiCT.jpg";
import NCA from "@assets/NCA.jpg";
import NIC from "@assets/NIC.jpg";
import mattrantoquoc from "@assets/mattrantoquoc.jpg";
import Benefit from "@assets/benefits.png";
import Renew from "@assets/files.png";

export const APP_UTINITIES: Array<Utinity> = [
    {
        key: "create-schedule-appointment",
        label: "Đặt lịch làm việc",
        icon: Icon.CalendarIcon,
        path: "/create-schedule-appointment",
    },
    {
        key: "info",
        label: "Thông tin - hướng dẫn",
        icon: Icon.BookIcon,
        path: "/information-guide",
    },
    {
        key: "feedback",
        label: "Góp ý - phản ánh",
        icon: Icon.PenIcon,
        path: "/feedbacks",
    },
    {
        key: "goverment",
        label: "Cổng dịch vụ công quốc gia",
        icon: Icon.GlobeIcon,
        link: "https://dichvucong.gov.vn/",
    },
];

export const CONTACTS: Array<Utinity> = [
    {
        key: "social-insurance",
        label: "Phòng chống thiên tai Việt Nam",
        link: "https://zalo.me/s/2425280099756812786/?gidzl=7Tro3Oegv1yPotGBYpJY7XhASmwGDkOU39qbNfravKHQdtLVnZNY6blAUWcTO-fE3vWkMMMapw4ZYohc6G",
        iconSrc: phongchongthientaiCT,
    },
    {
        key: "si-number",
        label: "Mặt Trận Tổ Quốc Cần Thơ",
        link: "https://zalo.me/s/4054468237400154169/?gidzl=ixBMR7hps02tfD1gU-tU0RIbrMHWxzWAelA3D6szsr3qyDCrDkpS3lMbt6DjkjHQeVU8CsNwUJbTU_FQ1W",
        iconSrc: mattrantoquoc,
    },
    {
        key: "internal-number",
        label: "Trung tâm Đổi mới sáng tạo Quốc gia",
        link: "https://zalo.me/1204547313859793414",
        iconSrc: NIC,
    },
    {
        key: "department",
        label: "Hiệp hội An ninh mạng quốc gia NCA",
        link: "https://zalo.me/3692094775513799677",
        iconSrc: NCA,
    },
];

export const PROCEDURES: Array<Utinity> = [
    {
        key: "renew",
        label: "Gia hạn thẻ BHYT trực tuyến",
        link: "",
        iconSrc: Renew,
    },
    {
        key: "benefit",
        label: "Các chế độ BHXH",
        link: "",
        iconSrc: Benefit,
    },
];
