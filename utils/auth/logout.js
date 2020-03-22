import firebase from "firebase/app";
import "firebase/auth";
import logger from "../logger/";

export default async () => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
            if (typeof window !== "undefined") {
                // Remove the server-side rendered user data element. See:
                // https://github.com/zeit/next.js/issues/2252#issuecomment-353992669
                try {
                    const elem = window.document.getElementById(
                        "__MY_AUTH_USER_INFO"
                    );
                    elem.parentNode.removeChild(elem);
                } catch (e) {
                    logger.error(e);
                }
            }
            return true;
        })
        .catch(e => {
            logger.error(e);
            return false;
        });
};
