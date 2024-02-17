import React from "react";

export default function Reminder() {
    return (
        <React.Fragment>
            <div className="flex justify-center w-160 m-2">
                <div className="w-64 m-4">
                    <div>
                        <h2>Añadir Recordatorio</h2>
                    </div>
                    <div>
                        <div className="mb-6">
                            <label for="large-input" class="block mb-2 text-md font-medium text-primary">Titulo</label>
                            <input type="text" id="inputTitle" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        </div>
                        <div className="mb-6">
                            <label for="large-input" class="block mb-2 text-md font-medium text-primary">Fecha</label>
                            <input type="text" id="inputDate" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        </div>
                    </div>
                </div>
                <div className="m-2 w-24">
                    <p className="mt-8">Repetir</p>
                    <div className="flex flex-col">
                        <label className=" mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="A+"/> 1 hr
                        </label>
                        <label className=" mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="A-"/> 2 hrs
                        </label>
                        <label className=" mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="B+"/> 4 hrs
                        </label>
                        <label className=" mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="B-"/> 6 hrs
                        </label>
                        <label className=" mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="AB+"/> 8 hrs
                        </label>
                        <label className=" mt-2 text-sm">
                            <input type="radio" name="bloodtype" value="AB-"/> 12 hrs
                        </label>
                    </div>
                </div>
                <div className="mx-1 mt-8">
                    <p className="mt-2">
                        Notif
                    </p>
                    <div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">E-mail</span> 
                                <input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Norificacion VitaliApp</span> 
                                <input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}