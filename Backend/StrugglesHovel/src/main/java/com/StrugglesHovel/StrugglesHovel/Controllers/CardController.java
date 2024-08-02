package com.StrugglesHovel.StrugglesHovel.Controllers;

import com.StrugglesHovel.StrugglesHovel.Models.Card;
import com.StrugglesHovel.StrugglesHovel.Repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping
    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }

    @PostMapping
    public Card addCardToDatabase(@RequestBody Card card) {
        return cardRepository.save(card);
    }
}
