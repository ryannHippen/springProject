export class Profile {
    profileId: number;
    firstName: string;
    lastName: string;
    email: string;
    about: string;
    fileFileId: number;
    hasEval: boolean;

    constructor(){
        this.hasEval = false;
    }
}
