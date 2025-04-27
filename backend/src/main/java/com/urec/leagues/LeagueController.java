package com.urec.leagues;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.web.bind.*;

/* *
 * Controller for the leagues
 * Allows for adding a new league, getting all leagues, getting a specific league,
 * adding a division to a specific league, removing a specific league from the
 * repository, and removing all leagues from the repository
 * */
@RestController
public class LeagueController {

    private final LeagueRepository repository;

    LeagueController(LeagueRepository repository)   {
        this.repository = repository;
    }

    /* *
    * Saves a new league to the repository
    * input: newLeague - league being saved to the repository
    * */
    @PostMapping("/leagues")
    League newLeague(@RequestBody League newLeague) {
        return repository.save(newLeague);
    }

    /* *
    * Gets all leagues in the repository
    * */
    @GetMapping("/leagues")
    List<League> all()  {
        return repository.findAll();
    }

    /* *
    * Finds and returns a league within the repository
    * input: id - ID of the league being looked for
    * Throws a LeagueNotFoundException if the league is not found in the repository
    * */
    @GetMapping("/leagues/{id}")
    League one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new LeagueNotFoundException(id));
    }

    /* *
    * Adds a division to a league
    * Inputs:
    *   div - Division to be added
    *   id - id of the league receiving the division
    * */
    @PutMapping("/leagues")
    void addDivision(Division div, @PathVariable Long id)  {
        repository.findById(id).orElseThrow(() -> new LeagueNotFoundException(id)).addDivision(div);
    }

    /* *
    * Removes a specific league from the repository
    * input: id - id of the league to be removed
    * */
    @DeleteMapping("/leagues/{id}")
    void removeLeague(@PathVariable Long id)    {
        repository.deleteById(id);
    }

    /* *
    * Removes all leagues from the repository
    * */
    @DeleteMapping("/leagues")
    void removeAll()    {
        repository.deleteAll();
    }
}
