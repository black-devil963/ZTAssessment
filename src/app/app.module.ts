import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OrderinteractionComponent } from './components/orderinteraction/orderinteraction.component';
import { AdminHoverCardComponent } from './components/admin-hover-card/admin-hover-card.component';
import { FileManipulationComponent } from './components/file-manipulation/file-manipulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AdminHoverCardComponent,
    OrderinteractionComponent,
    FileManipulationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'file-manipulation',
        component: FileManipulationComponent,
      },
      { path: 'order-interaction', component: OrderinteractionComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
