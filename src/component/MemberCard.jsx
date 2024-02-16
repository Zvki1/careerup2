import Profile from '../assets/profile.svg'
import Check from '../assets/checkmark-badge-01.svg'
// eslint-disable-next-line react/prop-types
const MemberCard = ({role,name}) => {
  return (
    <div className='bg-white flex flex-row py-3 pl-4 gap-3 items-center pr-24 rounded-xl'>
        <img src={Profile} alt="" />
        <div>
            <div className='flex flex-row gap-2'>
                <h3 className='text-black'>{name}</h3>
                <img src={Check} alt="check" />
            </div>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  ">{role}</span>
        </div>
    </div>
  )
}

export default MemberCard