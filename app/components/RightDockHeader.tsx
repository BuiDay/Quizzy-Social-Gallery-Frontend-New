// components/RightDockHeader.tsx
"use client";

type Item = { label: string; href: string; icon?: React.ReactNode };

const navItems: Item[] = [
    { label: "Home", href: "#" },
    { label: "Courses", href: "#courses" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
];

export default function RightDockHeader() {
    return (
        <aside
            className="
        fixed right-4 top-1/2 -translate-y-1/2 z-40
        flex flex-col items-center gap-4
        rounded-2xl border border-white/15 bg-white/10
        backdrop-blur-xl px-2 py-3
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
      "
            aria-label="Right vertical header"
        >
            {/* Logo nhỏ */}
            <a
                href="#"
                className="group relative flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/10"
                aria-label="Go to home"
            >
                <span className="text-lg font-bold tracking-tight text-white">Q</span>
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/30 transition" />
            </a>

            {/* Divider glow */}
            <div className="h-px w-10 bg-gradient-to-r from-white/0 via-white/40 to-white/0" />

            {/* Nav items */}
            <nav className="flex flex-col items-center gap-2">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="
              group relative flex size-11 items-center justify-center
              rounded-xl border border-white/15 bg-white/5
              text-white/80 hover:text-white
              hover:bg-white/10 hover:border-white/25
              transition
            "
                        aria-label={item.label}
                        title={item.label}
                    >
                        {/* Icon tối giản bằng SVG để khỏi cài lib */}
                        <Icon name={item.label} />
                        {/* Tooltip nhỏ bên trái */}
                        <span
                            className="
                pointer-events-none absolute right-full mr-2
                whitespace-nowrap rounded-md border border-white/15
                bg-black/60 px-2 py-1 text-xs text-white opacity-0
                backdrop-blur-md transition group-hover:opacity-100
              "
                        >
                            {item.label}
                        </span>
                    </a>
                ))}
            </nav>
            <button
                onClick={() => {
                    const html = document.documentElement;
                    const isDark = html.getAttribute("data-theme") === "dark";
                    html.setAttribute("data-theme", isDark ? "light" : "dark");
                }}
                className="
    mt-2 flex size-11 items-center justify-center
    rounded-xl border border-white/15 bg-white/10 hover:bg-white/15
    text-white/80 hover:text-white transition
  "
                aria-label="Toggle theme"
                title="Toggle theme"
            >
                <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 3v1" />
                    <path d="M12 20v1" />
                    <path d="M4.22 4.22l.7.7" />
                    <path d="M19.08 19.08l.7.7" />
                    <path d="M1 12h1" />
                    <path d="M22 12h1" />
                    <path d="M4.22 19.78l.7-.7" />
                    <path d="M19.08 4.92l.7-.7" />
                    <circle cx="12" cy="12" r="5" />
                </svg>
            </button>
            {/* CTA dọc (rotated) */}
            <a
                href="#subscribe"
                className="
          group relative mt-2 inline-flex h-36 w-10 items-center justify-center overflow-hidden
          rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 transition
        "
                aria-label="Subscribe"
                title="Subscribe"
            >
                <span
                    className="
            rotate-90 text-[10px] font-semibold tracking-[0.18em]
            text-white/90 group-hover:text-white
          "
                >
                    SUBSCRIBE
                </span>
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_120%_at_50%_50%,rgba(224,66,163,0.25),transparent_60%)]" />
            </a>
        </aside>
    );
}

function Icon({ name }: { name: string }) {
    const common = "fill-none stroke-current";
    switch (name) {
        case "Home":
            return <svg className="size-5" viewBox="0 0 24 24"><path className={common} strokeWidth="1.6" d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 19.5z" /><path className={common} strokeWidth="1.6" d="M9 21v-6h6v6" /></svg>;
        case "Courses":
            return <svg className="size-5" viewBox="0 0 24 24"><rect className={common} x="3" y="4" width="18" height="14" rx="2" strokeWidth="1.6" /><path className={common} d="M7 8h10M7 12h6" strokeWidth="1.6" /></svg>;
        case "Resources":
            return <svg className="size-5" viewBox="0 0 24 24"><path className={common} d="M4 6h12l4 4v8a2 2 0 0 1-2 2H4z" strokeWidth="1.6" /><path className={common} d="M16 6v4h4" strokeWidth="1.6" /></svg>;
        case "Contact":
            return <svg className="size-5" viewBox="0 0 24 24"><path className={common} d="M21 8v8a2 2 0 0 1-2 2H5l-2 2V6a2 2 0 0 1 2-2h9" strokeWidth="1.6" /><circle className={common} cx="16" cy="7" r="3" strokeWidth="1.6" /></svg>;
        default:
            return <svg className="size-5" viewBox="0 0 24 24"><circle className={common} cx="12" cy="12" r="8" strokeWidth="1.6" /></svg>;
    }
}
