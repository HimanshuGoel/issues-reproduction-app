import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { TestPageComponent } from './components/test-page/test-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full',
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'test-page',
    component: TestPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
