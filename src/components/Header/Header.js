import React, {useState} from 'react'
import styles from './Header.module.css'
import Webcam from 'react-webcam';
import Draggable from 'react-draggable';
import {BsFillCameraVideoFill, BsFillCameraVideoOffFill} from 'react-icons/bs'

export default function Header() {
 
const [Camera, setCamera] = useState(false);

  return (
    <>
    <header className={styles.header}>
        <button
            onClick={()=> setCamera(!Camera)}
            className={styles.button}
        >
            {Camera ? <BsFillCameraVideoFill fill='#fff' size={23}/> : <BsFillCameraVideoOffFill fill='#fff' size={23}/>}
        </button>
    </header>

    {Camera ? <Draggable>
        <Webcam 
                className={styles.camera}
                audio={false}
                width={300}
                height={300}
                videoConstraints={{
                    width:300,
                    height:300,
                    facingMode: 'user'
                }}
            /> 
    </Draggable>

    : null}
    </>

  )
}
