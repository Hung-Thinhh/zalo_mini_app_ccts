// NewsSection.tsx
import React from "react";
import { Box, Text } from "zmp-ui";
import NewsList from "./NewsList";

const NewsSection = () => {
    const articles = [
        {
            id: "article_phung_duc_tien",
            title: "Thứ trưởng Phùng Đức Tiến: Ngành thủy sản - kiểm ngư...",
            author: "Nông nghiệp & Môi trường",
            link: "https://nongnghiepmoitruong.vn/thu-truong-phung-duc-tien-nganh-thuy-sankiem-ngu-phai-tran-tro-tu-thuc-tien-d760131.html",
            createdAt: new Date("2025-06-27T00:00:00Z"),
            thumb: "https://i.ex-cdn.com/nongnghiepmoitruong.vn/files/content/2025/06/27/z6748690412806_5609636cf5283bb44ba9a58052a31565-193655_6-194935.jpg"
        },
        {
            id: "article_dot_pha_cn",
            title: "Ngành thủy sản cần tập trung tạo đột phá...",
            author: "MAE",
            link: "https://mae.gov.vn/nganh-thuy-san-can-tap-trung-tao-ot-pha-ve-khoa-hoc-cong-nghe-cai-cach-manh-me-thu-tuc-hanh-chinh-ay-manh-hop-tac-quoc-te-19022.htm",
            createdAt: new Date("2025-07-24T00:00:00Z"),
            thumb: "https://i.ex-cdn.com/nongnghiepmoitruong.vn/files/content/2025/07/23/aaa-191931_53.jpg"
        },
        {
            id: "article_nang_tam_thuy_san",
            title: "Cải tiến công nghệ, kết nối thị trường nâng tầm thủy sản Việt",
            author: "Bnews",
            link: "https://bnews.vn/cai-tien-cong-nghe-ket-noi-thi-truong-nang-tam-thuy-san-viet/392055.html",
            createdAt: new Date("2025-10-17T00:00:00Z"),
            thumb: "https://image.bnews.vn/MediaUpload/Org/2025/10/07/201037-xuat-khau-nong-lam-thuy-san-9-thang-tang-14-.jpg"
        },
        {
            "author": "Thuỷ sản Việt Nam",
            "title": "Chi đội Kiểm ngư 3 giúp ngư dân yên tâm vươn khơi, bám biển",
            "link": "https://thuysanvietnam.com.vn/chi-doi-kiem-ngu-3-giup-ngu-dan-yen-tam-vuon-khoi-bam-bien/",
            "createdAt": new Date("2025-08-27T00:00:00Z"),
            "thumb": "https://thuysanvietnam.com.vn/wp-content/uploads/2025/08/6-kiem-ngu.jpg",
            "id": "article_kiem_ngu_3"
        },
        {
            "author": "Nông nghiệp & Môi trường",
            "title": "Hải trình cùng kiểm ngư: Sứ mệnh giữ ‘màu xanh’ cho biển cả",
            "link": "https://nongnghiepmoitruong.vn/hai-trinh-cung-kiem-ngu-bai-5-su-menh-giu-mau-xanh-cho-bien-ca-d759878.html",
            "createdAt": new Date("2025-07-03T00:00:00Z"),
            "thumb": "https://i.ex-cdn.com/nongnghiepmoitruong.vn/files/content/2025/07/03/z6744107935728_f96636db703fb249270e835c012f1c39-143116_701-163810.jpg",
            "id": "article_mau_xanh_bien_ca"
        }
    ];

    return (
        <Box p={4} mt={2}>
            <Text.Title size="small">Tin tức - Sự kiện</Text.Title>
            <NewsList data={articles} loading={false} />
        </Box>
    );
};

export default NewsSection;
