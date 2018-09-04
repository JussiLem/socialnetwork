import { Component, OnInit } from '@angular/core';
import { BookmarksService} from "../bookmarks.service";

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.css']
})
export class BookmarksListComponent implements OnInit {

  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit() {
    this.bookmarksService.getAll().subscribe(data => {
      this.bookmarksService = data;
    })
  }

}
