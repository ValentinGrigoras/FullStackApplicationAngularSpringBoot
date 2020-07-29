package com.valentin.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valentin.crud.model.Friend;
import com.valentin.crud.repository.FriendRepository;

@Service
public class FriendServiceImpl implements FriendService{

	@Autowired
	private FriendRepository friendRepository;
	
	@Override
	public List<Friend> getFriends() {
		return friendRepository.findAll();
	}

	@Override
	public void addFriend(Friend friend) {
		friendRepository.save(friend);
		
	}

	@Override
	public void updateFriend(Friend friend) {
		friendRepository.save(friend);
		
	}

	@Override
	public void deleteFriend(Integer id) {
		friendRepository.deleteById(id);
		
	}

}
