import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Page1Page } from './page1/page1.page';
import { Page2Page } from './page2/page2.page';
import { Page3Page } from './page3/page3.page';


const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'page1',
        component: Page1Page
    },
    {
        path: 'page2',
        component: Page2Page
    },
    {
        path: 'page3',
        component: Page3Page
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
