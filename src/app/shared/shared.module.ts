import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { CustomReplacePipe } from './cutom.pipe.service';
import { GrowlerModule } from './growler/growler.module';

@NgModule({
  imports: [ CommonModule , ],
  exports : [
    CommonModule,
    FormsModule,
    StarComponent,
    GrowlerModule,
    CustomReplacePipe
  ],
  declarations: [ StarComponent ,CustomReplacePipe],
  providers :[
    
  ]
})
export class SharedModule { }
