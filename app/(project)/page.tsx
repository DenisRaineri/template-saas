import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Template Saas',
  description: 'Template Saas',
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className="text-4xl font-bold">Landing Page</h1>
      <Link href={'/login'}>
        <button className="cursor-pointer bg-red-400 p-3 rounded-2xl w-24">
          Login
        </button>
      </Link>
    </div>
  );
}
