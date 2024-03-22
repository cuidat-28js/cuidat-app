"use client"
import React, { useEffect, useRef, useState } from "react"

let autoComplete

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
    const autoCompleteRef = useRef(null)

    const handleScriptLoad = (updateQuery, autoCompleteRef) => {
        autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef.current,
            {
                componentRestrictions: { country: 'mx' }
            }
        )
        autoComplete.addListener('place_changed', () => {
            handlePlacesSelect(updateQuery)
        })
    }

    const handlePlacesSelect = updateQuery => {
        const addressObject = autoComplete.getPlace()

        const query = addressObject.formatted_address
        updateQuery(query)
        console.log({query})

        const latLng = {
            lat: addressObject?.geometry?.location?.lat(),
            lng: addressObject?.geometry?.location?.lng()
        }
        console.log({latLng})

    }

    useEffect(() =>{
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyB98vvtxKPgOT-0YhKtN_CdJVY3F3KFqkI&libraries=places&callback=AutocompleteAdressInput`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        )
    },[])

    return (
    
        <div>
            <label
                htmlFor="adress-appointment"
                className="text-base font-medium"
              >
                Dirección
              </label>
            <input
                id="autocomplete"
                type="text"
                ref={autoCompleteRef}
                className="form-control w-full py-2 border-2 rounded-md p-4 mt-1 bg-transparent border-violet-800 shadow-md"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Escribe la dirección o nombre del lugar"
                value={query}
            />
        </div>
    )
}

export default AutocompleteAdressInput