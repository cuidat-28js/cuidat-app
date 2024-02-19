import CalendarCompon from "../components/Calendar"
import Reminder from "../components/Reminder"

export default function CalendarPage() {
    return (
        <div className="flex min-h-screen lg:w-full flex-row items-center justify-between"> 
            <div className="flex flex-row">
                <div className="w-2/3 px-36 flex flex-col">
                    <div className="p-4 border border-primary border-l-0 border-t-0 border-r-0">
                    <h2>
                        Recordatorios
                    </h2>
                    </div>
                <div>
                    <section></section>
                </div>
                </div>
                <div className="flex flex-col items-center"> 
                    <div>
                    <CalendarCompon/>
                    </div>
                    <div>
                     <Reminder/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}