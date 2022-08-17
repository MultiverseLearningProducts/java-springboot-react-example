package io.multiverse.plantstore;

import org.springframework.data.jpa.repository.JpaRepository;

interface PlantRepository extends JpaRepository<Plant, Integer> {}