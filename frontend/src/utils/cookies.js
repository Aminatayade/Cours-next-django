import Cookies from 'js-cookie';

// Set a cookie
const setCookie = (key, value) => {
    if (typeof window !== "undefined") {
        Cookies.set(key, value, { expires: 7, path: '/' });
    }
};

// Get a cookie
const getCookie = (key) => {
    if (typeof window !== "undefined") {
        return Cookies.get(key);
    }
    return null;
};

// Remove a cookie
const removeCookie = (key) => {
    if (typeof window !== "undefined") {
        Cookies.remove(key, { path: '/' });
    }
};

export { setCookie, getCookie, removeCookie };
