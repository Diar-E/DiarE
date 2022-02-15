package at.kaindorf.pojos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "entry")
public class Entry implements Serializable {
    @Id
    @GeneratedValue
    private Integer entry_id;
    private LocalDate date;
    private String text;
}
