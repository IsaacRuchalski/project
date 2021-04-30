# InstruFinder
[InstruFinder](https://instrufinder-d2d9f.firebaseapp.com/) est une [SPA](https://en.wikipedia.org/wiki/Single-page_application), ou une application Web développée par [Isaac Ruchalski](https://github.com/IsaacRuchalski).

InstruFinder permet de découvrir des instruments de musique.

InstruFinder est disponible ici : https://instrufinder-d2d9f.web.app/

La collection de tests Postman pour le back est disponible [ici](https://github.com/IsaacRuchalski/project/blob/master/InstruFinder.postman_collection.json)
## Librairies

InstruFinder utilise plusieurs librairies : 

* [API REST Heroku](https://evening-brushlands-19063.herokuapp.com/), faite par Isaac Ruchalski.
* [leaflet.js](https://leafletjs.com/), une API de cartographie en collaboration avec [OpenStreetMap](https://fr.wikipedia.org/wiki/OpenStreetMap)
* [RestCountries](https://restcountries.eu/), une API qui répertorie les pays, leurs drapeaux, leurs traductions, ...
* [MediaWiki API](https://en.wikipedia.org/w/api.php), l'API Wikipedia/MediaWiki qui permet d'effectuer des recherches, récupérer des articles, et plein d'autres fonctions.
* [AngularFire](https://github.com/angular/angularfire), version Angular de la librairie Firebase

## Application

### Authentification

Pour se connecter, 2 possibilités : 

![Connexion](https://i.postimg.cc/dtfcRhkZ/Connexion.png)

Vous pouvez ensuite pour connecter et/ou vous inscrire.

### Inscription

Une fois inscrit, vous devrez valider votre email, et vous pourrez ensuite vous connecter.

### Statuts d'authentification

#### Non connecté:

![non connecte](https://i.postimg.cc/x1Ggf72j/non-co.png)

* \+ Peut accéder à la carte
* \- Ne peut pas accéder à la recherche d'instruments
* \- Ne peut pas éditer, supprimer, ou ajouter des éléments

#### Anonyme

![anon](https://i.postimg.cc/Hk2Mr1Px/anon.png)

* \+ Peut accéder à la carte
* \+ Peut accéder à la recherche d'instruments
* \- Ne peut pas éditer, supprimer, ou ajouter des éléments

#### Inscrit

![inscrit.png](https://i.postimg.cc/vBWbmb32/inscrit.png)

* \+ Peut accéder à la carte
* \+ Peut accéder à la recherche d'instruments
* \+ Peut éditer, supprimer, ou ajouter des éléments

### Problèmes connus

Si l'URL de l'image que vous ajoutez lors de l'ajout d'instrument utilise le protocole HTTP et non HTTPS, celle-ci risque de ne pas s'afficher, car Firebase n'accepte que le protocole HTTPS. Après avoir testé sur 2 ordinateurs différents, l'image était visible sur l'ordinateur sur lequel l'instrument a été ajouté, mais ne l'était pas sur un autre ordinateur. L'instrument était ajouté, mais l'image n'était pas générée. Remplacer HTTP par HTTPS dans l'URL règle le problème, mais uniquement pour la personne ayant créé l'instrument.

Il se peut que vous ayez une erreur 403, car l'accès à la ressource est interdit pour les autres... 

![ressource interdite](https://i.postimg.cc/4x262Kbh/Screenshot-551.png)

Faites donc attention à ce que le site sur lequel vous allez chercher une image utilise le protocole HTTPS et/ou que l'accès aux images est autorisé !

Exemple de sites qui proposent des fichiers .png au travers du protocole https : 

- [purepng.com](https://purepng.com/)
- [freepngimg.com](https://freepngimg.com/)
