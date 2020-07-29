package com.valentin.crud.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.valentin.crud.model.Friend;
import com.valentin.crud.service.FriendService;

@RestController
@CrossOrigin
public class FriendRestController {

	@Autowired
	private FriendService friendService;
	
	@GetMapping("/friends")
	public List<Friend> getFriends(){
		return friendService.getFriends();
	}
	
	@PostMapping("/friends/addnew")
	public void addFriend(@RequestBody Friend friend){
		friendService.addFriend(friend);
	}
	
	@PutMapping("friends/{id}/edit")
	public void updateFriend(@PathVariable("id") Integer id, @RequestBody Friend friend) {
		friendService.updateFriend(friend);
	}
	
	@DeleteMapping("friends/{id}/delete")
	public void deleteFriend(@PathVariable("id") Integer id) {
		friendService.deleteFriend(id);
	}
}
