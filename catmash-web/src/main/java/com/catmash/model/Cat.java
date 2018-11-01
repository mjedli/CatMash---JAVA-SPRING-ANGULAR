/**
 * 
 */
package com.catmash.model;

/**
 * @author mjedli
 *
 */
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * @author mjedli
 *
 */
@Entity
@Table(name="cat")
public class Cat implements Serializable {

	private static final long serialVersionUID = 1L;

	@NotEmpty
	@NotNull
	@Id
	@Column(name = "ID", unique=true, nullable = false)
	private String id;
	
	@NotEmpty
	@NotNull
	@Column(name = "URL", nullable = false)
	private String url;
	
	@Column(name = "SCORE", nullable = false)
	private Integer score;

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return the score
	 */
	public int getScore() {
		return score;
	}

	/**
	 * @param score the score to set
	 */
	public void setScore(int score) {
		this.score = score;
	}
	
}
