<?php
    // Get the current page name
    $current_page = basename($_SERVER['PHP_SELF'], "-ar.php");
?>

 <!-- Navbar & Hero Start -->
 <div class="container-fluid nav-bar p-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="display-5 text-secondary m-0"><img src="img/icon.jpg" class="img-fluid" alt=""></h1>
                    <!-- <img src="img/logo.png" alt="Logo"> -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index-ar.php" class="nav-item nav-link <?php echo ($current_page == 'index') ? 'active' : ''; ?>">الرئيسية</a>
                        <a href="about-ar.php" class="nav-item nav-link <?php echo ($current_page == 'about') ? 'active' : ''; ?>">من نحن</a>
                        <a href="service-ar.php" class="nav-item nav-link <?php echo ($current_page == 'service') ? 'active' : ''; ?>">خدماتنا</a>
                        <div class="nav-item dropdown">
                        <a href="#" class="nav-link <?php echo ($current_page == 'feature' || $current_page == 'testimonial') ? 'active' : ''; ?>" data-bs-toggle="dropdown"><span class="dropdown-toggle">المزيد</span></a>
                        <div class="dropdown-menu m-0">
                                <a href="feature-ar.php" class="dropdown-item <?php echo ($current_page == 'feature') ? 'active' : ''; ?>">ما يميزنا</a>
                                <a href="testimonial-ar.php" class="dropdown-item <?php echo ($current_page == 'testimonial') ? 'active' : ''; ?>">الأراء</a>
                            </div>
                        </div>
                        <a href="contact-ar.php" class="nav-item nav-link <?php echo ($current_page == 'contact') ? 'active' : ''; ?>">للتواصل</a>
                    </div>
                    <a href="contact-ar.php" class="btn btn-primary border-white rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">الحصول علي عرض سعر</a>

        <div class="btn-group" style="direction: ltr;">
            <button type="button" class="btn">
                <span class="navbar-text" id="langLabel1">
                    <img src="img/lang/logo-lang.png" alt="Lang" style="width: 20px; height: auto; margin-right: 5px;">
                    Lang
                </span>
            </button>
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a href="index.php" class="dropdown-item" id="Eng" onclick="changeLanguage('langLabel1', 'img/lang/logo-lang.png', 'en')">
                        <img src="img/lang/logo-lang.png" alt="Eng" style="width: 20px; height: auto; margin-right: 5px;"> Eng
                    </a>
                </li>
                <li>
                    <a href="index-ar.php" class="dropdown-item" id="Arab" onclick="changeLanguage('langLabel1', 'img/lang/download.png', 'ar')">
                        <img src="img/lang/download.png" alt="Arab" style="width: 20px; height: auto; margin-right: 5px;"> Arab
                    </a>
                </li>
            </ul>
        </div>
            </div>
            </nav>
        </div>
<!-- Navbar & Hero End -->