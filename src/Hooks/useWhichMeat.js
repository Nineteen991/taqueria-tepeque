import { useState } from 'react'

export default function useWhichMeat() {
    const [whichMeat, setWhichMeat] = useState('')

    return { whichMeat, setWhichMeat }
}