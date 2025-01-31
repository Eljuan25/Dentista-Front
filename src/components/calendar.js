'use client'
import { useState, useEffect } from 'react'
import '../app/styles/calendar.css'

    // EJEMPLO DE COMO UTILIZARLO
    //   {/* min 300 */}
    //   <div style={{width: 500 + 'px', height: 500 + 'px'}}>
    //     <Calendar diasInahabiles={["SAB", "MIE"]} diaClikeado={(day) => console.log(day)} diasSabaticos={{"mes": "ENERO", "dias": [31,13]}}/>
    //   </div>

export default function Calendar({diasInahabiles, diaClikeado, diasSabaticos}) {

    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
    const diasSemana = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']

    const currentMount = new Date().getMonth()
    const currentYear = new Date().getFullYear()

    const [mount, setMount] = useState(currentMount)
    const [year, setYear] = useState(currentYear)

    let daysMount = new Date(year, mount + 1, 0).getDate()
    let startMount = new Date(year, mount, 1).getDay() - 1

    useEffect(() => {
        daysMount = new Date(year, mount + 1, 0).getDate()
        startMount = new Date(year, mount, 1).getDay() - 1
    }, [mount, year])

    const handleChangeVisualMount = (navigation) => {
        setMount(navigation)
    }

    const handleChangeVisualYear = (navigation) => {
        setYear(navigation)
    }

    const selectDay = (day) => {
        const daySelected = new Date(year, mount, day)
        diaClikeado(daySelected)
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
        let dias = []
        diasInahabiles.map(el => dias.push(diasSemana.findIndex(idx => idx == el)))
        let mesSelected = meses.findIndex(idx => idx == diasSabaticos.mes)

        const isInHabilDay = (day) => {

            const resDiasSabaticos = (year == currentYear && mount == mesSelected && diasSabaticos.dias.includes(day)) ? true : false
            const resInhabiles = dias.includes(new Date(year, mount, day).getDay() -1)

            return resInhabiles || resDiasSabaticos
        }

        return (
            <>
                {startMount >= 0 ? 
                    Array.from({length: startMount}, (_, index) => (
                        <div key={index}></div>
                    ))
                :
                    Array.from({length: 6}, (_, index) => (
                        <div key={index}></div>
                    ))
                }
                {Array.from({length: daysMount}, (_, index) => (
                    <button 
                        key={index} 
                        className={isInHabilDay(index + 1) ? 'disabled-day' : 'button-day'}
                        onClick={() => selectDay(index + 1)}
                        disabled={isInHabilDay(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </>
        )
    }

    return(
        <>
            <div className="calendar-container">

                <div className='controls-section'>              
                    <button onClick={() => handleChangeVisualYear(year - 1)} disabled={year == currentYear}>
                        <img src="/icons/arrow_left.svg" />
                    </button>

                    <span>{year}</span>
            
                    <button onClick={() => handleChangeVisualYear(year + 1)} disabled={year > currentYear}>
                        <img src="/icons/arrow_right.svg" />
                    </button>

                </div>

                <div className='controls-section'>
                    <button onClick={() => handleChangeVisualMount(mount-1)} disabled={mount == currentMount}>
                        <img src="/icons/arrow_left.svg" />
                    </button>
                    <span>{meses[mount]}</span>
                    <button onClick={() => handleChangeVisualMount(mount+1)} disabled={mount == meses.length -1}>
                        <img src="/icons/arrow_right.svg" />
                    </button>
                </div>

                <div className='days-container'>
                    {renderNameDays()}
                    {renderDays()}
                </div>
            </div>
        </>
    )
}