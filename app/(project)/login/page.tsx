import { handleAuth } from '@/app/actions/handle-auth';
import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <form action={handleAuth}>
        <button
          className="cursor-pointer bg-red-400 rounded-4xl p-4"
          type="submit"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
