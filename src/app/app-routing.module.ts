import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRoutes, CanActivate } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: TableComponent, pathMatch: 'full'},
  { path: 'add-task', component: AddTaskComponent },
  { path: 'table',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent},
  // { enableTracing: true }, // <-- debugging purposes only
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
