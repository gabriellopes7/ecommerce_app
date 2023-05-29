import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill}  from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0)
        runFireworks();
    }, [])
    

    return (
        <div className='success-wrapper'>
            
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill/>
                </p>
                <h2>Obrigado por comprar conosco !</h2>
                <p className='email-msg'>Verifique seu email para visualizar o recibo</p>
                <p className='description'>Em caso de dúvidas, utilize o email para contato:
                <a className='email' href='mailto:order@example.com'>order@example.com</a>
                </p>
                <Link href="/">
                    <button type='button' width="300px" className='btn'>
                        Continue
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default Success