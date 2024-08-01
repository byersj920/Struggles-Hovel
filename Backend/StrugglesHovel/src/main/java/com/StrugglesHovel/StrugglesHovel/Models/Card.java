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
    private String usernames;
    private Integer numberNeeded;
    private Integer numberCollected = 0;
    private String color;
    private Integer manaValue;
    private String imageUri;

    public Card(String name, String rarity, Integer cardNumber, String color, Integer manaValue,
                String imageUri) {
        this.name = name;
        this.rarity = rarity;
        this.cardNumber = cardNumber;
        this.imageUri = imageUri;
        this.color = color;
        this.manaValue = manaValue;

        switch (getRarity()) {
            case "Common" -> this.numberNeeded = 4;
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
    public String getUsernames() {
        return usernames;
    }
    public void setUsernames(String usernames) {
        this.usernames = usernames;
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
    public String getImageUri() {
        return imageUri;
    }
    public void setImageUri(String imageUri) {
        this.imageUri = imageUri;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public Integer getManaValue() {
        return manaValue;
    }
    public void setManaValue(Integer manaValue) {
        this.manaValue = manaValue;
    }
}
