import java.util.ArrayList;
import java.io.IOException;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.util.Scanner;


public class League {
    String leagueName;
    ArrayList<Division> divisions;

    /*
     * Creates a new League object
     * Inputs:
     * String name - Name of the league or file
     * boolean isFile - True if the name is for a file and false if the name is the name of the league
     */
    public League(String name, boolean isFile)  {
        if (isFile) {
            try {
                this.divisions = new ArrayList<Division>();
                File file = new File(name);
                Scanner reader = new Scanner(file);
                while (reader.hasNextLine())    {
                    String data = reader.nextLine();
                    this.leagueName = data;
                    data = reader.nextLine();
                    // Division data
                    String divName;
                    boolean divWaitList;
                    boolean divMaleness;
                    int divMinPlayers;
                    int divMaxPlayers;
                    int divMinTeams;
                    int divMaxTeams;
                    int divCurrTeams;
                    boolean divFailToAdd;
                    while (data.compareTo("-") != 0)    {
                        Division division;
                        divName = data;
                        data = reader.nextLine();
                        if (data.compareTo("1")) { divWaitList = true; }
                        else { divWaitList = false; }
                        data = reader.nextLine();
                        if (data.compareTo("1")) { divMaleness = true; }
                        else { divMaleness = false; }
                        data = reader.nextLine();
                        divMinPlayers = Integer.parseInt(data);
                        data = reader.nextLine();
                        divMaxPlayers = Integer.parseInt(data);
                        data = reader.nextLine();
                        divMinTeams = Integer.parseInt(data);
                        data = reader.nextLine();
                        divMaxTeams = Integer.parseInt(data);
                        data = reader.nextLine();
                        divCurrTeams = Integer.parseInt(data);
                        data = reader.nextLine();
                        if (data.compareTo("1")) { divFailToAdd = true; }
                        else { divFailToAdd = false; }
                        division = new Division(divName, divWaitList, divMaleness, divMinPlayers, divMaxPlayers, divMinTeams, divMaxTeams);
                        division.setFailToAdd(divFailToAdd);
                        data = reader.nextLine();
                        // Team data
                        String teamName;
                        int teamMaxSize;
                        String teamCaptain;
                        Team team;
                        while (data.compareTo("+") != 0)    {
                            teamName = data;
                            data = reader.nextLine();
                            teamCaptain = data;
                            data = reader.nextLine();
                            teamMaxSize = Integer.parseInt(data);
                            team = new Team(teamName, teamMaxSize, teamCaptain);
                            data = reader.nextLine();
                            while (data.compareTo("=") != 0)    {
                                team.addPlayer(data);
                                data = reader.nextLine();
                            }
                            division.addTeam(team);
                        }
                        this.divisions.add(division);
                    }
                }
                reader.close();
            }
            catch (FileNotFoundException e) { System.out.println("FileNotFoundException raised trying to create league from file"); }
        }
        else    {
            this.leagueName = name;
            this.divisions = new ArrayList<Division>();
        }
    }

    public ArrayList<Division> getDivisions()   { return this.divisions; }

    public void addDivision(Division d)   {
        this.divisions.add(d);
    }

    /*
     * Writes all information about a league, including divisions and teams to a text file
     * File name is <league name>.txt
     * Format is:
     * League name
     * Division 1 name
     * Division 1 waitlist (0[false] or 1[true])
     * Division 1 maleness (0 or 1)
     * Division 1 minPlayers
     * Division 1 maxPlayers
     * Division 1 minTeams
     * Division 1 maxTeams
     * Division 1 currTeams
     * Division 1 failToAdd (0 or 1)
     * Division 1 Team 1 Name
     * Division 1 Team 1 teamCaptain
     * Division 1 Team 1 Size
     * Division 1 Team 1 maxRosterSize
     * Division 1 Team 1 failToAdd (0 or 1)
     * Division 1 Team 1 Player 1
     * Division 1 Team 1 Player 2
     * = (Deliminator indicating the end of all players from one team)
     * etc.
     * + (Deliminator indicating the end of all teams)
     * - (Deliminator indicating the end of all division)
     * Divsion 2 data (Same format as seen above)
     * etc.
     */
    public void writeToFile()   {
        try {
            String fileName = this.leagueName + ".txt";
            File file = new File(fileName);
            FileWriter fw = new FileWriter(file.getAbsolutePath());
            BufferedWriter bw = new BufferedWriter(fw);

            if (divisions.isEmpty())    {
                bw.write(this.leagueName + "\n");
                bw.write("+\n");
                bw.write("-\n");
            }
            else    {
                bw.write(this.leagueName + "\n");
                for(Division div : this.divisions)  {
                    bw.write(div.getDivName() + "\n");
                    if (div.isWaitlist())   { bw.write("1\n");}
                    else { bw.write("0\n"); }
                    if (div.isMale())   { bw.write("1\n");}
                    else { bw.write("0\n"); }
                    bw.write(String.valueOf(div.getMinPlayers()) + "\n");
                    bw.write(String.valueOf(div.getMaxPlayers()) + "\n");
                    bw.write(String.valueOf(div.getMinTeams()) + "\n");
                    bw.write(String.valueOf(div.getMaxTeams()) + "\n");
                    bw.write(String.valueOf(div.getCurrTeams()) + "\n");
                    if (div.getFailToAdd())   { bw.write("1\n");}
                    else { bw.write("0\n"); }
                    for (Team team : div.getTeamsList())    {
                        bw.write(team.getTeamName() + "\n");
                        bw.write(team.getCaptain() + "\n");
                        bw.write(String.valueOf(team.getSize()) + "\n");
                        bw.write(String.valueOf(team.getMaxSize()) + "\n");
                        if (team.getFailToAdd())   { bw.write("1\n");}
                        else { bw.write("0\n"); }
                        for (String player : team.getRoster())  {
                            bw.write(player + "\n");
                        }
                        bw.write("=\n");
                    }
                    bw.write("+\n");
                }
                bw.write("-\n");
            }
            bw.close();
        }
        catch (IOException e)   { System.out.println("IOException raised in writing division to file"); }
    }
}