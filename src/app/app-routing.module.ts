import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';
import { EverythingComponent } from './components/everything/everything.component';

const routes: Routes = [
  { path: '', redirectTo: 'top-headlines', pathMatch: 'full' },
  { path: 'top-headlines', component: TopHeadlinesComponent },
  { path: 'everything', component: EverythingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
