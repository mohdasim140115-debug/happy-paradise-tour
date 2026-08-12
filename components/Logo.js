import Image from "next/image";

export default function Logo({ className = "", priority = false }) {
  return (
    <div className={`inline-flex shrink-0 items-center rounded-lg bg-white px-2 py-1 shadow-sm ${className}`}>
      <Image
        src="/logo1.png"
        alt="Happy Paradise Tour & Travels — See Paradise With Us"
        width={1341}
        height={784}
        priority={priority}
        className="h-12 w-auto object-contain sm:h-14"
      />
    </div>
  );
}
