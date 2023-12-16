import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeroSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconSpriteModule,
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'}),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
