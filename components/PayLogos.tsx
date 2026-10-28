/* eslint-disable @next/next/no-img-element */
export default function PayLogos({ light = false }: { light?: boolean }) {
  const h = light ? 26 : 28;
  const chip = 'flex items-center justify-center rounded-md bg-white px-2.5 py-1.5 ring-1 ring-black/10';
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Accepted payment: Visa and Mastercard">
      <span className={chip}>
        <img src="/images/payments/visa.png" alt="Visa" height={h} width={Math.round(h * 368 / 120)} style={{ height: h, width: 'auto' }} />
      </span>
      <span className={chip}>
        <img src="/images/payments/mastercard.png" alt="Mastercard" height={h} width={Math.round(h * 192 / 120)} style={{ height: h, width: 'auto' }} />
      </span>
    </div>
  );
}
