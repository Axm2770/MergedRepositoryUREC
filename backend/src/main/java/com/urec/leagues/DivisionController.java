package com.urec.leagues;

import org.springframework.web.bind.annotation.*;

import java.util.List;

/* *
* Controller for divisions
* Allows for adding a division to the repository, getting all divisions from the repository, getting a specific
* division from the repository, adding a team to a specific division, removing a specific division from the
* repository, and removing all divisions from the repository
* */
@RestController
public class DivisionController {

    private final DivisionRepository repository;

    public DivisionController(DivisionRepository repository) {
        this.repository = repository;
    }

    /* *
    * Saves a new division to the repository
    * input: newDivision - Division to be saved into the repository
    * */
    @PostMapping("/divisions")
    Division newDivision(Division newDivision)  {
        return repository.save(newDivision);
    }

    /* *
    * Returns all divisions in the repository
    * */
    @GetMapping("/divisions")
    List<Division> all()    {
        return repository.findAll();
    }

    /* *
    * Returns a specific division in the repository
    * input: id - id of the division being looked for
    * Throws a DivisionNotFoundException if the division is not found in the repository
    * */
    @GetMapping("/division/{id}")
    Division one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new DivisionNotFoundException(id));
    }

    /* *
    * Adds a team to a specific division
    * inputs:
    * team - team to be added into the division
    * id - id of the division receiving the team
    * */
    @PutMapping("/divisions/{id}")
    boolean addTeam(Team team, @PathVariable Long id)   {
        boolean added = repository.findById(id).orElseThrow(() -> new DivisionNotFoundException(id)).getFailToAdd();
        repository.findById(id).orElseThrow(() -> new DivisionNotFoundException(id)).addTeam(team);
        return added;
    }

    /* *
    * Removes a specific division from the repository
    * input: id - id of the division being removed
    * */
    @DeleteMapping("/divisions/{id}")
    void removeDivision(@PathVariable Long id)  {
        repository.deleteById(id);
    }


    /* *
    * Removes all divisions from the repository
    * */
    @DeleteMapping("/divisions")
    void removeAll()    {
        repository.deleteAll();
    }
}
