import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import YandexMEtrika from "./components/YandexMetrika/YandexMEtrika";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Инвестиции и продажа доли шахты в Кузбассе — окупаемость 4 года.",
  description:
    "Приобретите долю или инвестируйте в перспективный горнодобывающий проект. Шахта с подтверждёнными запасами и высоким потенциалом прибыли. Полная информация о лицензиях, геологии и финансовых показателях.",
  alternates: {
    canonical: "https://invest42.ru",
  },
  keywords: [
    "инвестиции в шахту",
    "продажа шахты",
    "добыча полезных ископаемых",
    "горнодобывающий бизнес",
    "купить шахту",
    "инвестировать в шахту",
    "инвестиционный проект",
    "доход от добычи",
    "горнорудная промышленность",
  ],
  openGraph: {
    title: "Инвестиции и продажа шахты — выгодные предложения",
    description:
      "Участвуйте в покупке или инвестировании в действующую шахту. Прозрачные условия, высокая доходность и надёжное партнёрство.",
    url: "https://invest42.ru", // замени на реальный домен
    type: "website",
    images: [
      {
        url: "https://invest42.ru/og-image.jpg", // можно добавить баннер
        width: 1200,
        height: 630,
        alt: "Инвестиции в шахту",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <YandexMEtrika />
        <Footer />
      </body>
    </html>
  );
}
