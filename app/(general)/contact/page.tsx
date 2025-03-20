import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Esta es mi página de contacto",
  keywords: ["Contact Page", "Josue", "Contacto"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
