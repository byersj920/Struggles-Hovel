package com.StrugglesHovel.StrugglesHovel.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String rarity;
    private Integer cardNumber;
    private String username;
    private Integer numberNeeded;
    private Integer numberCollected = 0;

    public Card(Long id, String name, String rarity, Integer cardNumber, String username) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.cardNumber = cardNumber;
        this.username = username;

        switch (getRarity()) {
            case "Common" -> this.numberNeeded = 3;
            case "Uncommon" -> this.numberNeeded = 2;
            case "Rare", "Mythic Rare" -> this.numberNeeded = 1;
        }
    }
    
    //Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getRarity() {
        return rarity;
    }
    public void setRarity(String rarity) {
        this.rarity = rarity;
    }
    public Integer getCardNumber() {
        return cardNumber;
    }
    public void setCardNumber(Integer cardNumber) {
        this.cardNumber = cardNumber;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public Integer getNumberNeeded() {
        return numberNeeded;
    }
    public void setNumberNeeded(Integer numberNeeded) {
        this.numberNeeded = numberNeeded;
    }
    public Integer getNumberCollected() {
        return numberCollected;
    }
    public void setNumberCollected(Integer numberCollected) {
        this.numberCollected = numberCollected;
    }
}
