import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  prestation: z.string().min(1, "Veuillez sélectionner une prestation"),
  departement: z.string().min(1, "Veuillez sélectionner votre département"),
  surface: z.string().min(1, "Veuillez sélectionner une surface approximative"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function QuoteForm() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      telephone: "",
      email: "",
      prestation: "",
      departement: "",
      surface: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    toast({
      title: "Demande envoyée avec succès !",
      description: "Notre équipe vous recontactera dans les plus brefs délais pour votre devis.",
    });
    form.reset();
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Demander un devis gratuit</h3>
        <p className="text-gray-500 text-sm">Réponse rapide garantie en moins de 24h</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet</FormLabel>
                  <FormControl>
                    <Input placeholder="Jean Dupont" {...field} className="bg-gray-50/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="06 12 34 56 78" type="tel" {...field} className="bg-gray-50/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
               <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="jean.dupont@email.com" type="email" {...field} className="bg-gray-50/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="prestation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de prestation</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50/50">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="remplacement">Remplacement</SelectItem>
                      <SelectItem value="entretien">Entretien</SelectItem>
                      <SelectItem value="depannage">Dépannage</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surface"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surface approx.</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50/50">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="<20">Moins de 20 m²</SelectItem>
                      <SelectItem value="20-50">20 à 50 m²</SelectItem>
                      <SelectItem value="50-100">50 à 100 m²</SelectItem>
                      <SelectItem value=">100">Plus de 100 m²</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="departement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre département</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-50/50">
                      <SelectValue placeholder="Sélectionnez un département" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="75">Paris (75)</SelectItem>
                    <SelectItem value="77">Seine-et-Marne (77)</SelectItem>
                    <SelectItem value="78">Yvelines (78)</SelectItem>
                    <SelectItem value="91">Essonne (91)</SelectItem>
                    <SelectItem value="92">Hauts-de-Seine (92)</SelectItem>
                    <SelectItem value="93">Seine-Saint-Denis (93)</SelectItem>
                    <SelectItem value="94">Val-de-Marne (94)</SelectItem>
                    <SelectItem value="95">Val-d'Oise (95)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (optionnel)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Précisez votre besoin (ex: type de logement, nombre de pièces...)" 
                    className="resize-none bg-gray-50/50 h-24" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full mt-4 font-bold text-base h-14 rounded-xl group">
            Recevoir mon devis gratuit
            <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
          <p className="text-xs text-center text-gray-400 mt-3">
            Vos données sont protégées. Aucune sollicitation commerciale abusive.
          </p>
        </form>
      </Form>
    </div>
  );
}
