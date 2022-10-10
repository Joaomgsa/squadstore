package br.com.squadstore.repositories;

import br.com.squadstore.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository <Category, Long>{
}
