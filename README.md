# Portfolio de Thomas

Ouvrez `index.html` dans un navigateur après avoir extrait l’archive. Gardez `styles.css`, `script.js` et le dossier `images` à côté du fichier HTML. La page fonctionne sans installation ni dépendance externe.

## Intégration

La [maquette LearningCampus](https://www.figma.com/design/687syGebv93JgNJYw0FbPQ/LearningCampus-maquette-portfolio?node-id=0-1&p=f) a servi de référence visuelle pour le portrait rond, la palette, les espacements et les projets en rangées. Les dimensions et la typographie ont été estimées à l’écran. Le bloc d’articles devient trois cartes de services et le bouton principal mène aux réalisations. Le portrait et les trois visuels ont été générés pour illustrer le challenge et peuvent être remplacés par les fichiers de Thomas.

Grid organise les cartes et les projets. Flexbox aligne la navigation et le pied de page. Les seuils sont à 40 rem et 64 rem (640 et 1 024 px avec une taille de texte par défaut de 16 px). Le menu mobile se referme après le choix d’une section ou avec Échap.

## Activer un envoi réel

Le bouton vérifie les champs dans le navigateur. Aucun message n’est transmis. Pour activer un envoi, reliez le formulaire à un service de formulaires ou à une route HTTPS qui accepte une requête POST. Configurez l’adresse destinataire côté serveur ou dans le service, validez les champs côté serveur et prévoyez une protection anti-spam. Remplacez ensuite le gestionnaire de démonstration dans `script.js` par l’intégration choisie et affichez la confirmation après une réponse réussie du serveur. Testez la réception et les réponses d’erreur avant la mise en ligne.

## Structure du dépôt

- `index.html` contient la page d’accueil et ses sections.
- `styles.css` contient la mise en page responsive.
- `script.js` gère le menu mobile et la validation du formulaire de démonstration.
- `images/` contient les visuels et le favicon.

## Mise en ligne sur un hébergement mutualisé

Transférez `index.html`, `styles.css`, `script.js` et le dossier `images/` dans le répertoire public indiqué par l’hébergeur. Conservez les chemins relatifs. Ouvrez ensuite l’URL publique en HTTPS et refaites les vérifications.

## CV de Thomas

Le PDF reste à fournir. Une fois le fichier fourni, placez-le dans `documents/cv-thomas.pdf`, ajoutez un lien « Télécharger le CV (PDF) » avec l’attribut HTML `download` et vérifiez le téléchargement depuis l’URL publique.
