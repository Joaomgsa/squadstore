package br.com.squadstore.repositories;

import br.com.squadstore.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdemItem extends JpaRepository<OrderItem, Long> {
}
