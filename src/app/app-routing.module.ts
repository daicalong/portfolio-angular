import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      hidden: false,
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Portfolio',
      hidden: false,
    },
    children: [
      {
        path: 'details/:id',
        component: ProjectDetailsComponent,
        data: {
          title: 'Portfolio',
          hidden: false,
        },
      }
    ]
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Freelance Work',
      hidden: false,
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Me',
      hidden: false,
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
