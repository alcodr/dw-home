import { Link, useSearchParams } from 'react-router';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useLogin, loginInputSchema } from '@/lib/auth';

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({
    onSuccess,
  });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div className='inter'>
      <Form
        onSubmit={(values) => {
          login.mutate(values);
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="email"
              label="Email"
              error={formState.errors['email']}
              registration={register('email')}
              className='rounded-xl'
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
              className='rounded-xl'
            />
            <div className='flex justify-between text-[12px] py-4'>
              <div>Remember Me</div>
              <div>Forgot Password</div>
            </div>
            <div>
              <Button
                isLoading={login.isPending}
                type="submit"
                className="w-full rounded-full bg-black py-5"
              >
                Sign in
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
