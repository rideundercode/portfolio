import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public String sendContactMessage(@RequestParam String name, @RequestParam String email, @RequestParam String subject, @RequestParam String message) {
        String to = "your-email@example.com";
        String emailSubject = "New Contact Form Submission: " + subject;
        String emailText = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;
        emailService.sendEmail(to, emailSubject, emailText);
        return "Message sent successfully!";
    }
}
