import HeroImage from "../img/axeasy-scholarship-overview.png";
import {AxeasyLogo} from "../svg/AxeasyLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import NotificationForm from "./components/NotificationForm";

export default function Home() {  

    return (
        <>
        <nav className="flex items-center justify-between mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-8xl min-h-10 py-6 ">
            <div>                
                <AxeasyLogo  className="h-10 md:h-14 " />
            </div>
            <div className="z-20">
                <a href="https://twitter.com/Axeasyio" rel="noreferrer" target="_blank" className="" title="Get in touch with us on Twitter">
                    <FontAwesomeIcon className="text-twitter-blue  text-4xl hover:scale-125 transform transition" icon={faTwitter} />
                </a>
            </div>
        </nav>
        <div className="bg-white pb-8 sm:pb-12 lg:pb-12 -mt-10 md:-mt-14 z-0">
            <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-8xl lg:grid lg:grid-cols-2 lg:gap-18">
                    <div>
                        <div className="mt-20">
                            <div className="mt-6 sm:max-w-2xl">
                                <h1 className="text-4xl text-brand-black-light tracking-tight sm:leading-snug sm:text-5xl font-filson-soft font-bold">
                                    Axie Infinity<br /> scholarship management<br />
                                    <span className="text-brand-orange">made easy </span>
                                </h1>
                                <p className="mt-6 text-xl text-gray-500 font-muli">
                                    Sign up today for beta access on release and
                                    discounts for all future premium features.
                                </p>
                            </div>
                            <NotificationForm />
                        </div>
                    </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                            <img
                                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                                src={HeroImage}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="h-10 text-center p-16 text-white bg-brand-black-light">
            Copyright {(new Date()).getFullYear()} Axeasy.io
        </footer>
        </>
    );
}
