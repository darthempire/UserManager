import { Role } from './Role';

export class User {
    public UserName: string;
    public Password: string;
    public Email: string;
    public Name: string;
    public Surname: string;
    public Information: string;
    public Role: Role;
}

export class UserRegistrationModel {
    public UserName: string;
    public Password: string;
    public ConfirmPassword: string;
    public Email: string;
    public Name: string;
    public Surname: string;
    public Information: string;
}

export class UserLoginModel {
    public UserName: string;
    public Password: string;
}
