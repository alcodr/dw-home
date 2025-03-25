export const paths = {

  index: {
    home: {
      path: '/',
      getHref: () => '/',
    },
    contact_us: {
      path: '/contact-us',
      getHref: () => '/contact-us',
    },
    faq: {
      path: '/faq',
      getHref: () => '/faq',
    },
    about: {
      path: '/about',
      getHref: () => '/about',
    },
    privacy: {
      path: '/privacy-policy',
      getHref: () => '/privacy-policy',
    },
    terms: {
      path: '/terms-conditions',
      getHref: () => '/terms-conditions',
    },
  },
  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    account: {
      path: '',
      getHref: () => '/app',
    },
    profile: {
      path: 'profile',
      getHref: () => '/app/profile',
    },
    membership: {
      path: 'membership',
      getHref: () => '/app/membership',
    },
    transaction: {
      path: 'transaction',
      getHref: () => '/app/transaction',
    },
    address: {
      path: 'address',
      getHref: () => '/app/address',
    },
    // dashboard: {
    //   path: '',
    //   getHref: () => '/app',
    // },
    // discussions: {
    //   path: 'discussions',
    //   getHref: () => '/app/discussions',
    // },
    // discussion: {
    //   path: 'discussions/:discussionId',
    //   getHref: (id: string) => `/app/discussions/${id}`,
    // },
    // users: {
    //   path: 'users',
    //   getHref: () => '/app/users',
    // },
  },
} as const;
