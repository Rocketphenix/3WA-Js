# Animer un dessin avec un carré

Cette exercice est identique à l'exercice précédent mais nous remplaçons le carré par un cercle !

Comme pour le carré le cercle ne doit pas sortir de la zone du canvas.
Mais alors que la position gauche du carré correspond à sa position x (donc si x == 0 on est sur le bord gauche du Canvas),
pour le cercle x et y sont au centre du cercle.
Le bord gauche du cercle correspond donc à sa position x - son rayon (`circle.x - circle.radius`)

## Astuce :

Le cercle se dessine à l'aide d'un tracé de point en suivant un arc.
Pour cela nous allons utiliser les fonction du contexte2D suivantes : - `beginPath()` pour initialiser le tracé - `arc(...)` pour tracer un cercle avec un rayon donné à une position donnée - `fillStyle()` pour définir la couleur de remplissage - `fill()` pour dessiner ce cercle dans le canvas en ramplissant notre tracé

Pour gérer facilement votre Cercle, ou plus précisemment les variables qui définisse celui ci, vous pouvez utiliser un objet :

```javaScript
let circle = {
    color: "#FF0000",
    radius:20,
    x:10,
    y:10
};

// Il est alors possible d'ajouter 4 à la position X du
circle.x+=4;
```
