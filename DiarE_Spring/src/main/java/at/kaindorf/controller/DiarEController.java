package at.kaindorf.controller;

import at.kaindorf.database.EntryRepository;
import at.kaindorf.database.UserRepository;
import at.kaindorf.pojos.Entry;
import at.kaindorf.pojos.User;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@Slf4j
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class DiarEController {
    private static final DateTimeFormatter DTF = DateTimeFormatter.ofPattern("d.M.yyyy");
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private EntryRepository entryRepo;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @PostMapping("/token")
    public void GoogleAuthTokenIsValid(@RequestBody String accessToken) {
        GoogleCredential credential = new GoogleCredential().setAccessToken(accessToken);
    }

    @GetMapping("/{id}/all")
    public ResponseEntity<Iterable<Entry>> getEntriesForUser(@PathVariable(name = "id") String id) {
        if (id != null) {
            return ResponseEntity.of(Optional.of(entryRepo.findAll().stream().filter(e -> e.getUser().getUserID().equals(id)).collect(Collectors.toList())));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/{id}/specific")
    public ResponseEntity<Entry> getEntryForUser(@PathVariable(name = "id") String id, @RequestParam(name = "date") String date) {
        if (id != null) {
            for (Entry e: entryRepo.findAll()) {
                if (e.getUser().getUserID().equals(id) && e.getDate().equals(LocalDate.parse(date,DTF))){
                    return ResponseEntity.status(200).body(Optional.of(e).get());
                }
            }
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @PatchMapping("/{id}/specific")
    public ResponseEntity<Entry> updateEntry(@PathVariable(name = "id") String id, @RequestBody Entry newEntry) {
        if (newEntry == null) {
            return ResponseEntity.notFound().build();
        }
        if (entryRepo.findById(newEntry.getDate()).isPresent()) {
            Entry entry = entryRepo.findById(newEntry.getDate()).get();
            entryRepo.delete(entry);
            entry.setText(newEntry.getText());
            entryRepo.save(entry);
            return ResponseEntity.ok(entry);
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/{entry}")
    public ResponseEntity deleteEntry(@PathVariable(name = "entry") String date) {
        if (date == null) {
            return ResponseEntity.badRequest().build();
        }
        entryRepo.delete(entryRepo.getById(LocalDate.parse(date)));
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity getProfileObject(@RequestBody User user) {
        if (user != null) {
            userRepo.save(user);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/{id}/new/entry")
    public ResponseEntity<Entry> newEntry(@RequestBody Entry entry, @PathVariable String id) throws URISyntaxException {
        if (entry != null && userRepo.findById(id).isPresent()) {
            entry.setUser(userRepo.getById(id));
            System.out.println(entry + "|" + id);
            entryRepo.save(entry);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.badRequest().build();
    }
}
