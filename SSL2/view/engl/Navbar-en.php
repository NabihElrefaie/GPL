<?php
    // Get the current page name
    $current_page = basename($_SERVER['PHP_SELF'], ".php");
?>

<div class="container-fluid nav-bar p-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
            <h1 class="display-5 text-secondary m-0"><img src="img/icon.jpg" class="img-fluid" alt=""></h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="index.php" class="nav-item nav-link <?php echo ($current_page == 'index') ? 'active' : ''; ?>">Home</a>
                <a href="about.php" class="nav-item nav-link <?php echo ($current_page == 'about') ? 'active' : ''; ?>">About</a>
                <a href="service.php" class="nav-item nav-link <?php echo ($current_page == 'service') ? 'active' : ''; ?>">Service</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link <?php echo ($current_page == 'feature' || $current_page == 'testimonial') ? 'active' : ''; ?>" data-bs-toggle="dropdown"><span class="dropdown-toggle">More</span></a>
                    <div class="dropdown-menu m-0">
                        <a href="feature.php" class="dropdown-item <?php echo ($current_page == 'feature') ? 'active' : ''; ?>">Feature</a>
                        <a href="testimonial.php" class="dropdown-item <?php echo ($current_page == 'testimonial') ? 'active' : ''; ?>">Testimonial</a>
                    </div>
                </div>
                <a href="contact.php" class="nav-item nav-link <?php echo ($current_page == 'contact') ? 'active' : ''; ?>">Contact</a>
            </div>
            <a href="contact.php" class="btn btn-primary border-white rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">Get A Quote</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link" data-bs-toggle="dropdown" id="dropdownLang1">
                    <span class="dropdown-toggle" id="langLabel1">
                        <img src="img/lang/logo-lang.png" alt="Lang" style="width: 20px; height: auto; margin-right: 5px;">
                        Lang
                    </span>
                </a>
                <div class="dropdown-menu m-0">
                    <a href="index.php" class="dropdown-item" onclick="changeLanguage('langLabel1', 'img/lang/logo-lang.png', 'Eng')">
                        <img src="img/lang/logo-lang.png" alt="Eng" style="width: 20px; height: auto; margin-right: 5px;"> Eng
                    </a>
                    <a href="index-ar.php" class="dropdown-item" onclick="changeLanguage('langLabel1', 'img/lang/download.png', 'Arab')">
                        <img src="img/lang/download.png" alt="Arab" style="width: 20px; height: auto; margin-right: 5px;"> Arab
                    </a>
                </div>
            </div>
        </div>
    </nav>
</div>
