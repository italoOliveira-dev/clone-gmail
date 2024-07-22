
function Header() {
  
  return (
    <header className="p-7 flex items-center w-screen">
      <div className="flex items-center gap-6 h-[34px] mr-[110px]">
        <img src="src/assets/header/menu.svg" alt="imagem do menu" />
        <img src="src/assets/header/logo.svg" alt="imagem da logo do gmail" />
        <h1 className="text-[32px] font-normal text-[#4A4D4C]">Gmail</h1>
      </div>
      <div className="flex justify-between w-[100%] h-[64px]">
        <div  className="flex gap-3 flex-nowrap bg-[#EAF1FB] flex-grow ml-28 mr-80 rounded-[30px] px-5">
          <img src="src/assets/header/search.svg" alt="imagem de uma lupa" width={34} height={37}/>
          <input  type="search" className="bg-[#EAF1FB] flex-grow outline-none text-[#5D605F]" placeholder="Search mail"/>
          <img src="src/assets/header/instant_mix.svg" alt="imagem de um mix" width={34} height={37}/>
        </div>
        <div className="flex gap-[30px] w-64">
          <img src="src/assets/header/help.svg" alt="imagem do simbolo de ajuda" width={34} height={37}/>
          <img src="src/assets/header/settings.svg" alt="imagem do simbolo de configuração" width={34} height={37}/>
          <img src="src/assets/header/apps.svg" alt="imagem do simbolo para abrir os apps" width={34} height={37}/>
          
          <img src="src/assets/header/perfil.svg" alt="imagem da foto do perfil" width={34} height={37}/>
        </div>
      </div>
    </header>
  );
}

export default Header;