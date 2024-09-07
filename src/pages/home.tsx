// src/pages/Home.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import waterManagementImage from "../assets/water-management.webp"; // Example image
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Showcase Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Nos Stations de Pompage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="src/assets/station1.jpg"
                alt="Station 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Station 1</h3>
              <p>
                Située à Alger, gère l'approvisionnement en eau pour la région
                centrale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="src/assets/station2.webp"
                alt="Station 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Station 2</h3>
              <p>Assure le bon fonctionnement dans la région occidentale.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="src/assets/station3.webp"
                alt="Station 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Station 3</h3>
              <p>
                Assure une gestion efficace de l'eau dans les territoires du
                sud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <Testimonials />
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-gray-800 text-white">
      <img
        src="src/assets/hero-image.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Ouvrage Hydro Tech</h1>
        <p className="mt-4 text-lg md:text-xl">
          Systèmes de Gestion de l'Eau Innovants
        </p>
        <Button variant="default" className="mt-6">
          En Savoir Plus
        </Button>
      </div>
    </section>
  );
};

const features = [
  {
    id: 1,
    title: "Planificateur de Station de Pompage",
    description: "Gérez et planifiez efficacement les opérations de pompage.",
    image: "src/assets/pump-station.webp",
  },
  {
    id: 2,
    title: "Détection d'Incidents",
    description:
      "Détection d'anomalies en temps réel dans les systèmes de gestion de l'eau.",
    image: "src/assets/icident.webp",
  },
  {
    id: 3,
    title: "Retour d'Information des Clients",
    description: "Collectez et gérez facilement les retours des clients.",
    image: "src/assets/feedback.webp",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Fonctionnalités</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white flex items-center justify-center">
      <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              Ce que les gens <br />
              disent.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Découvrez les avis de nos clients satisfaits.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="src/assets/avatar-1.jpeg" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Fatima Zahra.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Une expérience formidable ! J'ai trouvé ce que je cherchais
                    et le service client a été exceptionnel. Je recommande
                    vivement !
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="src/assets/avatar-2.jpeg" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Aicha Belkacem.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Très satisfait du produit, livré rapidement et conforme à la
                    description. Merci beaucoup !
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="src/assets/avatar-3.jpg" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Youssef El Arbi.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Le service a été excellent et les produits de très bonne
                    qualité. Je reviendrai sans aucun doute.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="src/assets/avatar-4.webp" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Ahmed Ben Ali.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Service client impeccable, et le produit a dépassé mes
                    attentes. Merci pour cette expérience.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="src/assets/avatar-5.webp" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Khalid Bouaziz.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Une excellente expérience d'achat avec un service
                    après-vente réactif. Je recommande vivement !
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="src/assets/avatar-6.jpeg" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Rami Khediri.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Un très bon service, rapide et efficace. Je suis très
                    satisfait de mon achat.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div
      className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${waterManagementImage})` }}
    >
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Card className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <CardHeader>
                <CardTitle> Contactez-nous</CardTitle>
                <CardDescription>
                  Remplissez le formulaire pour commencer une conversation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md ">
                    Acme Inc, Rue, État, Code Postal
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md ">+213 1234567890</div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md ">info@Hydro-Tech.org</div>
                </div>
              </CardContent>
            </Card>

            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <Label htmlFor="name" className="hidden">
                  Nom Complet
                </Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Nom Complet"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <Label htmlFor="email" className="hidden">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <Label htmlFor="tel" className="hidden">
                  Numéro
                </Label>
                <Input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Numéro de Téléphone"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
              >
                Soumettre
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#001740] text-white pt-16  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          {/* image tag for logo image with 50px size */}
          <img src="src/assets/logo.jpg" alt="Logo" className="w-96  " />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Carrières
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Ressources</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Études de cas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Livres blancs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#">
              <img src="src/assets/icons8-facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img
                className="w-12"
                src="src/assets/icons8-x.svg"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img src="src/assets/icons8-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Ouvrage Hydro Tech. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
};

export default Home;
