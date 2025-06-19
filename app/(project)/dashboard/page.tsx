import { handleAuth } from '@/app/actions/handle-auth';
import { auth } from '@/app/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();
  console.log(session);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      {session?.user?.email && (
        <form action={handleAuth}>
          <button
            type="submit"
            className="bg-red-400 p-4 rounded-md hover:bg-red-500"
          >
            Logout
          </button>
        </form>
      )}

      <Link
        href="/pagamentos"
        className="bg-blue-400 p-4 rounded-md hover:bg-blue-500 text-white"
      >
        Pagamentos
      </Link>
    </div>
  );
}
