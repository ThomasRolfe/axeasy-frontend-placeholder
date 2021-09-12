import React, { useState } from "react";
import { useMutation } from "react-query";
import { submitEmail } from "../../services/api/SubmitEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const formId = 2574758;

const NotificationForm = () => {
    const [email, setEmail] = useState("");
    const { mutate, isLoading, isError, isSuccess, isIdle } =
        useMutation(submitEmail);

    console.log(isLoading, isError, isSuccess, isIdle);

    const SubmitNotificationForm = () => {
        if (!isIdle) {
            return;
        }
        mutate({
            formId: formId,
            email: email,
        });
    };

    if (isSuccess) {
        return <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
            <h3 className="font-muli font-bold text-xl">Thank you signing up. Please check your inbox to confirm your submission!</h3>
        </div>;
    }

    if (isError) {
        return <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
            <h3 className="font-muli font-bold text-xl">Oops, something went wrong. Please get in touch with us on Twitter to join the waiting list.</h3>
        </div>;
    }

    return (
        <form
            action="#"
            className="mt-12 sm:max-w-lg sm:w-full sm:flex"
            onSubmit={SubmitNotificationForm}
        >
            <div className="min-w-0 flex-1">
                <label htmlFor="hero-email" className="sr-only font-muli">
                    Email address
                </label>
                <input
                    id="hero-email"
                    type="email"
                    className="block w-full bg-gray-100 border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 focus:border-brand-light-turq focus:ring-brand-light-turq font-muli"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
                {isLoading ? (
                    <button
                        type="submit"
                        className={`block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium  sm:px-10 bg-gray-500 text-gray-50 `}
                    >
                        <FontAwesomeIcon
                            className="text-white text-xl"
                            spin
                            icon={faCircleNotch}
                        />
                    </button>
                ) : (
                    <button
                        type="submit"
                        className={`block w-full rounded-md border border-transparent px-5 py-3 bg-brand-light-turq text-base font-medium text-white hover:bg-brand-dark-turq focus:outline-none focus:ring-2 focus:ring-brand-light-turq focus:ring-offset-2 sm:px-10 min-w-24`}
                    >
                        Sign up
                    </button>
                )}
            </div>
        </form>
    );
};

export default NotificationForm;
