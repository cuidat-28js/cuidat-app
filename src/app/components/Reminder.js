import React from "react";

export default function Reminder() {
    return (
        <React.Fragment>
            <div className="flex">
                <div>
                    <div>
                        <h2>Añadir Recordatorio</h2>
                    </div>
                    <div>
                        <div className="mb-6">
                            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        </div>
                        <div className="mb-6">
                            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
                            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Repetir</div>
                    <div>
                        <label className="mr-9 mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="A+"/> 1 hr
                        </label>
                        <label className="mr-9 mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="A-"/> 2 hr
                        </label>
                        <label className="mr-9 mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="B+"/> 4 hr
                        </label>
                        <label className="mr-9 mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="B-"/> 6 hr
                        </label>
                        <label className="mr-9 mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="AB+"/> 8 hr
                        </label>
                        <label className="mr-9 mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="AB-"/> 12 hr
                        </label>
                    </div>
                </div>
                <div>
                    Notif
                </div>
            </div>
        </React.Fragment>
    )
}