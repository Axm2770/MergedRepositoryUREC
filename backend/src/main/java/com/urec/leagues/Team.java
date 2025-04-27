package com.urec.leagues;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.ArrayList;

@Entity
public class Team {
    private @Id
    @GeneratedValue long id;
    int maxRosterSize;
    int size;
    boolean failToAdd = false;
    String teamName;
    String teamCaptain;
    ArrayList<String> roster;

    public Team(String name, int maxSize, String cap)   {
        this.maxRosterSize = maxSize;
        this.teamName = name;
        this.teamCaptain = cap;
        this.roster = new ArrayList<String>();
        this.roster.add(cap);
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
        if (!failToAdd) {
            roster.add(playerName);
            size++;
        }
        if (size == maxRosterSize) { //If roster is full, do not add
            failToAdd = true;
        }
    }
}
