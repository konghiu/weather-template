import {
     BsCloudDrizzleFill,
     BsCloudSunFill,
     BsFillCloudsFill,
     BsSunFill,
} from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { FaCloudSunRain } from "react-icons/fa";
import { IoIosThunderstorm } from "react-icons/io";
import { IoSnow } from "react-icons/io5";
import { TbMist } from "react-icons/tb";

const weatherStatusIcon = {
     "01d": <BsSunFill />,
     "01n": <BsSunFill />,
     "02d": <BsCloudSunFill />,
     "02n": <BsCloudSunFill />,
     "03d": <AiFillCloud />,
     "03n": <AiFillCloud />,
     "04d": <BsFillCloudsFill />,
     "04n": <BsFillCloudsFill />,
     "09d": <BsCloudDrizzleFill />,
     "09n": <BsCloudDrizzleFill />,
     "10d": <FaCloudSunRain />,
     "10n": <FaCloudSunRain />,
     "11d": <IoIosThunderstorm />,
     "11n": <IoIosThunderstorm />,
     "13d": <IoSnow />,
     "13n": <IoSnow />,
     "50d": <TbMist />,
     "50n": <TbMist />,
};

export default weatherStatusIcon;
