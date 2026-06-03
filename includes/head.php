<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title><?= e($site['title']) ?></title>
  <meta name="description" content="<?= e($site['description']) ?>">
  <meta name="keywords" content="<?= e(implode(', ', $site['keywords'])) ?>">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#0E2340">
  <link rel="canonical" href="<?= e($site['url']) ?>">

  <!-- Open Graph / social -->
  <?php $og_image = rtrim($site['url'], '/') . '/assets/images/opengraph.png'; ?>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="<?= e($site['name']) ?>">
  <meta property="og:title" content="<?= e($site['name']) ?>">
  <meta property="og:description" content="<?= e($site['description']) ?>">
  <meta property="og:url" content="<?= e($site['url']) ?>">
  <meta property="og:locale" content="en_IN">
  <meta property="og:image" content="<?= e($og_image) ?>">
  <meta property="og:image:secure_url" content="<?= e($og_image) ?>">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1186">
  <meta property="og:image:height" content="656">
  <meta property="og:image:alt" content="<?= e($site['name']) ?>">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= e($site['name']) ?>">
  <meta name="twitter:description" content="<?= e($site['description']) ?>">
  <meta name="twitter:image" content="<?= e($og_image) ?>">
  <meta name="twitter:image:alt" content="<?= e($site['name']) ?>">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon.png">
  <link rel="apple-touch-icon" href="assets/images/favicon.png">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <!-- Bootstrap Icons (icon font only) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">

  <!-- Compiled Tailwind (cache-busted by file mtime so deploys serve fresh CSS) -->
  <?php $css_path = __DIR__ . '/../assets/css/app.css'; $css_v = is_file($css_path) ? filemtime($css_path) : $site['year']; ?>
  <link href="assets/css/app.css?v=<?= e((string) $css_v) ?>" rel="stylesheet">

  <!-- Structured data (schema.org) -->
  <?php
    $base = rtrim($site['url'], '/');
    $structured_data = [
        '@context' => 'https://schema.org',
        '@graph'   => [
            [
                '@type'       => 'Organization',
                '@id'         => $base . '/#organization',
                'name'        => $site['brand'],
                'legalName'   => $site['name'],
                'url'         => $base . '/',
                'logo'        => $base . '/assets/images/logo.png',
                'image'       => $og_image,
                'description' => $site['description'],
                'email'       => $site['email'],
                'foundingDate'=> '2022',
                'founder'     => [
                    '@type' => 'Person',
                    'name'  => $founder['name'],
                    'jobTitle' => 'Founder & Managing Director',
                ],
                'address'     => [
                    '@type'           => 'PostalAddress',
                    'streetAddress'   => 'Amrit Building, 2nd Cross, Hosur',
                    'addressLocality' => 'Dharwad',
                    'addressRegion'   => 'Karnataka',
                    'postalCode'      => '580021',
                    'addressCountry'  => 'IN',
                ],
                'identifier'  => [
                    '@type' => 'PropertyValue',
                    'name'  => 'CIN',
                    'value' => $site['cin'],
                ],
                'sameAs'      => [ $site['platform'] ],
            ],
            [
                '@type'     => 'WebSite',
                '@id'       => $base . '/#website',
                'url'       => $base . '/',
                'name'      => $site['name'],
                'description' => $site['description'],
                'keywords'  => implode(', ', $site['keywords']),
                'inLanguage' => 'en-IN',
                'publisher' => [ '@id' => $base . '/#organization' ],
            ],
        ],
    ];
  ?>
  <script type="application/ld+json">
<?= json_encode($structured_data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) ?>
  </script>
</head>
<body>
