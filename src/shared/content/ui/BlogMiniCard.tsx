import Link from "next/link";

interface BlogMiniCardProps {
  href: string;
  title: string;
  description?: string;
}

export function BlogMiniCard({ href, title, description }: BlogMiniCardProps) {
  return (
    <Link
      href={href}
      className="bg-linear-to-r from-purple-200 to-pink-300
                 group flex h-full flex-col rounded-2xl border border-border/60 bg-background/60 p-4 text-left transition
                 hover:-translate-y-0.5 hover:border-border hover:bg-background/80 hover:shadow-sm
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 no-underline! hover:no-underline! **:no-underline! "
    >
      <h3 className="text-3xl! text-center font-bold leading-snug">{title}</h3>

      {description && (
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>
      )}

      <span className="mt-auto inline-flex justify-end gap-2 text-sm font-medium text-foreground/90">
        Открыть подборку
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
