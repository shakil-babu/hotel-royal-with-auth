import React, { useEffect, useState } from 'react';
import './Footer.css';
const Footer = () => {
    const [disabled, setDisabled] = useState(true);
    const [send, setSend] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputChageHandler = (e) => {
        if(e.target.value === ''){
            setDisabled(true)
        }

        if(e.target.value){
            setDisabled(false)
            setInputValue(e.target.value)
        }
    }

    const SubscribeHandler = () => {
        setSend(true);
        setInputValue('');
    }

    useEffect(() => {
        setTimeout(() => {
            setSend(false)
        }, 5000)
    })
    return (
        <>
            <footer className="footer-area">
                <div className="footer-info">
                    <h3>Save time, Save Money!</h3>
                    {send && <p>Thank you for Subscribed.</p> }
                    <div className="subs-flex">
                        <input value={inputValue} onChange={inputChageHandler} type="text" placeholder='Enter your email!'/> 
                        <button onClick={SubscribeHandler} disabled={disabled} className={disabled ? 'btn' : 'btn-color'}>
                            {send ? 'Subscribed' : 'Subscribe'}
                        </button>
                    </div>

                    <p>Copyright &copy; Hotel Royal.</p>    
                </div>
            </footer>
        </>
    )
}

export default Footer
