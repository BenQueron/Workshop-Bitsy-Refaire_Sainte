# Workshop-Bitsy-Refaire-Sainté!

Workshop d'initiation à un outil de création de jeux vidéos indépendant à l'aide de bitsy, de multi-bitsy, des langages HTML, CSS et JavaScript. Ce workshop a eu lieu au sein de l'ESADSE et a été coordonné par Benoit Quéron dans le cadre d'un stage de recherche au sein du Random(lab), sous la supervision de David-Olivier Lartigaud.

Pour télécharger l'ensemble des fichiers, il vous suffit de sélectionner le dossier complet qui sera téléchargé en compressé. Vous pouvez également télécharger les jeux individuellement en sélectionnant uniquement le jeu bitsy qui vous intéresse. 

Le fichier index.html sert de structure d'ensemble. C'est le fichier qui réuni tous les jeux en un seul site web. Il fonctionne avec deux autres documents qui lui sont associés: un document style.css qui permet de faire la mise en page des éléments, et un document index.js qui gère les interactions sur le site web. 

Comment héberger un jeu bitsy sur un fichier html? 

Dans la page index.html, vous devez importer le jeu vidéo bitsy. Pour ce faire, vous devez d'abord compresser votre fichier à l'aide de l'outil Multi-Bitsy créé par Velvet et disponible avec le lien ci dessous:

https://switch-b.itch.io/multi-bitsy

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/0ba303e4-69e6-42bd-a652-bd14a218a23a)

Je ne suis pas l'auteur de cet outil mais il permet de compresser les bitsy pour les intégrer plus facilement à de spages web. Je vous invite donc à consulter leur travail, ainsi que l'emploi de cet outil par le Pang Pang Club et Eniarof. Cependant, à la différence de multi-bitsy, nous allons ici créer nous-même l'architecture qui va héberger tous nos jeux.

Une fois ce fichier téléchargé, vous devez l'enregistrer dans le dossier contenant vos fichiers index.html, style.css et index.js. 

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/161a91b9-5675-4c4a-8097-e239a3ea4e2a)

Ensuite, vous devez indiquer dans le fichier index.html que le site web doit afficher ce contenu. Pour ce faire vous aller utiliser les balises <iframe>. Ces balises vous permettent d'héberger une page web au sein d'une autre page web, par exemple pour insérer une page Google maps. Ici, vous aller référencer le jeu bitsy compressé en indiquant au sein de la balise le nom exact de votre jeu. 
Dans l'image ci-dessous vous voyez qu'en plus de la balise <iframe> on doit donner la source <src> du jeu. 
Pour indiquer quel jeu vous voulez vous devez utiliser le lien: src='nomdevotrejeu.html' . Si jamais vous regroupez vos fichiers dans un seul dossier, vous pouvez lui indiquer le nom du dossier en tapant: src='nomdudossier/nomdevotrejeu.html' et en intégrant bien le dossier dans le projet sinon cela ne marchera pas. 

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/73226a51-02e2-45dd-83f1-c2e6d058bda9)

Vous n'avez plus qu'à ouvrir votre site web en cliquant sur le fichier index.html et votre jeu sera intégré dans une page web! Pour la mise en page, vous pouvez désormais modifier l'organisation dans la page de la balise <iframe> qui contient votre jeu. Pour faciliter la mise en page, les balises <iframe> ont un système d'identification. Chaque <iframe> possède une <class> qui lui donne un nom. Ici, elles ont toutes le nom: <class='iframeClass'>. Pour les mettre en page, vous devez vous rendre dans le fichier style.css et c'est la commande: .iframeClass {} qui vous permettra ensuite de mettre en page le jeu avec du code css. 


![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/13b9da85-b0e3-4b3f-9540-d3caea7755a1)

Pour jouer il suffit de cliquer sur le jeu avec la souris et ensuite d'utiliser les flèches. Pour revenir à de la navigation web il faut cliquer à côté du jeu. 

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/af6e09a5-708d-470f-ad45-addf140c12b0)

Pou ajouter le texte de présentation en dessous des jeux, vous pouvez directemment écrire du texte dans le fichier index.html au sein d'une balise <p>. Pour afficher du texte qui n'est pas du code il suffit de taper du texte sans utliser de termes réservés au code. Tout comme les jeux, insérer les descriptifs au sein d'une balise permet ensuite de les mettre en page plus facilement:

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/f079d935-7655-4b5d-96f9-6d8cf6519c90)


Le dernier fichier index.js permet de récupérer des informations comme le fait de cliquer sur un jeu ou les déplacements de la souris. De ce fait, il devient possible pour vous de rajouter des interactions JavaScript en plus des jeux si vous le souhaitez: texte animé, faire apparaitre ou disparaitre du contenu... etc:

![image](https://github.com/BenQueron/Workshop-Bitsy-Saint-low-rez/assets/64792923/01f60878-9315-46c3-a404-b4a2954f899b)

Vous avez désormais toute une structure pour exporter vos jeux bitsy directemment pour le web ou pour les intégrer à votre propre site web et créer des interactions personnalisées en JavaScript. 

Il existe aussi des plateformes de diffusion comme le site itch.io qui vous permet d'afficher votre jeu en ligne mais deuis une page web prédéfinie. 

