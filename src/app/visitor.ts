import { Ticket } from "./ticket";

export class Visitor{
    constructor(
       public vid:number,
       public vname:string,
       public vage:number,
       public ticket:Ticket
    ){}
}