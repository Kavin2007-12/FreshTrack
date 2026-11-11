import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'FreshTrack | Understand Freshness. Preserve Better.', description: 'Smart Food Shelf-Life & Preservation Analytics' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
