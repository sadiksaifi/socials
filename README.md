# Socials - A social media realtime chat app
This is a social media realtime chat app that allows users to sign in with google, add friends and chat with other users in realtime.

## Getting Started with the project

First, put all the environment variables in a `.env.local` file in the root of the project.

The variables are:
> Note: These variables can be accessed from the respective services.

```bash
NEXTAUTH_SECRET=
NEXTAUTH_URL=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

PUSHER_APP_ID=
PUSHER_APP_SECRET=
NEXT_PUBLIC_PUSHER_APP_KEY=
```

Second, run the development server:
> Note: You can also use alternative package managers like `yarn` or `pnpm`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack used
- [Next.js](https://nextjs.org/) - For frontend & backend as well.
- [TypeScript](https://www.typescriptlang.org/) - For robustness 
- [Axios](https://axios-http.com/) - For making http requests
- [Pusher](https://pusher.com/) - For realtime chat using websocket
- [Redis](https://redis.io/) - For storing user's data
- [NextAuth.js](https://next-auth.js.org/) - For authentication
- [React Hook Form](https://react-hook-form.com/) - For form validation
- [Zod](https://zod.dev/) - For schema validation
- [Lucide Icons](https://lucide.dev/) - For icons
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- Also several small libs like: [tailwind-merge](https://github.com/dcastil/tailwind-merge), [clsx](https://github.com/lukeed/clsx#readme), [cva](https://github.com/joe-bell/cva#readme) and etc.

## Directory Structure

```bash
src
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── friends
│   │   │   ├── accept
│   │   │   │   └── route.ts
│   │   │   ├── add
│   │   │   │   └── route.ts
│   │   │   └── deny
│   │   │       └── route.ts
│   │   └── message
│   │       └── send
│   │           └── route.ts
│   ├── (auth)
│   │   └── login
│   │       └── page.tsx
│   ├── dashboard
│   │   ├── add
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── chat
│   │   │   └── [chatId]
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── requests
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── assets
│   └── logo.svg
├── component
│   ├── AddFriendButton.tsx
│   ├── ChatInput.tsx
│   ├── FriendRequestsSidebarOption.tsx
│   ├── FriendRequests.tsx
│   ├── Icons.tsx
│   ├── Messages.tsx
│   ├── MobileChatLayout.tsx
│   ├── Provider.tsx
│   ├── SidebarChatList.tsx
│   ├── SignoutButton.tsx
│   ├── SocialsLogo.tsx
│   ├── ui
│   │   └── Button.tsx
│   └── UnseenChatToast.tsx
├── helper
│   ├── get-friends-by-user-id.ts
│   └── redis.ts
├── lib
│   ├── auth.ts
│   ├── db.ts
│   ├── pusher.ts
│   ├── utils.ts
│   └── validations
│       ├── add-friend.ts
│       └── message.ts
├── middleware.ts
└── types
    ├── db.d.ts
    ├── next-auth.d.ts
    ├── pusher.d.ts
    └── typings.d.ts
```

## License
This is licensed under GPL-3.0 license. See [LICENSE](https://choosealicense.com/licenses/gpl-3.0/). You are free to use this project for personal or commercial use. You can also modify this project as you wish.