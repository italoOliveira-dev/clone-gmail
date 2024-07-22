
export default function Label() {
  return (
    <div className='mt-[20px]'>
      <div className='w-[355px] h-[47px] flex items-center justify-between pl-[34px] pr-3'>
        <h3 className='text-[#1C1B1F] text-2xl font-medium'>
          Labels
        </h3>
        <img
          src="./src/assets/icons/add.svg"
          alt="Imagem da figura add"
          width={33} height={30} />
      </div>
      <ul>
        <li className='flex items-center justify-between w-[355px] h-[47px] pl-[34px] pr-5'>
          <div className='flex items-center gap-[26px]'>
            <div className='flex items-center'>
              <div className='w-[17px] h-[19px] bg-[#474849]'></div>
              <img
                src="/src/assets/icons/polygon.svg"
                alt="Imagem da figura add"
                width={8} height={19}
              />
            </div>
            <div>
              <span className='text-[#1C1B1F] text-xl font-bold'>done</span>
            </div>
          </div>
          <span className='text-[#000000] text-base mt-[5px]'>13</span>
        </li>

        <li className='flex items-center justify-between w-[355px] h-[47px] pl-[34px] pr-5'>
          <div className='flex items-center gap-[26px]'>
            <div className='flex items-center'>
              <div className='w-[17px] h-[19px] bg-[#474849]'></div>
              <img
                src="/src/assets/icons/polygon.svg"
                alt="Imagem da figura add"
                width={8} height={19}
              />
            </div>
            <div>
              <span className='text-[#1C1B1F] text-xl font-bold'>Jobs</span>
            </div>
          </div>
          <span className='text-[#000000] text-base mt-[5px]'>21</span>
        </li>

        <li className='flex items-center justify-between w-[355px] h-[47px] pl-[34px] pr-5'>
          <div className='flex items-center gap-[26px]'>
            <div className='flex items-center'>
              <div className='w-[17px] h-[19px] bg-[#474849]'></div>
              <img
                src="/src/assets/icons/polygon.svg"
                alt="Imagem da figura add"
                width={8} height={19}
              />
            </div>
            <span className='text-[#1C1B1F] text-xl'>sumit sir</span>
          </div>
        </li>

      </ul>

      <div className='[355px] h-[47px] flex items-center gap-[26px] pl-[34px]'>
            <img
              className='ml-3'
              src="/src/assets/icons/expand_more.svg"
              alt="Imagem do inbox"
              width={14} height={10} />
            <h4 className={`text-[#1C1B1F] text-xl`}>
              More
            </h4>
          </div>
    </div>
  );
}