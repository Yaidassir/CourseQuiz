/// table des questions , q : la question 
///                       options : les options qu'on a pour la question
///                        answer : c'est l'index de la réponse juste

const ques = [{
    q: 'Choissisez le type de données approprié pour ce champ : unsportif',
    options: ['double', 'booléen', 'int', 'chaine de caractère'],
    answer: 3
}, {

    q: 'Comment convertissez-vous le doubletype suivant (myDouble) en int type:\n double myDouble = 9,78 \nint myInt = ... myDouble',
    options: ['float', 'int', 'booléen', 'char', 'String'],
    answer: 1
}, {
    q: 'Utilisez l opérateur approprié pour augmenter la valeur de la variable x de 1 :\n int x = 10;\n x.. ;',
    options: ['!=', '-', '++', '+'],
    answer: 2
}, {
    q: "Qu'est ce qu'une boucle ?'",
    options: ["un nouveau type d 'applet.", 'un segment de code a éxecuter un nombre spécifié de fois', 'un segment de code a éxectuer a un nombre de fois unfini', "un code qui s 'execute une seul fois ."],
    answer: 1
}, {
    q: 'Si vous voulez que une condition  depende de deux conditions a la fois vraie . quelle est la notation appropriée a mettre entre les conditions',
    options: ['!', '||', '&&'],
    answer: 2
}, {
    q: 'Un objet pourrait être ...',
    options: ["N'importe quoi", 'Un algorithme', 'Un conteneur de données', 'Un programme'],
    answer: 0
}, {
    q: "La dernière valeur d'un tableau appelé ar peut être trouvée à l'index:",
    options: ['Longueur Tab - 1', '1', '0', 'Tab.length'],
    answer: 0
}, {
    q: "Lequel des éléments suivants n'est pas un mot clé Java?",
    options: ['Entier', 'Chaîne de caractères', 'Essayer', 'Principale'],
    answer: 0
}, {
    q: "Choisissez la meilleure définition d'un objet",
    options: ["Une instance d'une classe", 'Une chose', 'Quelque chose que vous portez'],
    answer: 0
}, {
    q: 'Pouvez-vous comparer un booléen à un entier?',
    options: ['Vrai', 'Faux'],
    answer: 1
}, {
    q: 'Quelle sera la valeur de "num" après les instructions suivantes? int num;\n num = (5 + 4);\n num = num / 9; \n num = 9;',
    options: ['0', 'Num', '1', '9'],
    answer: 3
}, {
    q: "Qu'est-ce qui est essentiel pour vous assurer que votre boucle n'est pas infinie?",
    options: ['Que votre déclaration booléenne sera à un moment donné fausse', "Qu'il y a une instruction booléenne quelque part dans votre code", 'Que votre déclaration booléenne sera à un moment donné vraie', 'Tous les choix'],
    answer: 0
}, {
    q: 'Lequel des éléments suivants nécessite toujours une majuscule ? ',
    options: ['Champs et chaînes', 'Noms de classe et chaînes', 'Types de données et champs', 'Objet et noms de classe'],
    answer: 1
}, {
    q: "Dans une boucle 'for', quelle section de la boucle n'est pas incluse entre parenthèses après 'for'?",
    options: ['Corps de boucle', 'Mettre à jour', 'Initialisation', 'Énoncé de test'],
    answer: 0
}, {
    q: 'Quelle boucle affichera chacun des nombres de ce tableau sur une ligne séparée: float [] nums = {1.1f, 2.2f, 3.3f};',
    options: ['Pour (i = 1; i <3; i ++) System.out.println (nums [i]);', 'Pour (i = 1; i <3; i ++) nums [i];', 'Pour (i = 0; i<3;i++) return num[i];', 'For (int i = 0; i <3; i ++) System.out.println (nums [i]);'],
    answer: 3
}, {
    q: 'Compte tenu de la déclaration: int [] ar = {1,2,3,4,5}; Quelle est la valeur de ar [4]?',
    options: ['5', '2', '3', '4'],
    answer: 0
}]