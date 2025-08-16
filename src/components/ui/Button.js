import { FaSpinner } from "react-icons/fa";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactForm({ register, isSubmitting }) {
  return (
    <Card>
      <div className="p-8">
        <Input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          required
        />
        <Input
          type="email"
          placeholder="your.email@example.com"
          {...register("email", { /* ... */ })}
          required
        />
        <Textarea
          placeholder="Tell me about your project idea..."
          {...register("message", { required: "Message is required" })}
          rows={4}
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" />
              Sending...
            </>
          ) : (
            <span>Send Message</span>
          )}
        </Button>
      </div>
    </Card>
  );
}