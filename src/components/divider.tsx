export default function Divider({ section = true }: { section?: boolean }) {
    return (
        <div className={`border-t border-teal-700 ${section ? 'mt-12' : ''}`}></div>
    )
}