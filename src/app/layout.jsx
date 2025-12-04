import Header from "./components/headerComponents/Header";
import "./globals.css";

export const metadata = {
  title: "Breno — Portfolio",
  description: "Front-end Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
