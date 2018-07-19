import { Injectable } from "@angular/core";





@Injectable()
export class GrowlerService {


   public    growl: (growlMessage : string , mesgType :GrowlMessageType)=>number;
}

export enum GrowlMessageType{
    Success,
    Warning,
    Danger,
    Info
}