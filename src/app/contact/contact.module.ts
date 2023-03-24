import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
})
export class ContactModule { }
