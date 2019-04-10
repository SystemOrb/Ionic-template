import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BarComponent,
    MenuComponent
  ],
  entryComponents: [
    BarComponent,
    MenuComponent
  ],
  exports: [
    BarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
