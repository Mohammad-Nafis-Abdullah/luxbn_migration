import {
    FaFacebookSquare,
    FaLinkedin,
    FaPhoneAlt,
    FaRegClock,
    FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// @flow
export function Top() {
    return (
        <div className="bg-secondary">
            <section className="max-w-6xl p-3 mx-auto flex justify-between items-center ">
                <div className="flex gap-3 font-bold text-gray-700">
                    <p className="inline-flex items-center gap-2">
                        <FaPhoneAlt /> Phone: +8801755773077
                    </p>
                    <span>|</span>
                    <p className="inline-flex items-center gap-2">
                        <FaRegClock /> We are open: Sat - Thu: 11 am - 8 pm
                    </p>
                </div>
                <div className="inline-flex gap-5 text-black">
                    <FaFacebookSquare className="size-6 cursor-pointer" />
                    <FaSquareXTwitter className="size-6 cursor-pointer" />
                    <FaLinkedin className="size-6 cursor-pointer" />
                    <FaYoutube className="w-7 h-6 self-start cursor-pointer" />
                </div>
            </section>
        </div>
    );
}
