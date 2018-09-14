export interface Contact {
    email: string;
    mobile: string;
    currentAddress: Address;
    linkedinAccount: string;
    githubAccount: string;
    facebookAccount: string;
}

export interface Address {
    Line1: string;
    Line2: string;
    state: string;
    country: string;
}
