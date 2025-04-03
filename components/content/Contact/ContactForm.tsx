"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fname: z.string().min(1, "First name is required."),
  lname: z.string().min(1, "Last name is required."),
  email: z.string().email("Please enter a valid email address."),
  inquiry: z.string({
    required_error: "Please select a type of inquiry.",
  }),
  message: z.string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must not exceed 500 characters."),
});

type FormValues = z.infer<typeof formSchema>;

const inquiryTypes = [
  "Just saying hello",
  "Free Consultation",
  "Marketing Website",
  "Custom Software",
  "Minimum Viable Product (MVP)",
  "Others"
] as const;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      message: "",
      inquiry: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append('fname', data.fname);
      formData.append('lname', data.lname);
      formData.append('email', data.email);
      formData.append('inquiry', data.inquiry);
      formData.append('message', data.message);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Reset form on success
      form.reset();
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Let&apos;s get in touch</h3>
        <p className="text-sm text-gray-600">Whether you have a project in mind or just want to connect, I&apos;d love to hear from you. Feel free to reach out for any inquiries or collaborations.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-black/90">First Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className={cn(
                        form.formState.errors.fname && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                  </FormControl>
                  <FormMessage className="font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-black/90">Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className={cn(
                        form.formState.errors.lname && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                  </FormControl>
                  <FormMessage className="font-normal" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-black/90">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    {...field} 
                    className={cn(
                      form.formState.errors.email && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                </FormControl>
                <FormMessage className="font-normal" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="inquiry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-black/90">Type of Inquiry</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={cn(
                      form.formState.errors.inquiry && "border-red-500 focus-visible:ring-red-500"
                    )}>
                      <SelectValue placeholder="Select type of inquiry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
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
                <FormLabel className="font-medium text-black/90">
                  How can I help you?
                  <span className="text-gray-400 text-xs ml-2">Max 500 characters</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message here..."
                    className={cn(
                      "min-h-[100px]",
                      form.formState.errors.message && "border-red-500 focus-visible:ring-red-500"
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-normal" />
              </FormItem>
            )}
          />

          <Button size="lg" type="submit" className="w-full mt-2">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
