import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";



function Footer(props) {

  const infoOptions = ['About', 'Resources']
  const follow = [<BsInstagram size={30} />, <FaFacebook size={30} fill="blue" />, <FaYoutube size={30} fill="red" />, <BsTwitterX size={30} />]
  const contact = [<SiGmail size={30} />, <TfiHeadphoneAlt size={30} />]

  return (
    <div style={{ background: 'radial-gradient(circle at 100% 0%, rgba(255, 88, 3, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)' }} className="select-none">
      <div className="flex sm:flex-none text-white pt-6 px-4
      ">
        <h3 className="font-black md:text-xl  hover:cursor-pointer hover:text-orange-600">{props.title}</h3>
      </div>
      <div className="flex flex-wrap flex-1 text-white mx-8">
        <img src={props.img} alt="FooterImg" />
        <div className="flex-1">
          <div className="text-white flex flex-wrap md:grid md:grid-cols-2 justify-between gap-2">
            <div className="mx-2">
              <strong>INFO</strong>
              <hr />
              <ul className={`mt-2 gap-4 list-none`}>
                {infoOptions.map((option, index) => (
                  <li key={index} className="px-3 py-2 text-white hover:underline"><a href="#" className="font-medium">{option}</a></li>
                ))}
              </ul>
            </div>
            <div className="mx-2">
              <strong>Follow me</strong>
              <hr />
              <ul className={`mt-2 grid grid-cols-2 gap-4 list-none`}>
                {follow.map((option, index) => (
                  <li key={index} className="px-3 py-2 text-white "><a href="#" className="font-medium">{option}</a></li>
                ))}
              </ul>
            </div>
            <div className="mx-2">
              <strong>Contact me</strong>
              <hr />
              <ul className={`mt-2 grid grid-cols-2 gap-4 list-none`}>
                {contact.map((option, index) => (
                  <li key={index} className="px-3 py-2 text-white "><a href="#" className="font-medium">{option}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-4 mx-2">
            <strong>Subscribe me</strong>
            <hr />
            <div className="mt-4 inputs justify-evenly items-center gap-4 flex">
              <input type="text" placeholder="emailID@example.com" className="md:p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:outline-offset-0 focus:border-b focus:border-gray-600 w-full py-1.5 px-3  text-sm md:text-md" />
              <button type="button" className="bg-black md:py-2 md:px-6 rounded-md font-medium text-white py-0.5 px-3  text-sm md:text-md flex items-center">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Footer.propTypes = {}
export default Footer