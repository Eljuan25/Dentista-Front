'use client'

import Calendar from '@/components/calendar';

export default function Page() {
    return ( 
        <>
        <Calendar diasInahabiles={["SAB", "MIE"]} diaClikeado={(day) => console.log(day)} diasSabaticos={{"mes": "ENERO", "dias": [31,13]}}/>
        </>

    )
}

