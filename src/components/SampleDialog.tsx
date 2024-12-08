"use client";

import { MemberID } from "@/types";
import Image from "next/image";

type Props = {
    id: MemberID;
};
type DialogElement = HTMLDialogElement | null;

export const SampleDialog = ({ id }: Readonly<Props>) => {
    const modalId = `sample-${id}`;

    return (
        <>
            <div
                className="relative min-w-40 aspect-square overflow-hidden rounded-md shadow-md transition-opacity hover:opacity-75"
                onClick={() =>
                    (document.getElementById(
                        modalId,
                    ) as DialogElement)?.showModal()}
            >
                <Image
                    src={`/avatar/${id}.jpg`}
                    alt="cover"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>

            <dialog id={modalId} className="modal">
                <div className="modal-box bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-50">
                    <div className="relative max-h-[calc(100vh-8rem)] aspect-[9/16] mx-auto">
                        <Image
                            className="border-2"
                            src={`/sample/${id}.png`}
                            alt={`/sample/${id}`}
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};
