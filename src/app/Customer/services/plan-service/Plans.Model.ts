export class Plans{
    id!: number;
    uuid!:string|undefined
    name!: string;
    speed!:string
    internet!:string
    imgUrl!:string
    planFor!: string;
    price!: string;
    maxPersons!: number;
    createdAt!: string;
    modifiedAt!: string;
    validity!: string;
    validityType!: string;
    planType!: string;
    available!: boolean;
    
    constructor(){ }
}