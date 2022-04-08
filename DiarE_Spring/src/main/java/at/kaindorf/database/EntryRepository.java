package at.kaindorf.database;

import at.kaindorf.pojos.Entry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface EntryRepository extends JpaRepository<Entry, LocalDate> {
}
