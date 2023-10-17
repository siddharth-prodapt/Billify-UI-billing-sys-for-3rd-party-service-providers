export class user{
    name:string
    email?:string
    phoneNumber:number
    dob:Date
    houseNumber:string
    city:string
    state:string
    country:string
    pincode?:number
    userType:string
    password:string

    constructor(name:string,
        email:string,
        phoneNumber:number,
        dob:Date,
        houseNumber:string,
        city:string,
        state:string,
        country:string,
        pincode:number,
        userType:string,
        password:string){
            this.name = name
            this.email = email
            this.phoneNumber = phoneNumber
            this.dob = dob
            this.houseNumber = houseNumber
            this.city = city
            this.state = state
            this.country = country
            this.pincode = pincode
            this.userType = userType
            this.password = password
    }
}