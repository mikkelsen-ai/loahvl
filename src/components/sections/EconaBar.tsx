export default function EconaBar() {
  return (
    <div className="bg-blue-50 border-t border-blue-100 py-3 px-4">
      <div className="max-w-6xl mx-auto flex items-center gap-3 text-sm">
        <span className="text-gray-500">Faglig partner:</span>
        <span className="font-bold text-primary">Econa HVL</span>
        <a
          href="https://www.econa.no/student"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-accent hover:underline text-sm"
        >
          econa.no/student →
        </a>
      </div>
    </div>
  )
}
