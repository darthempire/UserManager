export class User {
    _id: number;
    _userName: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._userName = name;
    }
}

export class UserRegistrationModel {
    public UserName: string;
    public Password: string;
    public ConfirmPassword: string;
}

export class UserLoginModel {
    public UserName: string;
    public Password: string;
}
