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
import 'hammerjs';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { TableRowDetailsComponent } from './table/table-row/table-row-details/table-row-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LogDirective,
    FirstPipePipe,
    TableComponent,
    TableRowComponent,
    TableRowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
