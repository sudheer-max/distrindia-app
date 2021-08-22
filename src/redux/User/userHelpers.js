import { toast } from "react-toastify";
import { auth } from "../../firebase/utils";

toast.configure();
export const handleResetPasswordFuntion = (email) => {

    const config = {
        url: 'https://distrindia-app.netlify.app/login'
    };

    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
            .then(() => {
                resolve();
                toast.success('Reset Link sent on your register email address');
            })
            .catch(() => {
                const err = toast.error('Email not found please try again!');
                reject(err);
            });
    })
}