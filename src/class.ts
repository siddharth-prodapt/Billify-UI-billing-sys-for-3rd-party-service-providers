export class signup{
    name:string|undefined
    email:string|undefined
    userType:string|undefined
    password:string|undefined
    confirmPassword:string|undefined
    constructor(name:string,
        email:string,
        userType:string,
        password:string,
        confirmPassword:string){
            this.name = name
            this.email = email
            this.userType = userType
            this.password = password
            this.confirmPassword = confirmPassword
        }
}
