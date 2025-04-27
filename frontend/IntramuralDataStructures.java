import java.util.ArrayList;
public class Main {
    
}

public class Team {
    int maxRosterSize;
    int size;
    Bool failToAdd = false;
    String teamName;
    String teamCaptain;
    ArrayList<string> roster = new ArrayList<string>();

    public void addPlayer(String playerName) {
        if size == maxRosterSize { //If roster is full, do not add
            failToAdd = True;
        }
        else {
            roster.add(playerName);
            size++;
        }
    }

}


public class Division {
    String divName;
    Bool waitlist; //Only true on the division that IS the waitlis
    Bool maleness; //For gender of league
    Bool failToAdd = false;

    ArrayList<Team> teamsList = new ArrayList<Team>();

    int minPlayers;
    int maxPlayers;
    int minTeams;
    int maxTeams;
    int currTeams;

    public void addTeam(Team newTeam) {
        if teamList.size() == maxTeams { //If league is full, do not add
            failToAdd = True;
        }
        else {
            teamList.add(newTeam);
            currTeams++;
        }
    }
}

public class League {
    String leagueName;
    ArrayList<Division> divisions = new ArrayList<Division();
}
