package at.kaindorf.pojos;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "users")
@JsonIgnoreProperties(ignoreUnknown = true)
public class User implements Serializable {
    @Id
    @Column(name = "user_id")
    @JsonAlias("googleId")
    private String userID;
    @JsonAlias("name")
    private String username;
    @JsonAlias("email")
    private String email;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "user")
    @JsonIgnore
    private List<Entry> entryList = new ArrayList<>();
}