<?php
/**
 * Devo Edutech Pvt Ltd — landing page.
 * Pulls in shared config, then composes the page from section partials.
 */
require __DIR__ . '/config.php';

require __DIR__ . '/includes/head.php';
require __DIR__ . '/includes/nav.php';

$sections = ['hero', 'stats', 'about', 'recognition', 'videos', 'founder', 'platform', 'contact'];
foreach ($sections as $section) {
    require __DIR__ . "/sections/{$section}.php";
}

require __DIR__ . '/includes/footer.php';
