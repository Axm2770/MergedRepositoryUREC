package com.urec.leagues;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
    @Bean
    CommandLineRunner initDatabase(TeamRepository teamRepository,
                                   DivisionRepository divisionRepository,
                                   LeagueRepository leagueRepository) {

        return args -> {
            // Example league being preloaded to H2 database for reference
            //log.info("Preloading " + repository.save(new League("Example", false)));
        };
    }
}
