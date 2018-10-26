package pl.mojaaplikacja.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.mojaaplikacja.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
