import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const CondolenceForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Bitte füllen Sie alle Felder aus.");
      return;
    }
    toast.success("Ihre Nachricht wurde geteilt. Vielen Dank für Ihr Gedenken.");
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 uppercase tracking-wider">
          Ihr Name
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background/50 border-border/50 focus:border-primary/50"
          placeholder="Ihr vollständiger Name"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80 uppercase tracking-wider">
          Ihre Botschaft
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-background/50 border-border/50 focus:border-primary/50 min-h-[120px] resize-none"
          placeholder="Teilen Sie Ihre Gedanken und Erinnerungen..."
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide"
      >
        Nachricht teilen
      </Button>
    </form>
  );
};

export default CondolenceForm;
