## Projecte LMSGI04: Creació d'un examen amb autocorrecció

### Autora: Alicia Victoria López González

Per a la realització del projecte LMSGI04 de l'assignatura **_Llenguatge de Marques i Sistemes de Gestió de la Informació_** s'ha portat a terme el següent procés general: 

**1.** Establiment del tema respecte al qual es faran les 10 preguntes de l'examen: l'Eivissa popular.
   
**2.** Recerca d'informació per poder elaborar les 10 preguntes. Per això, s'ha extret informació de les següents pàgines web:
   * Enciclopèdia d'Eivissa i Formentera: [http://www.eeif.es/](http://www.eeif.es/).
   * Paraules nostres: [https://sites.google.com/site/paraulesnostres/](https://sites.google.com/site/paraulesnostres/).
   * Diccionario de palabras ibicencas: [http://www.ibizaisla.es/blog/diccionario-de-palabras-ibicencas.html](http://www.ibizaisla.es/blog/diccionario-de-palabras-ibicencas.html).

**3.** Invenció de la Universitat d'Evissa i Formentera (UEF).

**4.** Creació d'un logo per a la UEF des de la web [https://es.onlinelogomaker.com/](https://es.onlinelogomaker.com/).

**5.** Modificació del logo creat anteriorment amb Photoshop, de manera que es que s'obtenen dues modalitats del logo inicial:
   * Logo 1:
<img src="/img/logo1.png">

   * Logo 2:
<img src="/img/logo2.png">

**6.** Optimització dels logos a la pàgina web [tinypng.com](https://tinypng.com/).

**7.** Creació del directori "img" dins del directori arrel de treball.

**8.** Emmagatzematge de les imatges del logo al directori "img".

**9.** Consulta del repositori exemple donat pel professor: [https://github.com/urbinapro/jsxml](https://github.com/urbinapro/jsxml).

**10.** Creació del fitxer **index.html** al directori arrel, en el qual s'implementa la part HTML corresponent de l'examen amb autocorrecció.

**11.** Creació del directori "css" dins del directori arrel de treball.

**12.** Creació del fitxer **d.css** al subdirectori "css", en el qual s'implementa la codificació CSS corresponent per a donar un estil a la meva aplicació quan aquesta es mostra en dispositius de pantalla gran, com són els ordinadors.

**13.** Creació del fitxer **m.css** al subdirectori "css", en el qual s'implementa la codificació CSS corresponent per a donar un estil a la meva aplicació quan aquesta es mostra en dispositius de pantalla petita, com són els mòbils.

**14.** Creació del directori "xml" dins del directori arrel de treball.

**15.** Creació del fitxer **preguntas.xml** al subdirectori "xml", en el qual s'estructura les dades de les preguntes de l'examen (type, title, option, answer).

**16.** Modificació del fitxer **index.html** eliminant les dades de les preguntes de l'examen que s'han inclòs al fitxer **preguntas.xml** editat anteriorment.

**17.** Creació del directori "json" dins del directori arrel de treball.

**18.** Conversió del codi del fitxer **preguntas.xml** a codi JSON mitjançant el [conversor de XML a JSON de Code Beautify](https://codebeautify.org/xmltojson).

**19.** Creació del fitxer **preguntas.json** dins del subdirectori "json" amb el codi obtingut mitjançant el conversor de XML a JSON.

**20.** Creació del directori "js" dins del directori arrel de treball.

**21.** Creació del fitxer **questions.js** dins del subdirectori "js", en el qual s'implementa el codi Javascript necessari per donar una correcció automatitzada a l'examen.

**22.** Modificació de la codificació dels fitxers index.html, questions.js, d.css i m.css amb l'ajuda dels diferents tutorials ([HTML](https://www.w3schools.com/html/),[CSS](https://www.w3schools.com/css/) i [Javascript](https://www.w3schools.com/js/) i altres fonts (que es citen al final d'aquest document) per a intentar complir amb tots el requeriments que se'ns demana i aconseguir una bona presentació del projecte.

**23.** Comprobació del funcionament i presentació del projecte provant la visualització amb diferentes mides de pantalla. Es detecta que la visualització en dispositius mòbils no es correcta del tot.

**24.** Validació dels fitxers .html al [validador web de HTML](https://validator.w3.org/), obtenint un resultat positiu.

**25.** Validació dels fitxers .css al [validador web de CSS](https://jigsaw.w3.org/css-validator/), obtenint un resultat positiu.

**26.** Validació del fitxer .js al [validador web de Javascript](http://jshint.com/), obtenint un resultat positiu.

**27.** Optimització del codi dels fitxers .html a la web [www.willpeavy.com/minifier/](https://www.willpeavy.com/minifier/) i creació del corresponent fitxer .html optimitzat.

**28.** Optimització del codi dels fitxers .css a la web [cssminifier.com/](https://cssminifier.com/) i creació dels corresponents fitxers .css optimitzats.

**29.** Validació dels fitxers .html optimitzats al [validador web de HTML](https://validator.w3.org/), obtenint un resultat positiu.

**30.** Validació dels fitxers .css optimitzats al [validador web de CSS](https://jigsaw.w3.org/css-validator/), obtenint un resultat positiu.

**31.** Creació d'un nou repositori a Github, [**LMSGI04**](https://github.com/alishaibz/LMSGI04).
    
**32.** Pujada dels arxius corresponents a la tasca (directoris "css", "img", "js", "json" i "xml", i fitxer .html) al nou repositori, **LMSGI04**.

**33.** Obtenció de URL de Rawgit del projecte LMSGI04: [https://rawgit.com/alishaibz/LMSGI04/master/index.html](https://rawgit.com/alishaibz/LMSGI04/master/index.html).

**34.** Creació del branch [mini](https://github.com/alishaibz/Lunar-Lander-Javascript/tree/mini) al repositori creat anteriorment.

**35.** Eliminació dels arxius del branch mini que no es troben minimificats

**36.** Pujada dels arxius corresponents a la versió minimificada del projecte LMSGI04 al branch mini.

**37.** Edició del fitxer README.me del repositori **LMSGI04**.

### Requeriments del projecte LMSGI04 no aconseguits:
* En compartir la pàgina de rawgit del projecte al Facebook no apareix
* S'han establert tres nivells de dificultat, els quals fan variar la quantitat de combustible de la nau i la velocitat llindar d'aterratge.
* Al aterrar la nau a la Lluna, el joc finalitza (guanyant o perdent) i apareix una finestra amb un enllaç al final (Volver a jugar), que permet reiniciar el joc.
* S'ha establert la variable pausa al codi Javascript que permet que mentre que el joc estigui en pausa no es pugui accionar la nau ni fent click en la pantalla ni prement cap tecla.


