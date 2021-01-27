if (!process.env.REACT_APP_API_ENDPOINT) {
    console.error("No REACT_APP_SERVICES_URL found in .env file");
}

export const SERVICES_URL = process.env.REACT_APP_API_ENDPOINT;