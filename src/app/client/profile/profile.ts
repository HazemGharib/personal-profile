export interface Profile {
    profileImage: string;
    profileHeadName: string;
    profileCurrentTitle: string;
    profileHeadLine: string;
    nationality: string;
    currentLocation: string;
    dateOfBirth: Date;
    profileSections: [
        {
            sectionName: string;
            sectionContent: string;
        }
    ];
}
