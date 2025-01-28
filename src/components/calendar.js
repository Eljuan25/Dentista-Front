'use client'
import { useState } from 'react'
// import { useState } from "react"
import '../app/styles/calendar.css'

export default function Calendar() {

    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
    const diasSemana = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']

    const currentMount = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const daysMount = new Date(currentYear, currentMount + 1, 0).getDate()
    const startMount = new Date(currentYear, currentMount, 1).getDay() - 1

    const [mount, setMount] = useState(currentMount)

    const handleChangeVisualMount = (navigation) => {
        if(navigation < currentMount) return
        if(navigation > meses.length -1) return

        setMount(navigation)
    }

    const renderNameDays = () => {
        return(
            <>
                {diasSemana.map(el => (
                    <div key={el}>
                        {el}
                    </div>
                ))}
            </>
        )
    }

    const renderDays = () => {
        return (
            <>
                {startMount > 0 ? 
                    Array.from({length: startMount}, (_, index) => (
                        <div key={index}></div>
                    ))
                :
                    <></>
                }
                {Array.from({length: daysMount}, (_, index) => (
                    <div key={index}>
                        {index + 1}
                    </div>
                ))}
            </>
        )
    }

    return(
        <>
            <div className="calendar-container">
                <div className='meses'>
                    {mount != currentMount ?                    
                        <button onClick={() => handleChangeVisualMount(mount-1)}>
                            <img src="/icons/arrow_left.svg" />
                        </button>
                    :
                        <div></div>
                    }
                    <span>{meses[mount]}</span>
                    {mount < meses.length -1 ?                    
                        <button onClick={() => handleChangeVisualMount(mount+1)}>
                            <img src="/icons/arrow_right.svg" />
                        </button>
                    :
                        <div></div>
                    }
                </div>

                <div className='days-container'>
                    {renderNameDays()}
                    {renderDays()}
                </div>
            </div>
        </>
    )
}