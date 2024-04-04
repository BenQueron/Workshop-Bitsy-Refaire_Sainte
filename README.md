# Workshop-Bitsy-Saint-low-rez

Pour télécharger l'ensemble des fichiers, il vous suffit de sélectionner le dossier complet qui sera téléchargé en compressé. Vous pouvez également télécharger les jeux individuellement en sélectionnant uniquement le jeu bitsy qui vous intéresse. 

Le fichier index.html sert de structure d'ensemble. C'est le fichier qui réuni tous les jeux en un seul site web. Il fonctionne avec deux autres documents qui lui sont associés: un document style.css qui permet de faire la mise en page des éléments, et un document index.js qui gère les interactions sur le site web. 

Comment héberger un jeu bitsy sur un fichier html? 

Dans la page index.html, vous devez importer le jeu vidéo bitsy. Pour ce faire, vous devez d'abord compresseer votre fichier à l'aide de l'outil Multi-Bitsy créé par Velevet et disponible avec le lien ci dessous:

https://switch-b.itch.io/multi-bitsy

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/0ba303e4-69e6-42bd-a652-bd14a218a23a)

Je ne suis pas l'auteur de cet outil mais il permet de compresser les bitsy pour les intégrer plus facilement à de spages web. Je vous invite donc à consulter leur travail, ainsi que l'emploi de cet outil par le Pang Pang Club et Eniarof. Cependant, à la différence de multi-bitsy, nous allons ici créer nous-même l'architecture qui va héberger tous nos jeux.

Une fois ce fichier téléchargé, vous devez l'enregistrer dans le dossier contenant vos fichiers index.html, style.css et index.js. 

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/161a91b9-5675-4c4a-8097-e239a3ea4e2a)

Ensuite, vous devez indiquer dans le fichier index.html que le site web doit afficher ce contenu. Pour ce faire vous aller utiliser les balises <iframe>. Ces balises vous permettent d'hérberger une page web au sein d'une autre page web, apr exemple pour insérer une page Google maps. Ici, vous aller référencer le jeu bitsy compressé en indiquant au sein de la balise le nom exact de votre jeu. 
Dans l'image ci-dessous vous voyez qu'en plus de la balise <iframe> on doit donner la source du jeu. 
Pour indiquer quel jeu vous voulez vous devez utiliser le lien: src='nomdevotrejeu.html' . Si jamais vous regroupez vos fichiers dans un seul dossier, vous pouvez lui indiquer le nom du dossier en tapant: src='nomdudossier/nomdevotrejeu.html' et en intégrant bien le dossier dans le projet sinon cela ne marchera pas. 

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/73226a51-02e2-45dd-83f1-c2e6d058bda9)

Vous n'avez plus qu'à ouvrir votre site web en cliquant sur le fichier index.html et votre jeu sera intégré dans une page web! Pour la mise en page, vous pouvez désormais modifier l'organisation dans la page de la balise <iframe> qui contient votre jeu. Pour jouer il suffit de cliquer sur le jeu avec la souris et ensuite d'utiliser les flèches. Pour revenir à de la navigation web il faut cliquer à côté du jeu. 

Le dernier fichier index.js permet de récupérer des informations comme le fait de cliquer sur un jeu ou les déplacements de la souris. De ce fait, il devient possible pour vous de rajouter des interactions JavaScript en plus des jeux si vous le souhaitez: texte animé, faire apparaitre ou disparaitre du contenu... etc. 
