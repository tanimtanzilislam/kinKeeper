import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          KinKeeper
        </Link>
      </div>

      <div className="navbar-end gap-2">
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
        <Link href="/timeline" className="btn btn-ghost">
          Timeline
        </Link>
        <Link href="/stats" className="btn btn-ghost">
          Stats
        </Link>
      </div>
    </header>
  );
};
