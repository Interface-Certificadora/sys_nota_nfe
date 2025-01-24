import ProvidersChakra from "@/providers/ProvidersChakra";
import { roboto } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${roboto.variable}`}>
      <ProvidersChakra>
        {children}
      </ProvidersChakra>
      </body>
    </html>
  );
}
