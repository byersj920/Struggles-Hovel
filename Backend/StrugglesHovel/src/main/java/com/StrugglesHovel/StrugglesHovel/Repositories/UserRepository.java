package com.StrugglesHovel.StrugglesHovel.Repositories;
import com.StrugglesHovel.StrugglesHovel.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
