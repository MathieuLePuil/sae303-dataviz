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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
            </div>
            <div id="graph3">
                <img src="assets/LOGO%20Muxe.svg" alt="graphique">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
            </div>
            <div id="graph6">
                <canvas id="monCat"></canvas>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
            </div>
        </div>
        <div class="graphique2 reveal">
            <div id="graph7">
                <canvas id="monMoi"></canvas>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
            </div>
            <div id="graph8">
                <canvas id="comCou"></canvas>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt dolore dolorum enim eum exercitationem harum incidunt ipsa itaque, magnam maiores numquam odit similique tempora, veritatis, vero voluptatum?</p>
            </div>
        </div>
    </section>
    </body>

<?php
require 'end_html.inc.php';
?>