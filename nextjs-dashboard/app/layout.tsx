import { montserrat } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Cristian David Trilleras</h1>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          hecho por cristian trilleras
        </footer>
        </body>
    </html>
  );
}
