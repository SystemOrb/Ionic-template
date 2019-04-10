import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routes';
import { Page1Page } from './page1/page1.page';
import { Page2Page } from './page2/page2.page';
import { Page3Page } from './page3/page3.page';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    Page1Page,
    Page2Page,
    Page3Page,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule
  ],
  entryComponents: [
    Page1Page,
    Page2Page,
    Page3Page,
    HomeComponent
  ]
})
export class PagesModule { }
