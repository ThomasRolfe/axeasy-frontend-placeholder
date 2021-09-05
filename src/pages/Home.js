import HeroImage from "../img/axeasy-scholarship-overview.png";
import {AxeasyLogo} from "../svg/AxeasyLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <>
        <nav className="flex items-center justify-between mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-8xl min-h-10 py-6">
            <div>                
                <AxeasyLogo  className="h-10 md:h-14 " />
            </div>
            <div>
                <a href="https://twitter.com/home" rel="noreferrer" target="_blank" className="" title="Get in touch with us on Twitter">
                <FontAwesomeIcon size="2x" className="text-twitter-blue" icon={faTwitter} />
                </a>
            </div>
        </nav>
        <div className="bg-white pb-8 sm:pb-12 lg:pb-12 -mt-10 md:-mt-14">
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
                            <form
                                action="#"
                                className="mt-12 sm:max-w-lg sm:w-full sm:flex"
                            >
                                <div className="min-w-0 flex-1">
                                    <label
                                        htmlFor="hero-email"
                                        className="sr-only font-muli"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="hero-email"
                                        type="email"
                                        className="block w-full bg-gray-100 border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 focus:border-brand-light-turq focus:ring-brand-light-turq font-muli"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-brand-light-turq text-base font-medium text-white hover:bg-brand-dark-turq focus:outline-none focus:ring-2 focus:ring-brand-light-turq focus:ring-offset-2 sm:px-10"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
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
