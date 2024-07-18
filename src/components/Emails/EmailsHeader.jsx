import InboxIcon from '../../assets/icons/inbox.svg'
import SellIcon from '../../assets/icons/sell.svg'
import GroupIcon from '../../assets/icons/group.svg'
import InfoIcon from '../../assets/icons/info.svg'
import ForumIcon from '../../assets/icons/forum.svg'

const EmailsHeader = () => {
  return (
    <div className='flex justify-center items-center text-[var(--black-color)] gap-x-11 mt-12 text-xl'>
      <div className="flex gap-6 mr-24">
        <img className='w-5' src={InboxIcon} alt="inbox icon" />
        <h2 className='text-[var(--blue-color)]'>Primary</h2>
      </div>

      <div className="grid justify-center">
        <div className='flex items-center gap-4'>
            <img className='w-5' src={SellIcon} alt="" />
            <h2>Promotions</h2>
            <span className='bg-[var(--green-color)] text-white text-base p-2 rounded-3xl'>1 new</span>
        </div>
        <p className='text-base opacity-50'>LinkedIn Job Alerts</p>
      </div>

      <div className="grid justify-center mr-24">
        <div className='flex items-center gap-4'>
            <img className='w-5' src={GroupIcon} alt="" />
            <h2>Social</h2>
            <span className='bg-[var(--blue-color)] text-white text-base p-2 rounded-3xl'>1 new</span>
        </div>
        <p className='text-base opacity-50'>LinkedIn</p>
      </div>
      
      <div className="grid justify-center">
        <div className='flex items-center gap-4'>
            <img className='w-5' src={InfoIcon} alt="" />
            <h2>Updates</h2>
            <span className='bg-[var(--orange-color)] text-white text-base p-2 rounded-3xl'>1 new</span>
        </div>
        <p className='text-base opacity-50'>Internshala</p>
      </div>

      <div className="flex justify-center items-center gap-6">
        <img className='w-5' src={ForumIcon} alt="" />
        <h2>Forum</h2>
      </div>


    </div>
  )
}

export default EmailsHeader
