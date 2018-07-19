import { Component } from "@angular/core";
import { GrowlerService, GrowlMessageType } from "./growler.service";
import { Input } from "@angular/core";




@Component({
 selector:'cm-growler',
 template:
 `<div [ngClass]="position" class="growler">
  <div *ngFor="let growl of growls" [ngClass]="{active: growl.enabled}"
     class="growl alert {{ growl.mesgType }}">
     <span class="growl-message">{{ growl.message }}</span>
  </div>
</div>`  ,
styleUrls : ['./app/shared/growler/growler.component.css']
})

export class GrowlerComponent {
    constructor( growlerService: GrowlerService){
        growlerService.growl = this.growl.bind(this);
    }
    
   @Input() timeout:number =3000;
    growlerCount:number=0;
    growls: Growl[] =[];
    @Input() position='top';
    growl(growlMessage : string , mesgType :GrowlMessageType){
        this.growlerCount++;
        const bootstrapstyle= GrowlMessageType[mesgType].toLowerCase();
        console.log("bootstrap " + bootstrapstyle)
        const messageType= `alert-${bootstrapstyle}`
       let growl= new Growl(growlMessage, messageType ,this.growlerCount,this.timeout,this);
            
       this.growls.push(growl);
       return growl.id;
    }


    remove(id:number){
      this.growlerCount--;
      this.growls.forEach((growl,index)=>{
         if(growl.id==id){
             this.growlerCount--;
             this.growls.splice(index,1);
             console.log('removed ' + id);
         }
      })
    }
}


export class Growl{
     
    enabled: boolean =false;
    constructor( public message : string, 
        public mesgType :string ,
        public  id:number ,
        public  timeoutid:number, 
        
        public   growlerComponent:GrowlerComponent) {
            console.log(mesgType)
            this.show();
        }

        show(){
            window.setTimeout( 
                ()=>{
                    this.enabled=true;
                    this.timeout();
                },0)
        }

        timeout(){
          setTimeout(() => {
              this.hide();
          }, this.timeoutid);
        }

        hide(){
            this.enabled=false;
            setTimeout(() => {
                this.growlerComponent.remove(this.id);
            }, this.timeoutid);
          
        }
}