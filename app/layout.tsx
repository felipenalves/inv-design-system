import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Lora, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { AppSidebar } from '@/components/layout/sidebar'
import { AppHeader } from '@/components/layout/header'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'INV Design System',
  description: 'Design System INV — tokens, componentes e patterns',
  icons: {
    icon: '/favicon-dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="inv-theme"
        >
            {/* Header fixo 64px */}
            <AppHeader />

            {/* Body: sidebar + conteúdo, offset do header */}
            <div className="flex pt-16">
              <AppSidebar />

              {/* Main content — offset da sidebar */}
              <main className="min-h-[calc(100vh-4rem)] flex-1 overflow-auto md:pl-[260px]">
                {children}
              </main>
            </div>

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
