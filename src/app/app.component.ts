import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators'
import { Project } from './shared/interfaces/project-list';
import { ActivatedRoute, NavigationEnd, Router, Routes } from '@angular/router';
import { routes } from './app-routing.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: string = 'Hatomi';
  darkModeStorageName: string = 'preferDarkMode';
  darkMode: boolean = false;
  list: Project[] = [];
  navRoutes: Routes = routes;

  constructor(
    private _renderer: Renderer2,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.checkDarkMode() ? this.setDarkMode() : this.removeDarkMode();
    this.setDynamicPageTitle();
  }

  setDynamicPageTitle(): void {
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data['title']) {
            return child.snapshot.data['title'] + ' | ' + this.title;
          }
          return this.title;
        })
      ).subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }

  showLog(): void {
    alert('it works!');
  }

  checkDarkMode(): boolean {
    const preferDarkMode = localStorage.getItem(this.darkModeStorageName)?.toString();
    return preferDarkMode === 'true' ? true : false;
  }

  setDarkMode(): void {
    this.darkMode = true;
    const html = document.querySelector('html');
    if (!html) return;
    this._renderer.addClass(html, 'dark')
    localStorage.setItem(this.darkModeStorageName, JSON.stringify(this.darkMode));
  }

  removeDarkMode(): void {
    this.darkMode = false;
    const html = document.querySelector('html');
    if (!html) return;
    this._renderer.removeClass(html, 'dark');
    localStorage.removeItem(this.darkModeStorageName);
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode) this.setDarkMode();
    else this.removeDarkMode();
  }
}

