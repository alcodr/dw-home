import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import logo from '@/assets/logo.svg';
import { Head } from '@/components/seo';
import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

import loginImg from '@/assets/login/login.png'

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayoutSec = ({ children, title }: LayoutProps) => {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const navigate = useNavigate();

  useEffect(() => {
    if (user.data) {
      navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [user.data, navigate, redirectTo]);

  return (
    <>
      <Head title={title} />
      <div className="bg-gray-50 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 h-svh items-center">
        <img src={loginImg} className='hidden md:block max-w-lg justify-self-end' />

        <div className="sm:mx-auto sm:w-full sm:max-w-md justify-self-end">
          <div className="px-10 md:px-4 py-8">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
