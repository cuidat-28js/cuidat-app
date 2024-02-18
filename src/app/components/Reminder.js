import React from "react";

export default function Reminder() {
    return (
        <React.Fragment>
            <div className="justify-center flex flex-col w-160 m-2">
                <div className="ml-6 ">
                    <h2 className="text-bold">Añadir Recordatorio</h2>
                </div>
                <div className="flex flex-col md:flex-row">
                <div className="w-64 my-4">
                    <div>
                        <div className="mb-2">
                            <label for="large-input" class="block mb-2 text-sm font-medium text-primary">Titulo</label>
                            <input type="text" id="inputTitle" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        </div>
                        <div className="mb-2">
                            <label for="large-input" class="block mb-2 text-sm font-medium text-primary">Fecha</label>
                            <input type="text" id="inputDate" class="block p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        </div>
                    </div>
                    <div className="w-60 mt-4">
                        <button className="button rounded btn-active btn-block btn-primary py-1">Añadir</button>
                    </div>
                </div>
                <div className="mx-4 flex flex-row">
                    <div className="m-1 w-20">
                        <p className="mt-3 text-sm">Repetir</p>
                        <div className="flex flex-col">
                            <label className=" mt-3 text-xs">
                                <input type="radio" name="bloodtype" value="A+"/> 1 hr
                            </label>
                            <label className=" mt-3 text-xs">
                                <input type="radio" name="bloodtype" value="A-"/> 2 hrs
                            </label>
                            <label className=" mt-3 text-xs">
                                <input type="radio" name="bloodtype" value="B+"/> 4 hrs
                            </label>
                            <label className=" mt-3 text-xs">
                                <input type="radio" name="bloodtype" value="B-"/> 6 hrs
                            </label>
                            <label className=" mt-3 text-xs">
                                <input type="radio" name="bloodtype" value="AB+"/> 8 hrs
                            </label>
                            <label className=" mt-3 text-xs">
                                <input type="radio" name="bloodtype" value="AB-"/> 12 hrs
                            </label>
                        </div>
                    </div>
                    <div className="mx-1 mb-1 mt-2 w-28">
                        <p className="mt-2 text-sm">
                            Notificación
                        </p>
                        <div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xs">E-mail</span> 
                                <input type="checkbox" checked="checked" className="checkbox checkbox-sm checkbox-primary" />
                            </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                <span className="label-text text-xs">Norificacion<br/> VitaliApp</span> 
                                <input type="checkbox" checked="checked" className="checkbox checkbox-sm checkbox-primary" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </React.Fragment>
    )
}