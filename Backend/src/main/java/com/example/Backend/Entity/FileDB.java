package com.example.Backend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table( name="fileupload")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class FileDB {
	
	 @Id
	  @GeneratedValue(generator = "uuid")
	  @GenericGenerator(name = "uuid", strategy = "uuid2")
	  private String id;

	  private String name;

	  private String type;

	  @Lob
	  private byte[] data;
	  
	  public FileDB(String name, String type, byte[] data) {
		    this.name = name;
		    this.type = type;
		    this.data = data;
		  }

}
