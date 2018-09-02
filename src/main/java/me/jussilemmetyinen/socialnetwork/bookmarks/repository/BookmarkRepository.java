package me.jussilemmetyinen.socialnetwork.bookmarks.repository;

import me.jussilemmetyinen.socialnetwork.bookmarks.domain.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    Collection<Bookmark> findByAccountUsername(String username);
}
