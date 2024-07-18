/* eslint-disable react/prop-types */
import Checkbox from "../../assets/icons/check_box_outline_blank.svg"
import Star from "../../assets/icons/star.svg"
import Label from "../../assets/icons/label_important.svg"

const EmailsText = ({ mailName, mailTitle, mail }) => {
  return (
    <div className="flex justify-center mt-5 border-t-2 pt-4">
      <div className="flex gap-4 mr-52">
        <img src={Checkbox} alt="" />
        <img src={Star} alt="" />
        <img src={Label} alt="" />
        <h1 className="font-bold">{mailName}</h1>
      </div>

      <div className="flex text-[var(--gray-color)]">
        <h2 className="font-bold">{mailTitle}</h2> - 
        <p>{mail}</p>   
        <span className="ml-12">Jun 9</span>    
      </div>
    </div>
  )
}

export default EmailsText
