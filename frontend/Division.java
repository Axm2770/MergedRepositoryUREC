import java.util.ArrayList;

public class Division {
    String divName;
    boolean waitlist; //Only true on the division that IS the waitlis
    boolean maleness; //For gender of league
    boolean failToAdd = false;

    ArrayList<Team> teamsList;

    int minPlayers;
    int maxPlayers;
    int minTeams;
    int maxTeams;
    int currTeams;

    public Division(String name, boolean waitlist, boolean male, int minPlayers, int maxPlayers, int minTeams, int maxTeams)    {
        this.divName = name;
        this.waitlist = waitlist;
        this.maleness = male;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.minTeams = minTeams;
        this.maxTeams = maxTeams;
        this.currTeams = 0;
        teamsList = new ArrayList<Team>();
    }

    public String getDivName()  { return this.divName; }
    public ArrayList<Team> getTeamsList()   { return this.teamsList; }
    public boolean isWaitlist() { return this.waitlist; }
    public boolean isMale()     { return this.maleness; }
    public int getMinPlayers()  { return this.minPlayers; }
    public int getMaxPlayers()  { return this.maxPlayers; }
    public int getMaxTeams()    { return this.maxTeams; }
    public int getMinTeams()    { return this.minTeams; }
    public int getCurrTeams()   { return this.currTeams; }
    public boolean getFailToAdd()   { return this.failToAdd; }

    public void setFailToAdd(boolean fail)  { this.failToAdd = fail; }

    public void addTeam(Team newTeam) {
        if (teamList.size() == maxTeams) { //If league is full, do not add
            failToAdd = True;
        }
        else {
            teamList.add(newTeam);
            currTeams++;
        }
    }
}
