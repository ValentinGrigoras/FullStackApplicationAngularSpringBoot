package com.valentin.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valentin.crud.model.Friend;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Integer>{

}
