package com.library.service;

import com.library.model.Notification;
import com.library.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepo;
    private final JavaMailSender mailSender;

    public NotificationService(NotificationRepository notificationRepo, JavaMailSender mailSender) {
        this.notificationRepo = notificationRepo;
        this.mailSender = mailSender;
    }

    public void sendNotification(Long userId, String message, String type, String userEmail) {
        Notification notification = new Notification(message, type, userId);
        notificationRepo.save(notification);

        if (type.contains("EMAIL") && userEmail != null) {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo(userEmail);
            email.setSubject("Library Notification");
            email.setText(message);
            mailSender.send(email);
        }
    }

    public List<Notification> getUserNotifications(Long userId) {
        return notificationRepo.findByUserIdOrderByTimestampDesc(userId);
    }

    public void markAsRead(Long notificationId) {
        notificationRepo.findById(notificationId).ifPresent(n -> {
            n.setRead(true);
            notificationRepo.save(n);
        });
    }
    
 // NotificationService.java
    public void sendBookDueReminder(Long userId, String bookTitle, String userEmail) {
        String message = "Reminder: The book \"" + bookTitle + "\" is due soon. Please return or renew it.";
        sendNotification(userId, message, "EMAIL,IN_APP", userEmail);
    }

    public void sendReservationAvailable(Long userId, String bookTitle, String userEmail) {
        String message = "Good news! The book \"" + bookTitle + "\" you reserved is now available for pickup.";
        sendNotification(userId, message, "EMAIL,IN_APP", userEmail);
    }

}
