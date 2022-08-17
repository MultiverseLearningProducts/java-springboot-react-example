package io.multiverse.plantstore;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlantController {
    private PlantRepository plantRepo;

    PlantController (PlantRepository plantRepo) {
        this.plantRepo = plantRepo;
    }

    @GetMapping("/api/plants")
    public List<Plant> getPlants() {
        return plantRepo.findAll();
    }
}