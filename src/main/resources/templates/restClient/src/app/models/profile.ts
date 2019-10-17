export class Profile {
    profileId: number;
    firstName: string;
    lastName: string;
    email: string;
    about: string;
    hasEval: boolean;

    constructor() {

        this.hasEval = false;
    }
}
