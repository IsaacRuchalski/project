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

#### Problèmes connus

Firebase ouvre une session différente à chaque utilisation. Ce qui signifie que si un utilisateur ajoute un lien vers une image lors de l'ajout d'un instrument, pour une raison qui m'échappe, cette image ne sera fonctionnelle que pour la personne l'ayant ajouté.
