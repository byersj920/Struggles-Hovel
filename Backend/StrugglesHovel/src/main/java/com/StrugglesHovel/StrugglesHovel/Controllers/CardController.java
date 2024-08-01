package com.StrugglesHovel.StrugglesHovel.Controllers;

import com.StrugglesHovel.StrugglesHovel.Models.Card;
import com.StrugglesHovel.StrugglesHovel.Repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @PostMapping
    public Card addCardToDatabase(@RequestBody Card card) {
        System.out.println("Received card: " + card);
        if (card.getName() != null && !card.getName().isEmpty()) {
            return cardRepository.save(card);
        } else {
            Card testCard = new Card("Ankle Biter", "Common", 13, "McdonaldsSprite");
            return cardRepository.save(testCard);
        }
    }
}
