import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white justify-center align-top">
      <h1 className="text-lg font-bold text justify-center">Resume Analyzer</h1>
      <ul>
        <Link href="/"><span>Home</span></Link>
        <Link href="/profile"><span>History</span></Link>
        <Link href=""><span>Profile</span></Link>
      </ul>
    </nav>
  );
};

export default Navbar;