import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
  { path: '', component: ImagesComponent },
  { path: 'user/:id', component: ImageComponent },
  { path: '***', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
