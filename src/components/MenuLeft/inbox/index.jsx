/* eslint-disable react/prop-types */
export default function Inbox({id, selecionado, quantidade, image, label, setInbox}) {

  
  const selecionaItem = () => {
    setInbox((statusAnterios) => statusAnterios.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selecionado: true
        };
      }
      return {
        ...item,
        selecionado: false
      };
    }));
  };

  const bgColor = selecionado ? 'bg-[#D3E3FD]' : '';
  const textBold = Number(quantidade) > 0 ? 'font-bold' : '';
  const display =  !(Number(quantidade) > 0) ? 'hidden' : '';

  return (
    <div className={`w-[355px] h-[47px] ${bgColor} rounded-r-[20px] flex items-center justify-between`} onClick={selecionaItem} >
      <div className='flex items-center gap-[26px] ml-[26px]'>
        <img 
          src={image}
          alt="Imagem do inbox"
          width={28} height={29} />
        <h4 className={`text-[#1C1B1F] text-xl ${textBold}`}>
          {label}
        </h4>
      </div>
      <span className={`text-[#1C1B1F] text-base font-bold mr-5 ${display}`}>
        {quantidade}
      </span>
    </div>
  );
}