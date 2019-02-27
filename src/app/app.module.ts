import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogDirective } from './log.directive';
import { FirstPipePipe } from './first-pipe.pipe';
import { TableComponent } from './table/table.component';
import { MockDataService } from './mock-data.service';
import { TableRowComponent } from './table/table-row/table-row.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableRowDetailsComponent } from './table/table-row/table-row-details/table-row-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/table',
    pathMatch: 'full',
  },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'table', component: TableComponent,
    children: [
      { path: '', redirectTo: 'table-row', pathMatch: 'full'},
      { path: 'table-row', component: TableRowComponent,
        children: [
          { path: '', redirectTo: 'table-row-details', pathMatch: 'full'},
          { path: 'table-row-details', component: TableRowDetailsComponent },
        ]},
    ]},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LogDirective,
    FirstPipePipe,
    TableComponent,
    TableRowComponent,
    TableRowDetailsComponent,
    AddTaskComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
  ],
  providers: [
    MockDataService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  //bootstrap: [AppComponent, provideRoutes(appRoutes)]
  bootstrap: [AppComponent]
})
export class AppModule { }
