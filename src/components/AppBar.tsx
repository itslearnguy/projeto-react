import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";

export function AppBar() {
  return (
    <header className="bg-gradient h-32 w-full shadow-md flex flex-row items-center justify-between p-3 sticky top-0 left-0">
      <div className="flex flex-row items-center gap-2">
        <Link to="/">
          <img src="/anubis.png" alt="Anúbis" className="h-[130px]" />
        </Link>
        <Link
          to="/"
          className="text-orange-600 hover:text-orange-900 text-lg hidden md:block"
        >
          Página Inicial
        </Link>
      </div>
      <div>Sou uma AppBar!</div>
      <div className="flex flex-row items-center gap-2">
        <LinkButton to="criar-notepad">Criar Notepad</LinkButton>
      </div>
    </header>
  );
}
