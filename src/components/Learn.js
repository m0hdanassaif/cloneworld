import React from 'react'
import './learn.css'


const Learn = () => {
    return (
        <div className='you-will-learn-solve-from-cw'>

            {/* First part of two boxes */}
            <div className='firstPart'>
                <div className='box-up'>
                    <h2>one</h2>
                </div>
                <div className='box-down'>
                    <h2>two</h2>
                </div>
            </div>

            {/* Second Part of one box */}
            <div className='secondPart'>
                <div className='box-center'>
                    <h2>three</h2>
                </div>
            </div>

            {/* Thord part of two boxes */}
            <div className='thirdPart'>
                <div className='box-up'>
                    <h2>four</h2>
                </div>
                <div className='box-down'>
                    <h2>five</h2>
                </div>
            </div>


        </div>
    )
}

export default Learn
