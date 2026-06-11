import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AffichageFormContact from "../components/AffichageFormContact";
import AffichageMailContact from "../components/AffichageMailContact";
import StatutChargement from "../components/StatutChargement";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [mail, setMail] = useState();
  const [mailErreur, setMailErreur] = useState(false);

  const [donnees, setDonnees] = useState({
    nomComplet: "",
    email: "",
    message: "",
  });

  const [envoi, setEnvoi] = useState(false); // True ou False uniquement = cohérence simple plutot que troisieme état avec useState()

  useEffect(() => {
    async function getMail() {
      try {
        const response = await fetch(`${API_URL}/api/mail`);

        if (!response.ok) {
          throw new Error("Données non trouvées");
        }

        const result = await response.json();
        setMail(result);
      } catch (e) {
        setMailErreur(true);
        toast.error("Impossible de charger l'affichage de l'adresse mail ");
      }
    }

    getMail();
  }, []);

  const gererSaisie = (event) => {
    const { name, value } = event.target;
    setDonnees((etatPrecedent) => ({
      ...etatPrecedent,
      [name]: value,
    }));
  };

  const soumettre = async (event) => {
    event.preventDefault();
    setEnvoi(true); // Statut du bouton = envoi

    try {
      const reponse = await fetch("url-api-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees),
      });

      if (!reponse.ok) throw new Error();

      toast.success("Votre message a été envoyé avec succès");
      setDonnees({ nomComplet: "", email: "", message: "" }); // Remet le forumlaire a 0
    } catch {
      toast.error("Impossible d'envoyer le message");
    } finally {
      setEnvoi(false); // Remet le statut du bouton a son etat initial
    }
  };

  return (
    <>
      {mailErreur ? (
        false
      ) : mail ? (
        <AffichageMailContact mail={mail.email} />
      ) : (
        <StatutChargement />
      )}

      {
        <AffichageFormContact
          donnees={donnees}
          gererSaisie={gererSaisie}
          soumettre={soumettre}
          statutEnvoi={envoi}
        />
      }
    </>
  );
}
