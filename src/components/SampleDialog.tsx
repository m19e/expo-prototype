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
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click outside to close
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};
