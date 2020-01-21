import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourPageNamePageRoutingModule } from './your-page-name-routing.module';

import { YourPageNamePage } from './your-page-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourPageNamePageRoutingModule
  ],
  declarations: [YourPageNamePage]
})
export class YourPageNamePageModule {}
