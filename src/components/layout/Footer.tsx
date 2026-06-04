import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <Link href="/" className="block mb-4">
            <Image src="/logo.png" alt="Besfact Architecture" width={120} height={40} className="h-6 w-auto" />
          </Link>
          <p className="text-neutral-500 max-w-xs text-sm">
            Crafting sustainable and innovative architectural solutions for a modern world.
          </p>
        </div>
        
        <div className="mt-8 md:mt-0 flex space-x-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 text-neutral-400">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 text-neutral-400">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-100 flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400">
        <p>© 2024 Besfact Architecture. All Rights Reserved.</p>
        <p>Built with precision.</p>
      </div>
    </footer>
  );
}
