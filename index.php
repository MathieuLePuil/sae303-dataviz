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
        <div class="graphique">
            <img src="assets/LOGO%20Muxe.svg">
        </div>
    </section>
    <section class="client" id="client">
        <div class="titre-section">
            <h2>Informations client</h2>
        </div>
        <div class="graphique">
            <div id="graph1"><img src="assets/LOGO%20Muxe.svg"></div>
            <div id="graph2"><img src="assets/LOGO%20Muxe.svg"></div>
        </div>
    </section>
    <section class="categorie" id="categorie">
        <div class="titre-section">
            <h2>Catégories</h2>
        </div>
        <div class="graphique">
            <img src="assets/LOGO%20Muxe.svg" id="graph3">
        </div>
    </section>
</body>

<?php
    require 'end_html.inc.php';
?>