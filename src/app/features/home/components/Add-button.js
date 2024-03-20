import React from "react";
import { useRouter } from "next/navigation";

export default function AddBtn() {
    const router = useRouter();
    return (
        <div>
            <div
            onClick={()=>router.push('/vitalli/newAppointment')}
            className="btn btn-xs btn-outline border-primary text-primary text-md font-bold hover:bg-primary hover:-translate-y-1"
            >
            +
            </div>
        </div>
    );
};