import React, { useState } from 'react'
import './ResetPass.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'

function ResetPass() {
    const [pass, setPass] = useState('')
    const [messageErr, setMessageErr] = useState(false)
    const [messageSuccess, setMessageSuccess] = useState(false)

    const handleResetPass = () => {
        axios.post(`http://localhost:4000/api/resetpass`, {
            gmail: pass,
        })
            .then(response => {
                console.log(response)
                setMessageSuccess(true)
                document.querySelector('.reset').addEventListener('click', () => {
                    setMessageSuccess(false)
                    setPass('')
                })
            })
            .catch(error => {
                console.log(error)
                setMessageErr(true)
                document.querySelector('.reset').addEventListener('click', () => {
                    setMessageErr(false)

                })
            });
    }
    return (
        <div>
            <Header />
            <div className='reset'>
                <div className='form'>
                    <h3>Reset Password</h3> <br></br>
                    <input
                        placeholder='Enter gmail'
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                    <div>
                        {pass == '' ? (<button style={{ backgroundColor: 'gray', }}>RESET</button>) : (
                            <button className='success' onClick={handleResetPass}>RESET</button>
                        )}

                    </div>
                </div>

                {messageErr ? (
                    <div className='notification'>
                        <div className='modal'>
                            <i style={{ color: 'red' }} className="fa-solid fa-circle-exclamation fa-2x"></i>
                            <p style={{ color: 'red' }}>Email Error</p>
                        </div>
                    </div>
                ) : ('')}
                {messageSuccess ? (
                    <div className='notification'>
                        <div className='modal'>
                            <i class="fa-solid fa-circle-check fa-2x success"></i>
                            <p>Password: kiendeptry </p>
                        </div>
                    </div>
                ) : ('')}
            </div>
            <Footer />
        </div>
    )
}

export default ResetPass