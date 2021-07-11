import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { AirtableApiService } from './core/services/http/airtable-api/airtable-api.service';
import { Project } from './shared/interfaces/project-list';
import { Routes } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  darkModeStorageName: string = 'preferDarkMode';
  darkMode: boolean = false;
  list: Project[] = [];
  navRoutes: Routes = routes;

  constructor(private _renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.checkDarkMode() ? this.setDarkMode() : this.removeDarkMode();
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

