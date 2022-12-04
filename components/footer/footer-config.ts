export type FooterConfig = {
    title: string;
    address: {
        street: string;
        city: string;
        province: string;
        postalCode: string;
    }
}

export const footerConfig: FooterConfig = {
    title: "Toor Welding Inc.",
    address: {
        street: "90 Blue Spruce Street",
        city: "Brampton",
        province: "ON",
        postalCode: "L6R 1C3"
    }
}