import axios from "axios";

const ConvertKitApiInstance = axios.create({
    baseURL: "https://api.convertkit.com/v3/forms",
});

export default ConvertKitApiInstance;
