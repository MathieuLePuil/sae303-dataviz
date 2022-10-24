<div class="navigation" id="navigation">
    <li class="">
        <a href="#">
            <span class="nav-icon"></span>
            <span class="nav-title"></span>
        </a>
    </li>
    <ul>
        <li>
            <a href="index.php">
                <span class="nav-icon"><ion-icon name="home-outline"></ion-icon></span>
                <span class="nav-title">Accueil</span>
            </a>
        </li>
        <li>
            <a href="#nbcommande">
                <span class="nav-icon"><ion-icon name="cart-outline"></ion-icon></span>
                <span class="nav-title">Commandes</span>
            </a>
        </li>
        <li>
            <a href="#client">
                <span class="nav-icon"><ion-icon name="person-outline"></ion-icon></span>
                <span class="nav-title">Clients</span>
            </a>
        </li>
        <li>
            <a href="#categorie">
                <span class="nav-icon"><ion-icon name="library-outline"></ion-icon></span>
                <span class="nav-title">Catégories</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="nav-icon"><ion-icon name="alert-circle-outline"></ion-icon></span>
                <span class="nav-title">Menu 4</span>
            </a>
        </li>
    </ul>
    <div class="toogle" id="toggle"></div>
</div>

<div class="navigationtel" id="navigationtel">
    <div class="toogletel" id="toggletel"></div>
    <ul>
        <li>
            <a href="index.php">
                <span class="nav-icon"><ion-icon name="home-outline"></ion-icon></span>
                <span class="nav-title">Accueil</span>
            </a>
        </li>
        <li>
            <a href="#client">
                <span class="nav-icon"><ion-icon name="person-outline"></ion-icon></span>
                <span class="nav-title">Client</span>
            </a>
        </li>
        <li>
            <a href="#"">
                <span class="nav-icon"><ion-icon name="alert-circle-outline"></ion-icon></span>
                <span class="nav-title">Menu 2</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="nav-icon"><ion-icon name="alert-circle-outline"></ion-icon></span>
                <span class="nav-title">Menu 3</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="nav-icon"><ion-icon name="alert-circle-outline"></ion-icon></span>
                <span class="nav-title">Menu 4</span>
            </a>
        </li>
    </ul>
</div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

<script>
    // let navigation = document.querySelector('.navigation');
    // let toggle = document.querySelector('.toggle');
    var navigation = document.getElementById("navigation");
    var toggle = document.getElementById("toggle");
    var navigationtel = document.getElementById("navigationtel");
    var toggletel = document.getElementById("toggletel");
    toggle.onclick = function(){
        navigation.classList.toggle('active');
    }
    toggletel.onclick = function(){
        navigationtel.classList.toggle('active');
    }
</script>