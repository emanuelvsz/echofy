import Button from "../../ui/button";
import LogoTitle from "../../ui/logo-title";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <LogoTitle size="md" />
        <p className="text-gray-500 font-medium">
          Bem-vindo de volta, <span className="text-[#00BA7C]">@nemo</span>
        </p>
      </div>
      <Button variant="outline">Meu Perfil</Button>
    </header>
  );
};

export default Header;
