import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { SkillsComponent } from './skills/skills.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { TestmoinialComponent } from './testmoinial/testmoinial.component';
import { BlogComponent } from './blog/blog.component';
import { HiremeComponent } from './hireme/hireme.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    SkillsComponent,
    PortofolioComponent,
    TestmoinialComponent,
    BlogComponent,
    HiremeComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
