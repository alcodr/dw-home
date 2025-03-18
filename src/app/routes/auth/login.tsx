import { useNavigate, useSearchParams } from 'react-router';

import { AuthLayout } from '@/components/layouts/auth-layout';
import { paths } from '@/config/paths';
import { LoginForm } from '@/features/auth/components/login-form';
import { AuthLayoutSec } from '@/components/layouts/auth-layout-sec';
import { Button } from '@/components/ui/button';

const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <AuthLayoutSec title='Login'>
      <section className='inter mb-8'>
        <div className='text-3xl font-bold text-[#2E3139] mb-3'>Welcome Back</div>
        <div className='text-[14px] text-[#425583]'>Sign in to your account</div>
      </section>
      <LoginForm
        onSuccess={() => {
          navigate(
            `${redirectTo ? `${redirectTo}` : paths.app.dashboard.getHref()}`,
            {
              replace: true,
            },
          );
        }}
      />
      <div className='inter'>
        <hr className="hr-text gradient" data-content="or" />
        <Button className='w-full rounded-full py-5'>
          Sign in with Whatsapp
        </Button>
      </div>
    </AuthLayoutSec>
  );
};

export default LoginRoute;
