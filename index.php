<?php
require 'start_html.inc.php';
?>

    <body>
    <?php
    require 'nav_html.inc.php';
    ?>

    <section class="accueil" id="accueil">
        <img src="assets/LOGO%20Muxe.svg" alt="Logo Muxe">
        <h1>Muxe</h1>
    </section>

    <section class="nbcommande" id="nbcommande">
        <div class="titre-section">
            <h2>Nombre de commande</h2>
        </div>
        <div class="graphique reveal">
            <div id="graph1">
                <canvas id="com"></canvas>
                <p>Le graphique montre le nombre de commandes chaque mois. Celui-ci permet de voir si les ventes augmentent ou diminue.</p>
            </div>
        </div>
    </section>

    <section class="client" id="client">
        <div class="titre-section">
            <h2>Informations client</h2>
        </div>
        <div class="graphique reveal">
            <div id="graph2">
                <canvas id="comReg"></canvas>
                <div>
                    <input type="checkbox" id="check2" value="A" data-color="rgb(120,123,21)" data-label="A" data-value="[1, 3, 4, 6]">A
                    <input type="checkbox" id="check2" value="B" data-color="rgb(21,123,121)" data-label="B" data-value="[4, 2, 41, 12]">B
                    <input type="checkbox" id="check2" value="C" data-color="rgb(20,13,21)" data-label="C" data-value="[2, 0, 9, 6]">C
                    <input type="checkbox" id="check2" value="D" data-color="rgb(120,13,21)" data-label="D" data-value="[10, 3, 7, 1]">D
                </div>
                <p>Nous pouvons observer ici le nombre de commandes de chaque région. Ceci peut permettre de savoir où ont peut placer les nouveaux entrepôts en cas de besoin (afin de limiter les frais de livraison).</p>
            </div>
            <div id="graph3">
                <canvas id="livReg"></canvas>
                <div>
                    <input type="checkbox" id="check3" value="A" data-color="rgb(120,123,21)" data-label="A" data-value="[1, 3, 4, 6]">A
                    <input type="checkbox" id="check3" value="B" data-color="rgb(21,123,121)" data-label="B" data-value="[4, 2, 41, 12]">B
                    <input type="checkbox" id="check3" value="C" data-color="rgb(20,13,21)" data-label="C" data-value="[2, 0, 9, 6]">C
                    <input type="checkbox" id="check3" value="D" data-color="rgb(120,13,21)" data-label="D" data-value="[10, 3, 7, 1]">D
                </div>
                <p>Les livraisons les plus couteuses sont celles à domicile et en point relais. Nous pouvons donc anticiper les coûts potentiels d'essence avec ce graphique.</p>
            </div>
        </div>
    </section>

    <section class="categorie" id="categorie">
        <div class="titre-section">
            <h2>Catégories</h2>
        </div>
        <div class="graphique reveal">
            <div id="graph4">
                <canvas id="comCat"></canvas>
                <p>Ce graphique représente le nombre de commandes pour les objets de chaque catégorie. Ceci peut permettre de gérer les stocks et réapprovisionner si ceux-ci baissent.</p>
            </div>
        </div>
    </section>

    <section class="commande" id="commande">
        <div class="titre-section">
            <h2>Informations commandes</h2>
        </div>
        <div class="graphique reveal">
            <div id="graph5">
                <canvas id="monReg"></canvas>
                <p>Ce graphique permet à la comptabilité de faire les comptes selon le mode de paiement. En cas de taxe, cela permet de recalculer le montant exact reçu.</p>
            </div>
            <div id="graph6">
                <canvas id="monCat"></canvas>
                <p>Ce graphique représente le montant généré par la vente des objets de chaque catégorie. Nous pouvons donc déceler les catégories qui fonctionnent le mieux et les développer.</p>
            </div>
        </div>
        <div class="graphique2 reveal">
            <div id="graph7">
                <canvas id="monMoi"></canvas>
                <p>Nous pouvons voir grâce à ce graphique, le montant généré chaque mois avec les commandes. Cela permet de voir si l'entreprise augmente ou pas son chiffre d'affaires en comparant avec les dépenses.</p>
            </div>
            <div id="graph8">
                <canvas id="comCou"></canvas>
                <p>Ce camembert représente le nombre de personnes qui utilise un coupon sur le nombre de commandes total. Cela permet de voir la quantité de bon utilisé sur les commandes et combien de réduction ont été appliquées.</p>
            </div>
        </div>
    </section>
    </body>

<?php
require 'end_html.inc.php';
?>