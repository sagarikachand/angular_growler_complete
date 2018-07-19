import { NgModule } from "@angular/core";
import { GrowlerService } from "./growler.service";
import { GrowlerComponent } from "./growler.component";
import { CommonModule } from "@angular/common";




@NgModule({
    imports:[CommonModule],

    declarations:[GrowlerComponent] ,
    
    exports:[GrowlerComponent],
  
    providers:[GrowlerService]

 
})

export class GrowlerModule {

}