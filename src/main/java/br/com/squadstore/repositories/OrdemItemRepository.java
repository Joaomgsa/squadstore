package br.com.squadstore.repositories;

import br.com.squadstore.entities.OrderItem;
import br.com.squadstore.entities.pk.OrderItemPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdemItemRepository extends JpaRepository<OrderItem, OrderItemPK> {
}
