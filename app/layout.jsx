import "./globals.css";

export const metadata = {
  title: "다음 장면 | 보드게임 프로토타입",
  description: "카드 입찰, 개인 보드 구성, 비공개 목표, 스토리텔링 보드게임 다음 장면의 고품질 설명형 프로토타입"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
