package me.jussilemmetyinen.socialnetwork.bookmarks.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class BookmarkNotFoundException extends RuntimeException {
    public BookmarkNotFoundException(Long bookmarkId) {

        super("Could not found bookmark '" + bookmarkId + "'." );
    }

}
