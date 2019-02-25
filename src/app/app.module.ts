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

@NgModule({
  declarations: [
    AppComponent,
    LogDirective,
    FirstPipePipe,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
