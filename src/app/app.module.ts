import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModulesModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { SharedModule } from './shared/shared.module';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { NgArrayPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    ServicesComponent,
    ProjectDetailsComponent,
    ToggleSwitchComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModulesModule,
    HttpClientModule,
    SharedModule,
    NgArrayPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
