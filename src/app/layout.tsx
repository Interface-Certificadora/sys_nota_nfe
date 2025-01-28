import ProvidersChakra from "@/providers/ProvidersChakra";
import { roboto } from "./fonts";
import { Toaster } from "@/components/ui/toaster";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body  className={`${roboto.variable}`}>
      <ProvidersChakra>
      <Toaster />
        {children}
      </ProvidersChakra>
      </body>
    </html>
  );
}
