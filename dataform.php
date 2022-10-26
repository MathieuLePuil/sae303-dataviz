<?php
require 'start_html.inc.php';
?>

<form action="traitement.php" method="GET">
    <div>
        <label for="date">Date :</label>
        <input type="date" id="date">
    </div>
    <div>
        <label for="region">Region :</label>
        <select name="region" id="region">
            <option value="">--Please choose an option--</option>
            <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
            <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
            <option value="Bretagne">Bretagne</option>
            <option value="Centre-Val de Loire">Centre-Val de Loire</option>
            <option value="Corse">Corse</option>
            <option value="Grand Est">Grand Est</option>
            <option value="Hauts-de-France">Hauts-de-France</option>
            <option value="Île-de-France">Île-de-France</option>
            <option value="Normandie">Normandie</option>
            <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
            <option value="Occitanie">Occitanie</option>
            <option value="Pays de la Loire">Pays de la Loire</option>
            <option value="Provence-Alpes-Côte d'Azur">Provence-Alpes-Côte d'Azur</option>
        </select>
    </div>
    <div>
        <label for="produit">Famille produit :</label>
        <select name="produit" id="produit">
            <option value="">--Please choose an option--</option>
            <option value="CUISINE">CUISINE</option>
            <option value="ELECTROMENAGER">ELECTROMENAGER</option>
            <option value="IMAGE-SON">IMAGE-SON</option>
            <option value="INFORMATIQUE">INFORMATIQUE</option>
            <option value="TELEPHONIE">TELEPHONIE</option>
        </select>
    </div>
    <div>
        <label for="reglement">Mode de réglement :</label>
        <select name="reglement" id="reglement">
            <option value="">--Please choose an option--</option>
            <option value="CB">CB</option>
            <option value="PAYPAL">PAYPAL</option>
            <option value="VIRT">VIRT</option>
        </select>
    </div>
    <div>
        <label for="livraison">Mode de livraison :</label>
        <select name="livraison" id="livraison">
            <option value="">--Please choose an option--</option>
            <option value="Domicile">Domicile</option>
            <option value="Point Relais">Point Relais</option>
            <option value="Retrait sur Place">Retrait sur Place</option>
        </select>
    </div>
    <div>
        <label for="coupon">Coupon de réduction :</label>
        <select name="coupon" id="coupon">
            <option value="oui">Oui</option>
            <option value="non">Non</option>
        </select>
    </div>
    <div>
        <label for="montant">Montant :</label>
        <input type="number" id="montant">
    </div>
    <input type="submit">
</form>

<?php
require 'end_html.inc.php';
?>