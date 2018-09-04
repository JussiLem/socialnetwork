import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import {BookmarksService} from "./bookmarks.service";
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookmarksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
