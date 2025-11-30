import Link from "next/link";

export default function T() {
  return (
    <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      Hi from T page!
      <Link href="/" className="text-white"> Go to home page </Link>
    </div>
  );
}
