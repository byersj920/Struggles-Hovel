package com.StrugglesHovel.StrugglesHovel.Models;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.List;

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
    private String setCode;
    private Integer manaValue;
    private String imageUri;

    @ElementCollection
    private List<String> colors;

    public Card() {
    }

    public Card(String name, String rarity, Integer cardNumber, List<String> colors, Integer manaValue,
                String imageUri, String setCode) {
        this.name = name;
        this.rarity = rarity;
        this.cardNumber = cardNumber;
        this.colors = colors;
        this.manaValue = manaValue;
        this.imageUri = imageUri;
        this.setCode = setCode;
        this.numberNeeded = calculateNumberNeeded(rarity); // Calculate number needed
    }

    private Integer calculateNumberNeeded(String rarity) {
        return switch (rarity) {
            case "common" -> 4;
            case "uncommon" -> 2;
            case "rare", "mythic" -> 1;
            default -> 0;
        };
    }

    // Getters and Setters
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
        this.numberNeeded = calculateNumberNeeded(rarity); // Update number needed when rarity changes
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
    public List<String> getColors() {
        return colors;
    }
    public void setColors(List<String> colors) {
        this.colors = colors;
    }
    public Integer getManaValue() {
        return manaValue;
    }
    public void setManaValue(Integer manaValue) {
        this.manaValue = manaValue;
    }
    public String getSetCode() {
        return setCode;
    }
    public void setSetCode(String setCode) {
        this.setCode = setCode;
    }
}
