export default function HeaderText({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
    return (
        <div className={className}>
            <h1 className="font-mono font-bold text-9xl">{title.toUpperCase()} /</h1>
            {subtitle && <h2 className="font-mono font-medium text-6xl mt-4 px-4">{subtitle.toLowerCase()}</h2>}
        </div>
    )
}