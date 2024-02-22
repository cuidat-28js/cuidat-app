import React from "react";
import Image from "next/image";

export default function AddBtn() {
    return (
        <div>
            <button
            type="button"
            className="inline-block hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600"
            >
                <Image src="../public/ilustrations/add-btn.svg"
                width={60}
                height={60}
                alt="plus sign button" />
            </button>
        </div>
    );
};