import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'My First Next App',
  description: 'Generated by create next app',
  keywords: 'next,react,app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
