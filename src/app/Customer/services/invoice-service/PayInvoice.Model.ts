export class PayInvoice{
    invoiceUuid:string
    userUuid:string
    amount:number

    constructor(invoiceUuid:string,userUuid:string,amount:number){
        this.invoiceUuid = invoiceUuid
        this.userUuid=userUuid
        this.amount = amount
     }
}