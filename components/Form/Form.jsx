import styles from "../../styles/Form.module.scss"
import useField from "../../hooks/useField";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {

    const emailChecker = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const notEmptyChecker = (text) => {
        return text.length > 0
    };

    const { error: nameError, reset: nameReset, ...name } = useField('text', [notEmptyChecker]);
    const { error: extrasError, reset: extrasReset, ...extras } = useField('number', [(num) => num !== "" && num >= 0]);
    const { error: emailError, reset: emailReset, ...email } = useField('email', [notEmptyChecker, emailChecker]);
    const { error: rsvpError, reset: rsvpReset, ...rsvp } = useField('text', [notEmptyChecker]);

    const checkErrors = () => {
        return !nameError && !extrasError && !emailError && !rsvpError;
    }
    const resetFields = () => {
        nameReset();
        extrasReset();
        emailReset();
        rsvpReset();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nameError && !extrasError && !emailError && !rsvpError) {
            try {
                const response = await axios.post('/api/rspv', {
                    name: name.value,
                    email: email.value,
                    extras: extras.value,
                    inviteCode: rsvp.value.replace(/ /g,'').toLowerCase()
                });
                console.log(response);
                if (response.status === 200) {
                    //todo show positive message
                    toast.success('You have now successfully RSVP\'d!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    resetFields();
                } else {
                    toast.error(response.data.error, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            } catch (error) {
                toast.error(error.response.data.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            toast.error('Please fill in all the fields!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }



    const button = () => {
        return (<button onClick={handleSubmit} type='submit' className={`${styles.buttonCursor} ${styles.buttonCommon} ${!checkErrors() ? styles.isDisabled : ''}`}>RSVP</button>)
    }


    return (<form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.pair}>
            <input placeholder="Name" className={`${styles.inputText}`} {...name} />
            <input placeholder="Email" className={`${styles.inputText}`} {...email} />
        </div>
        <div className={styles.pair}>
            <input placeholder="How many are you bringing along?" pattern="[0-9]" className={`${styles.inputNumber}`} {...extras} />
            <input placeholder="Invite code" className={`${styles.inputText}`} {...rsvp} />
        </div>
        {button()}
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </form>
    )
}