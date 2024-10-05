<?php
    // Get the current page name
    $current_page = basename($_SERVER['PHP_SELF'], ".php");
?>

<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.php" class="logo d-flex align-items-center">
        <img src="assets/rfof.png" alt="Rfof" class="rounded">
        <h1 class="sitename">Rfof</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
        <a href="index.php" class="nav-item nav-link <?php echo ($current_page == 'index') ? 'active' : ''; ?>">Home</a>
        <a href="about.php" class="nav-item nav-link <?php echo ($current_page == 'about') ? 'active' : ''; ?>">About</a>
        <a href="service.php" class="nav-item nav-link <?php echo ($current_page == 'service') ? 'active' : ''; ?>">Service</a>
        <li><a href="portfolio.php">Portfolio</a></li>

        <a href="contact.php" class="btn btn-primary border-white rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">Get A Quote</a>
        <button id="previewPdfBtn" class="btn btn-danger border-white rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0" style="margin-left: 10px;margin-right: 10px;">Profile</button>

            <div class="nav-item dropdown">
                <a href="#" class="nav-link" data-bs-toggle="dropdown" id="dropdownLang1">
                    <span class="dropdown-toggle" id="langLabel1">
                        <img src="assets/img/lang/logo-lang.png" alt="Lang" style="width: 20px; height: auto; margin-right: 5px;">
                        Eng
                    </span>
                </a>
                <div class="dropdown-menu m-0" style="    background-color: #8587897d;">
                    <a href="index.php" class="dropdown-item" onclick="changeLanguage('langLabel1', 'assets/img/lang/logo-lang.png', 'Eng')">
                        <img src="assets/img/lang/logo-lang.png" alt="Eng" style="width: 20px; height: auto; margin-right: 5px;"> Eng
                    </a>
                    <a href="index-ar.php" class="dropdown-item" onclick="changeLanguage('langLabel1', 'assets/img/lang/download.png', 'Arab')">
                        <img src="assets/img/lang/download.png" alt="Arab" style="width: 20px; height: auto; margin-right: 5px;"> Arab
                    </a>
                </div>
            </div>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

  <script>
    const pdfUrl = 'assets/pdf/profile.pdf'; 

    document.getElementById('previewPdfBtn').addEventListener('click', function() {
        window.open(pdfUrl, '_blank'); 
    });
</script>