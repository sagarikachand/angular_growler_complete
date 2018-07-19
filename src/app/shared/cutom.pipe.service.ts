import { Injectable , PipeTransform ,Pipe } from "@angular/core";





@Pipe({
    name:'customReplace'
})

export class CustomReplacePipe implements PipeTransform{


    transform(value: string, replaceBy:any) {
        
         return  value.replace(" "  , replaceBy)
       
        
    }

}