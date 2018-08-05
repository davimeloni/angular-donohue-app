import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShopifyService } from './services/shopify.service';
import { NetoDashboardComponent } from './components/neto-dashboard/neto-dashboard.component';
import { NetoService } from './services/neto.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'neto-dashboard', component: NetoDashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    NetoDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShopifyService, NetoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
