function updateContentAndStyles(lang) {
    console.log(`Updating content for language: ${lang}`); // Debugging line
    try {
        // Navbar
        document.getElementById("Home").textContent = translations[lang].Home;
        document.getElementById("About").textContent = translations[lang].About;
        document.getElementById("Service").textContent = translations[lang].Service;
        document.getElementById("More").textContent = translations[lang].More;
        document.getElementById("Feature").textContent = translations[lang].Feature;
        document.getElementById("Testimonial").textContent = translations[lang].Testimonial;
        document.getElementById("Contact").textContent = translations[lang].Contact; // Update Contact breadcrumb item

        // Update breadcrumb links

        document.getElementById("Quote").textContent = translations[lang].Quote;
        document.getElementById("Contact_Us").textContent = translations[lang].Contact_Us;
        /*document.getElementById("Eng").textContent = translations[lang].Eng;
        document.getElementById("Arab").textContent = translations[lang].Arab;*/

        // Update Top Bar Content
        document.getElementById("topbarHelp").textContent = translations[lang].help;
        document.getElementById("topbarSupport").textContent = translations[lang].support;
        document.getElementById("topbarContact").textContent = translations[lang].contact;

    } catch (error) {
        console.error(`Error updating content for language '${lang}':`, error); // Debugging line
    }

    // Change styles based on language
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl'); // Set direction to right-to-left
        document.body.classList.add('arabic');    // Add a class for Arabic styles
        document.body.classList.remove('english'); // Remove English class if exists
    } else {
        document.body.setAttribute('dir', 'ltr'); // Set direction to left-to-right
        document.body.classList.add('english');    // Add a class for English styles
        document.body.classList.remove('arabic');  // Remove Arabic class if exists
    }
}
// Language Change Function
function changeLanguage(lang) {
    updateContentAndStyles(lang);
}