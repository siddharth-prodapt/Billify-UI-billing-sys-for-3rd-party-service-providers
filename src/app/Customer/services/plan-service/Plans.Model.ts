export class Plans{
    id!: number;
    uuid!:string|undefined
    name!: string;
    planFor!: string;
    price!: string;
    maxPersons!: number;
    createdAt!: string;
    modifiedAt!: string;
    validity!: string;
    durationType!: string;
    planType!: string;
    available!: boolean;
    
    constructor(){ }
}