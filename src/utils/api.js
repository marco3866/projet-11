import axios from 'axios';

// Création d'une instance axios
const api = axios.create({
  baseURL: '/', // Base URL pour toutes les requêtes
  timeout: 10000, // Timeout de 10 secondes
});

// Fonction pour obtenir les données des flats
export const getFlats = async () => {
  try {
    const response = await api.get('flats.json'); // Assurez-vous que 'flats.json' est correct
    return response.data;
  } catch (error) {
    console.error('Il y a eu une erreur lors de la récupération des données des appartements !', error);
    throw error; // Propager l'erreur pour la gérer ailleurs si nécessaire
  }
};
