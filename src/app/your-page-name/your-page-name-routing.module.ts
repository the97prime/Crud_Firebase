import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourPageNamePage } from './your-page-name.page';

const routes: Routes = [
  {
    path: '',
    component: YourPageNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourPageNamePageRoutingModule {}
