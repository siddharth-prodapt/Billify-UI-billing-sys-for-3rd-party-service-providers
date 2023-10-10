export class login{
    name:string|undefined
    password:string|undefined

    constructor(name:string,password:string){
        this.name = name
        this.password = password
    }
}
export class signup{
    name:string|undefined
    email:string|undefined
    userType:string|undefined
    password:string|undefined
    constructor(name:string,
        email:string,
        userType:string,
        password:string){
            this.name = name
            this.email = email
            this.userType = userType
            this.password = password
        }
}
export class later{
    name:string|undefined
    phoneNumber?:number|undefined
    adhaarNumber?:number|undefined
    dob:string|undefined
    houseNumber:string|undefined
    city:string|undefined
    state:string|undefined
    country:string|undefined
    pincode?:number|undefined
    userType:string|undefined
    password:string|undefined

    constructor(name:string,
        phoneNumber:number,
        adhaarNumber:number,
        dob:string,
        houseNumber:string,
        city:string,
        state:string,
        country:string,
        pincode:number,
        userType:string,
        password:string){
            this.name = name
            this.phoneNumber = phoneNumber
            this.adhaarNumber = adhaarNumber
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