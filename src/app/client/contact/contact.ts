export interface Contact {
    email: string;
    mobile: string;
    currentAddress: Address;
    linkedinAccount: string;
    githubAccount: string;
    facebookAccount: string;
}

export interface Address {
    line1: string;
    line2: string;
    state: string;
    country: string;
}
