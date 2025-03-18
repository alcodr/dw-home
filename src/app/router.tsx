import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';
import { ProtectedRoute } from '@/lib/auth';

import {
  default as AppRoot,
  ErrorBoundary as AppRootErrorBoundary,
} from './routes/app/root';

import IndexRoot from './routes/root';

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.index.home.path,
      element: (
        <IndexRoot />
      ),
      children: [
        {
          path: paths.index.home.path,
          lazy: () =>
            import('./routes/home').then(
              convert(queryClient),
            ),
        },
        {
          path: paths.index.contact_us.path,
          lazy: () =>
            import('./routes/landing/contact-us').then(
              convert(queryClient),
            ),
        },
        {
          path: paths.index.faq.path,
          lazy: () =>
            import('./routes/landing/faq').then(
              convert(queryClient),
            ),
        },
        {
          path: paths.index.about.path,
          lazy: () =>
            import('./routes/landing/about').then(
              convert(queryClient),
            ),
        },
        {
          path: paths.index.privacy.path,
          lazy: () =>
            import('./routes/landing/privacy').then(
              convert(queryClient),
            ),
        },
        {
          path: paths.index.terms.path,
          lazy: () =>
            import('./routes/landing/terms').then(
              convert(queryClient),
            ),
        }
      ]
    },
    {
      path: paths.auth.register.path,
      lazy: () => import('./routes/auth/register').then(convert(queryClient)),
    },
    {
      path: paths.auth.login.path,
      lazy: () => import('./routes/auth/login').then(convert(queryClient)),
    },
    {
      path: paths.app.root.path,
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.discussions.path,
          lazy: () =>
            import('./routes/app/discussions/discussions').then(
              convert(queryClient),
            ),
        },
        {
          path: paths.app.discussion.path,
          lazy: () =>
            import('./routes/app/discussions/discussion').then(
              convert(queryClient),
            ),
        },
        {
          path: paths.app.users.path,
          lazy: () => import('./routes/app/users').then(convert(queryClient)),
        },
        {
          path: paths.app.profile.path,
          lazy: () => import('./routes/app/profile').then(convert(queryClient)),
        },
        {
          path: paths.app.dashboard.path,
          lazy: () =>
            import('./routes/app/dashboard').then(convert(queryClient)),
        },
        {
          path: paths.app.membership.path,
          lazy: () =>
            import('./routes/app/membership').then(convert(queryClient)),
        },
        {
          path: paths.app.account.path,
          lazy: () =>
            import('./routes/app/account').then(convert(queryClient)),
        },
        {
          path: paths.app.transaction.path,
          lazy: () =>
            import('./routes/app/transaction').then(convert(queryClient)),
        },
        {
          path: paths.app.address.path,
          lazy: () =>
            import('./routes/app/address').then(convert(queryClient)),
        },
      ],
    },
    {
      path: '*',
      lazy: () => import('./routes/not-found').then(convert(queryClient)),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
