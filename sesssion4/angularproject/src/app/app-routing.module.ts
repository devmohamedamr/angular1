import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { TestmoinialComponent } from './testmoinial/testmoinial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"about",component:AboutComponent},
  {path:"service",component:ServiceComponent},
  {path:"portfolio",component:PortofolioComponent},
  {path:"testmonial",component:TestmoinialComponent},
  {path:"blog",component:BlogComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
