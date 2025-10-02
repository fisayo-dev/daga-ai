import { getSession } from '@/actions/auth';
import LoginComponent from '@/components/LoginComponent';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  let session = null;
  try {
    session = await getSession();
  } catch (error) {
    // Handle AppwriteException (e.g., missing scopes or no session)
    console.error('Session check failed:', error);
  }

  if (session) {
    redirect('/');
  }
  return <LoginComponent />;
};

export default LoginPage;