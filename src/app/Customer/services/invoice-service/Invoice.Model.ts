import { Subscriptions } from "./Subscriptions.Model"

export class Invoice{
    invoiceUuid!: string
    userId!: string
    emailId!: string
    amount: number=0
    noOfPlans!: number
    paymentStatus!: boolean
    dueDate!:string
    paymentDate!:string
    subscribedPlans!: Subscriptions 

    constructor() {}
}