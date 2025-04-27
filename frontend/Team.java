import java.util.ArrayList;

public class Team {
    int maxRosterSize;
    int size;
    boolean failToAdd = false;
    String teamName;
    String teamCaptain;
    ArrayList<string> roster = new ArrayList<string>();

    public Team(String name, int maxSize, String cap)   {
        this.maxRosterSize = maxSize;
        this.teamName = name;
        this.teamCaptain = cap;
        this.size = 1;  // Set to 1 since the captain is a part of the team
    }

    // Access methods
    public String getTeamName() { return this.teamName; }
    public int getSize()    { return this.size; }
    public int getMaxSize() { return this.maxRosterSize; }
    public String getCaptain() { return this.teamCaptain; }
    public ArrayList<String> getRoster()    { return this.roster; }
    public boolean getFailToAdd()   { return this.failToAdd; }

    public void setFailToAdd(boolean fail)  { this.failToAdd = fail; }

    public void addPlayer(String playerName) {
        if (size == maxRosterSize) { //If roster is full, do not add
            failToAdd = True;
        }
        else {
            roster.add(playerName);
            size++;
        }
    }

}