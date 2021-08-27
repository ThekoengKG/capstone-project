export class User {
    idNo: number;
    fullname: string;
    username : string;
    email: string;
    phoneNumber: number;
    password: string;
    confirmPassword: string;
    

    constructor() {
        this.idNo = 0;
        this.fullname = "";
        this.username = "";
        this.email = "";
        this.phoneNumber = 0;
        this.password = "";
        this.confirmPassword = " ";
        
    }
}
