import styles from "../../styles/Form.module.scss"
import useField from "../../hooks/useField";
import { useState } from "react";


export default function Form(props) {

    const emailChecker = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const notEmptyChecker = (text) => {
        return text.length > 0
    };

    const { error: nameError, reset: nameReset, ...name } = useField('text', [notEmptyChecker]);
    const { error: plusError, reset: plusReset, ...plus } = useField('number', [(num) => num !== "" && num > 0]);
    const { error: emailError, reset: emailReset, ...email } = useField('email', [notEmptyChecker, emailChecker]);
    const { error: rsvpError, reset: rsvpReset, ...rsvp } = useField('text', [notEmptyChecker]);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nameError && !plusError && !emailError && !rsvpError) {
            try {
                const response = await axios.post('/api/rspv', {
                    name: name.value,
                    email: email.value,
                    extras: extras.value,
                    inviteCode: rsvp.value
                });

                if (response.status === 200) {
                    //todo show positive message
                } else {
                    // todo show response.error
                }
            } catch (error) {
                // todo show server error msg
            }
        }
    }


    const button = () => {
        if (process.env.FF_RSVP) {
            return (<button type='submit' className={`${styles.buttonCursor} ${styles.buttonCommon} ${disabled ? styles.isDisabled : ''}`}>RSVP</button>)
        } else {
            return (<button title='available as soon as invites are sent out' className={`${styles.buttonCommon} ${styles.notFunctional} `}>RSVP</button>)
        }

    }
    return (<form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.pair}>
            <input placeholder="name" className={`${styles.inputText}`} {...name} />
            <input placeholder="email" className={`${styles.inputText}`} {...email} />
        </div>
        <div className={styles.pair}>
            <input placeholder="How many are you bringing along?" pattern="[0-9]" className={`${styles.inputNumber}`} {...plus} />
            <input placeholder="Invite code" className={`${styles.inputText}`} {...rsvp} />
        </div>
        {/* {error ? outputError(errors) : ""} */}
        {!process.env.FF_RSVP && <span className={styles.alertError}>You will be able to RSVP when the invites are sent out.</span>}
        {button()}
    </form>
    )
}