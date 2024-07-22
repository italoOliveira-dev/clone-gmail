import checkArrow from '../../assets/icons/check-arrow.svg'
import refresh from '../../assets/icons/refresh.svg'
import more from '../../assets/icons/more-vert.svg'
import chevron from '../../assets/icons/chevron.svg'

const EmailsTop = () => {
  return (
    <div>
      <div className='flex justify-between mb-7'>
        <div className='flex gap-x-8'>
          <img src={checkArrow} alt="" />
          <img src={refresh} alt="" />
          <img src={more} alt="" />
        </div>
        <div className='flex gap-x-5'>
            <p className='text-[var(--black-color)] opacity-50'>1-100 of 9,392</p>
            <img src={chevron} alt="" />
        </div>
      </div>
    </div>
  )
}

export default EmailsTop
