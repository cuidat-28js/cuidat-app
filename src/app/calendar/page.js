import CalendarCompon from "../components/Calendar"
import Reminder from "../components/Reminder"
import RemindersEmpty from "../components/componentsEmpty/ReminderEmpty"
import NavBar from "../components/Navbar"

export default function CalendarPage() {
    return (
        <div className="flex min-h-screen lg:w-full flex-col items-center justify-between">
            <NavBar/>
            <div className="flex flex-col justify-centers lg:flex-row"> 
                <div className="w-full flex flex-col mt-16 lg:m-4 ">
                    <div className="object-top px-4 pb-4 border border-primary border-l-0 border-t-0 border-r-0">
                        <h2 className="font-josefin-regular text-bold">
                        Recordatorios
                        </h2>
                    </div>
                    <div className="mt-4">
                        <section>
                        <RemindersEmpty/>
                        </section>
                    </div>
                </div>
                <div className="flex flex-col items-center my-4 mr-2"> 
                    <div className="mb-4">
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