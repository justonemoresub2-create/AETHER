import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold text-primary-foreground">Ⓐ</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AETHER
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#personas" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Personas
            </Link>
            <Link href="#simulator" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Try It
            </Link>
            <Link href="#features" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Features
            </Link>
          </nav>

          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
