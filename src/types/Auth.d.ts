interface ILogin {
    email: string;
    password: string;
}

interface INewPassword {
    oldPassword: string;
    newPassword: string;
}


export type {ILogin, INewPassword}