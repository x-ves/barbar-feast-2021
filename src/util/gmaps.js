const API_KEY = "AIzaSyCkbRGuQf4n_fr-IANecyQHNEMKQSSbkFo";
const CALLBACK_NAME = "gmapsCallback";

let initialized = !!window.google;
let resolveInitPromise;
let rejectInitPromise;


// handle the initialization, status of the google maps script;
const initPromise = new Promise((resolve, reject) => {
    resolveInitPromise = resolve;
    rejectInitPromise = reject;
});

export default function init() {
    // If Google Maps is already initialized, the initPromise should get resolved eventually;
    if (initialized) {
        return initPromise;
    };

    initialized = true;

    // The fallback function is called by the Google Maps script if it is successfully loaded;
    window[CALLBACK_NAME] = () => resolveInitPromise(window.google);

    // We inject a new script tag into the "<head>" of our HTML to load the Google Maps script;
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
    script.onerror = rejectInitPromise;
    document.querySelector("head").appendChild(script);

    return initPromise;
}
