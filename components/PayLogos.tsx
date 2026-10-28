export default function PayLogos({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2" aria-label="Accepted payment: Visa and Mastercard">
      <span className={`rounded-md px-3 py-1.5 font-display text-sm font-extrabold italic tracking-wide ${light ? 'bg-white text-[#1a1f71]' : 'bg-indigo-soft text-[#1a1f71]'}`}>VISA</span>
      <span className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 ${light ? 'bg-white' : 'bg-indigo-soft'}`}>
        <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
          <circle cx="9" cy="8" r="7" fill="#eb001b" />
          <circle cx="17" cy="8" r="7" fill="#f79e1b" fillOpacity="0.9" />
        </svg>
        <span className="text-xs font-bold text-ink">Mastercard</span>
      </span>
    </div>
  );
}
