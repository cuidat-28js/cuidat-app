"use client"
import React, { useEffect, useState } from "react"
import { REACT_APP_GOOGLE_API_KEY } from "../components/constants"

const loadScript = (url, callback) => {
    let script = document.createElement('script')
    script.type = 'text/javascript'

    if(script.readyState) {
        script.onreadystatechange= function() {
            if(script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null
                callback()
            }
        }
    } else {
        script.onload = () => callback()
    }
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
}


const AutocompleteAdressInput = () => {
    const [query, setQuery] = useState ("")
    const AutoCompleteRef = useRef()

    useEffect(() =>{
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_API_KEY}&libraries=places`
        )
    },[])

    return (
        <div>
            <label>
                Dirección o nombre del lugar.
            </label>
            <input
                ref={AutoCompleteRef}
                className="form-control"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Escribe la dirección o nombre del lugar"
                value={query}
            />
        </div>
    )
}

export default AutocompleteAdressInput