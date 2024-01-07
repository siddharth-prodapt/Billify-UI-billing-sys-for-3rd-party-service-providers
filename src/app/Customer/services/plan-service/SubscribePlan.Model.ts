import { Member } from "../member-services/Member.Model"

export class SubscribePlan{
    parentUuid!:string
    membersList!:Member[]
    id!:string
    subscribedPlanId!:string

    constructor(){ }
}