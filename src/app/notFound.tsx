import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <p>page not found</p>
      <p>return here</p>
      <Link href="/">
        <button>Return</button>
      </Link>
    </div>
  );
}
