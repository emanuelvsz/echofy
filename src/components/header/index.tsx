const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-4xl font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
          ECHOFY
        </h1>
        <p className="text-gray-500 font-medium">
          Bem-vindo de volta, <span className="text-[#00BA7C]">@nemo</span>
        </p>
      </div>
      <button className="bg-zinc-900 border border-white/10 px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-all">
        Meu Perfil
      </button>
    </header>
  );
};

export default Header;
