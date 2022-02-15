package at.kaindorf.controller;

import at.kaindorf.database.EntryRepository;
import at.kaindorf.database.UserRepository;
import at.kaindorf.pojos.Entry;
import at.kaindorf.pojos.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@Slf4j
@CrossOrigin("http://localhost:3000")
//@RequestMapping("/api")
public class DiarEController {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private EntryRepository entryRepo;
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
    @GetMapping("/entries")
    public List<Entry> getAllEntries() {
        return userRepo.findById(1).get().getEntryList();
    }
    /*@GetMapping("/entries/{id}")
    public Entry getEntry(@PathVariable Integer id) {
        return entryRepo.findById(id).get();
    }*/
    @PostMapping("/entries/new")
    public ResponseEntity<Entry> newEntry(@RequestBody Entry entry) throws URISyntaxException {
        try {
            entry = entryRepo.save(entry);
            URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(entry.getEntry_id())
                    .toUri();
            return ResponseEntity.created(location).build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
