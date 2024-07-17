
function Header() {
  
  return (
    <header className="p-7 flex items-center w-screen">
      <div className="flex items-center gap-6 h-[34px] mr-[110px]">
        <img src="src/assets/header/menu.svg" alt="imagem do menu" />
        <img src="src/assets/header/logo.svg" alt="imagem da logo do gmail" />
        <h1 className="text-[32px] text-[#4A4D4C]">Gmail</h1>
      </div>
      <div className="flex justify-between w-[100%]">
        <div  className="flex bg-[#EAF1FB] w-[100%]">
          <img src="src/assets/header/search.svg" alt="imagem de uma lupa" />
          <input  type="search" className="bg-[#EAF1FB]"/>
          <img src="src/assets/header/instant_mix.svg" alt="imagem de um mix" />
        </div>
        <div className="flex">
          <img src="src/assets/header/help.svg" alt="imagem do simbolo de ajuda" />
          <img src="src/assets/header/settings.svg" alt="imagem do simbolo de configuração" />
          <img src="src/assets/header/apps.svg" alt="imagem do simbolo para abrir os apps" />
          <img src="src/assets/header/perfil.svg" alt="imagem da foto do perfil" />
        </div>
      </div>
    </header>
  );
}

export default Header;