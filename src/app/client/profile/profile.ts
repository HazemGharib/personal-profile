export interface Profile {
    profileImage: string;
    profileHeadName: string;
    profileCurrentTitle: string;
    nationality: string;
    dateOfBirth: Date;
    profileSections: [
        {
            sectionName: string;
            sectionContent: string;
        }
    ];
}
