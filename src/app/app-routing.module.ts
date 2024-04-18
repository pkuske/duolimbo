import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { FoodComponent } from './pages/theme/food/food.component';
import { SocialComponent } from './pages/theme/social/social.component';
import { DirectionsComponent } from './pages/theme/directions/directions.component';
import { SeasonsComponent } from './pages/theme/seasons/seasons.component';
import { LevelBaseComponent } from './pages/levels/level-base/level-base.component';
import { LevelConnectComponent } from './pages/levels/level-connect/level-connect.component';
import { LevelListenComponent } from './pages/levels/level-listen/level-listen.component';
import { LevelTranslateComponent } from './pages/levels/level-translate/level-translate.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  }, 
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'theme',
    component: ThemeComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  { 
    path: 'settings', 
    component: SettingsComponent 
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'social',
    component: SocialComponent
  },
  {
    path: 'directions',
    component: DirectionsComponent
  },
  {
    path: 'seasons',
    component: SeasonsComponent
  },
  {
    path: 'level',
    component: LevelBaseComponent,
    children: [
      { path: '', redirectTo: 'level-connect', pathMatch: 'full'},
      { path: 'level-connect', component: LevelConnectComponent},
      { path: 'level-listen', component: LevelListenComponent},
      { path: 'level-translate', component: LevelTranslateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
