import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { SocialComponent } from './pages/theme/social/social.component';
import { FoodComponent } from './pages/theme/food/food.component';
import { DirectionsComponent } from './pages/theme/directions/directions.component';
import { SeasonsComponent } from './pages/theme/seasons/seasons.component';
import { LevelBaseComponent } from './pages/levels/level-base/level-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    OverviewComponent,
    ThemeComponent,
    SocialComponent,
    FoodComponent,
    DirectionsComponent,
    SeasonsComponent,
    LevelBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
