package com.urec.leagues;

import java.util.List;

import org.springframework.web.bind.annotation.*;

/* *
* Controller for teams
* Allows for adding a new team to the repository, getting all teams from the repository, getting a specific team
* from the repository, add a player to a specific team, remove a specific team, or remove all teams
* */
@RestController
public class TeamController {

    private final TeamRepository repository;

    public TeamController(TeamRepository repository)   {
        this.repository = repository;
    }

    /* *
    * Adds a new team to the repository
    * input: newTeam - team being added
    * */
    @PostMapping
    Team newTeam(Team newTeam)  {
        return repository.save(newTeam);
    }

    /* *
    * Returns all teams in the repository
    * */
    @GetMapping("/teams")
    List<Team> all()    {
        return repository.findAll();
    }

    /* *
    * Finds and returns a specific team from the repository
    * input: id - id of the team being looked for
    * Throws a TeamNotFoundException if the team is not found in the repository
    * */
    @GetMapping("/teams/{id}")
    Team one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new TeamNotFoundException(id));
    }

    /* *
    * Adds a player to a specific team
    * inputs:
    * name - name of the player being added
    * id - id of the team receiving the player
    * */
    @PutMapping("/teams/{id}")
    boolean addPlayer(String name, @PathVariable Long id)  {
        boolean added = repository.findById(id).orElseThrow(() -> new TeamNotFoundException(id)).getFailToAdd();
        repository.findById(id).orElseThrow(() -> new TeamNotFoundException(id)).addPlayer(name);
        return added;
    }

    /* *
    * Removes a team from the repository
    * input: id - id of the team to be removed
    * */
    @DeleteMapping("/teams/{id}")
    void removeTeam(@PathVariable Long id)    {
        repository.deleteById(id);
    }

    @DeleteMapping("/teams")
    void removeAll()    {
        repository.deleteAll();
    }
}
