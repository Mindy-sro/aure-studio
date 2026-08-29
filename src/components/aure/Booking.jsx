import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const services = [
"Hard Gel Architektúra",
"Japonská manikúra",
"Chrome & Liquid Metal",
"Matte Burgundy",
"Nail Art Ateliér",
"Rekonštrukcia & Korekcia"];


const times = ["9:00", "11:00", "13:00", "15:00", "17:00"];

export default function Booking() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0], date: "", time: times[0] });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Rezervácia prijatá",
        description: `Ďakujeme, ${form.name}. Potvrdenie odošleme na ${form.email}.`
      });
      setForm({ name: "", email: "", phone: "", service: services[0], date: "", time: times[0] });
    }, 900);
  };

  const field = "w-full bg-transparent border-b border-[hsl(var(--steel))] py-3 text-[hsl(var(--chrome))] placeholder:text-[hsl(var(--chrome))]/40 focus:border-[hsl(var(--chrome))] outline-none transition-colors";

  return null;








































































}