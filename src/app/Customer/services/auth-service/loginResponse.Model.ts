export class LoginResponse{
    uuid!:string
    email!:string
    name!:string
    token!:string
    refreshToken!:string
    role!:string

    constructor(uuid:string,email:string,name:string,token:string,refreshToken:string,role:string){
        this.uuid = uuid,
        this.email = email,
        this.name = name,
        this.token = token,
        this.refreshToken = refreshToken
        this.role = role
    }
}