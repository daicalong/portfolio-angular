import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as M from 'minimatch';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
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
        path: '',
        redirectTo: 'project-list',
        pathMatch: 'full',
      },
      {
        path: 'project-list',
        component: ProjectListComponent,
        data: {
          title: 'Portfolio',
          hidden: true,
        },
      },
      {
        path: 'details/:id',
        component: ProjectDetailsComponent,
        data: {
          title: 'Project Details',
          hidden: true,
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
