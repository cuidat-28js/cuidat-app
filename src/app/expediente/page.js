import React from "react"

export default function Expediente() {
    return(
        <main>
            <Navbar/>
            <div>
                <h2>Expediente</h2>
                <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-lato uppercase text-white hover:bg-white hover:border-primary hover:text-primary">
  editar
</button>
            </div>
        </main>
    )
}