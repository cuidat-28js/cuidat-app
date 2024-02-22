import React from "react";
import Image from "next/image";

export default function AddBtn() {
    return (
        <div>
            <button
            type="button"
            className="btn btn-xs btn-outline border-primary text-primary text-md font-bold hover:bg-primary hover:-translate-y-1"
            >
            +
            </button>
        </div>
    );
};