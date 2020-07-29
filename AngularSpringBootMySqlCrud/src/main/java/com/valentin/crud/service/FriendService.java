package com.valentin.crud.service;

import java.util.List;

import com.valentin.crud.model.Friend;

public interface FriendService {

	
	public List<Friend> getFriends();
	public void addFriend(Friend friend);
	public void updateFriend(Friend friend);
	public void deleteFriend(Integer id);
}
