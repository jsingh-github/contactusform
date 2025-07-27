import ContactForm from "./components/ContactForm";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      <ContactForm />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#D17A5A',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
    </>
  );
}
