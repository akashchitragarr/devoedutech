<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title><?= e($site['title']) ?></title>
  <meta name="description" content="<?= e($site['description']) ?>">
  <link rel="canonical" href="<?= e($site['url']) ?>">

  <!-- Open Graph / social -->
  <?php $og_image = rtrim($site['url'], '/') . '/assets/images/opengraph.png'; ?>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="<?= e($site['name']) ?>">
  <meta property="og:title" content="<?= e($site['name']) ?>">
  <meta property="og:description" content="<?= e($site['description']) ?>">
  <meta property="og:url" content="<?= e($site['url']) ?>">
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

  <!-- Compiled Tailwind -->
  <link href="assets/css/app.css" rel="stylesheet">
</head>
<body>
