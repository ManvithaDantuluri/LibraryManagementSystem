// com.library.model.Notification.java
package com.library.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;

    private LocalDateTime timestamp;

    private boolean read;

    private String type; // "EMAIL", "IN_APP", or both

    private Long userId;

    public Notification() {}

    public Notification(String message, String type, Long userId) {
        this.setMessage(message);
        this.setTimestamp(LocalDateTime.now());
        this.setRead(false);
        this.setType(type);
        this.setUserId(userId);
    }

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isRead() {
		return read;
	}

	public void setRead(boolean read) {
		this.read = read;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

    // Getters and Setters
}
