import { Component } from '@angular/core';
import { GrowlerService, GrowlMessageType } from '../shared/growler/growler.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import  'rxjs/add/operator/take'
import { from } from 'rxjs/observable/from';
import  'rxjs/add/operator/map'
import  'rxjs/add/observable/interval';
import { Observer } from 'rxjs/Observer';

@Component({
    selector:'cm-wel',
    templateUrl: './app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
   

    constructor( private growlerService :GrowlerService){
       
    }

    // collection=[
    //     {  mesg:"updated succesfully" , type:GrowlMessageType.Success  },
    //     {  mesg:"Deleted succesfully" , type:GrowlMessageType.Success  },
    //     {  mesg:"Error updating" , type:GrowlMessageType.Danger  },
    //     {  mesg:"Are you sure " , type:GrowlMessageType.Warning  },
    //     {  mesg:"This will change " , type:GrowlMessageType.Info },
    
    // ]


        // activateGrowl() {
        //     let index= Math.floor(Math.random() * 5);
        //     console.log(index)
        //     this.growlerService.growl(this.collection[index].mesg , this.collection[index].type)
        // }
   

    
      
   }

  
   
    
  

