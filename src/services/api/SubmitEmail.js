import ConvertKitApiInstance from "./ConvertKitApiInstance";

export const submitEmail = ({ formId, email }) =>
    ConvertKitApiInstance.post(`/${formId}/subscribe`, {
        api_key: process.env.REACT_APP_CONVERTKIT_API_KEY,
        email: email,
    });
