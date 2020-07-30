package com.valentin.crud.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Friend {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Integer id;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String department;
	
	@Column
	private String email;
	
	@Column 
	private String country;
}
