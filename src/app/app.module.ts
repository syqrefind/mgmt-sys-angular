import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogDirective } from './log.directive';
import { FirstPipePipe } from './first-pipe.pipe';
import { TableComponent } from './table/table.component';
import { MockDataService } from './mock-data.service';
import { TableRowComponent, TableRowComponentDialog } from './table/table-row/table-row.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableRowDetailsComponent } from './table/table-row/table-row-details/table-row-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddTaskComponent } from './add-task/add-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LogDirective,
    FirstPipePipe,
    TableComponent,
    TableRowComponent,
    TableRowDetailsComponent,
    AddTaskComponent,
    NotFoundComponent,
    TableRowComponentDialog,
    TitleCasePipe,
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
  ],
  providers: [
    MockDataService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent],
  entryComponents: [TableRowComponentDialog],
})
export class AppModule { }
