export interface Contact {
    _id: string;
    email: string;
    mobile: string;
    resume: { url: string };
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
