import { CONTACT_ID_LIST, MEMBER_ID_LIST } from "@/constants";

export type MemberID = typeof MEMBER_ID_LIST[number];

export type ContactID = typeof CONTACT_ID_LIST[number];

export type MemberData = {
    id: string;
    name: string;
    role?: string | undefined;
    link?: {
        type: string;
        url: string | undefined;
    };
};
