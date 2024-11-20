import { MemberData } from "@/types";

export const INFORMATION_LIST = [
    { title: "仕様", contents: ["A5サイズ/未定ページ"] },
    {
        title: "頒布情報",
        contents: ["アイマスEXPO 12/14(土)", "タ-1b HoShiKaRaSu"],
    },
    { title: "会場頒布価格", contents: ["500円"] },
    {
        title: "企画責任者",
        contents: ["ほしのりゅう", "starrykarasu@gmail.com"],
    },
] as const satisfies { title: string; contents: string[] }[];

export const MEMBER_MAP = {
    "Starrykarasu": {
        id: "Starrykarasu",
        name: "ほしのりゅう",
        role: "企画責任者",
        link: {
            type: "none",
            url: undefined,
        },
    },
    "hakkadr": {
        id: "hakkadr",
        name: "はっか飴",
    },
    "hataori_ryo": {
        id: "hataori_ryo",
        name: "機織了",
    },
    "o2_hk5": {
        id: "o2_hk5",
        name: "荻原六花",
    },
    "cocoa_mouso": {
        id: "cocoa_mouso",
        name: "ココア",
    },
    "gene_lt4147": {
        id: "gene_lt4147",
        name: "楸燈樹",
    },
    "mikamihoP": {
        id: "mikamihoP",
        name: "ほり。",
    },
    "ultimate_wanwan": {
        id: "ultimate_wanwan",
        name: "わんこ",
        role: "表紙イラスト",
        link: {
            type: "none",
            url: undefined,
        },
    },
    "CootDesign": {
        id: "CootDesign",
        name: "coot design.",
        role: "表紙デザイン",
        link: {
            type: "instagram",
            url: "https://www.instagram.com/coot_design/",
        },
    },
    "Versas_me": {
        id: "Versas_me",
        name: "ミー",
        role: "サイト制作",
        link: {
            type: "github",
            url: "https://github.com/m19e",
        },
    },
} as const satisfies { [key: string]: MemberData };

export const MEMBER_ID_LIST = [
    "o2_hk5",
    "cocoa_mouso",
    "hakkadr",
    "hataori_ryo",
    "gene_lt4147",
    "Starrykarasu",
    "mikamihoP",
] as const;

export const CONTACT_ID_LIST = [
    "Starrykarasu",
    "ultimate_wanwan",
    "CootDesign",
    "Versas_me",
] as const;
