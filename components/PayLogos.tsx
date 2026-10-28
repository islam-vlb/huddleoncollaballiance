/* eslint-disable @next/next/no-img-element */
export default function PayLogos({ light = false }: { light?: boolean }) {
  const h = light ? 17 : 20;
  const chip = 'flex items-center justify-center rounded bg-white px-1.5 py-[3px] ring-1 ring-black/10';
  return (
    <div className="flex flex-wrap items-center gap-1.5" aria-label="Accepted payment: Visa and Mastercard">
      <span className={chip}>
        <img src="/images/payments/visa.png" alt="Visa" height={h} width={Math.round(h * 368 / 120)} style={{ height: h, width: 'auto' }} />
      </span>
      <span className={chip}>
        <img src="/images/payments/mastercard.png" alt="Mastercard" height={h} width={Math.round(h * 192 / 120)} style={{ height: h, width: 'auto' }} />
      </span>
    </div>
  );
}
