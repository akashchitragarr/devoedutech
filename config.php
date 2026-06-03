<?php
/**
 * Site configuration and content data.
 * All copy and structured content lives here so sections stay presentational.
 */

$site = [
    'name'        => 'Devo Edutech Pvt Ltd',
    'brand'       => 'Devo Edutech',
    'tagline'     => 'Pvt Ltd',
    'title'       => "Devo Edutech Pvt Ltd — Building India's Bharat Hospitality Skilling Infrastructure",
    'description' => 'Devo Edutech is the parent company behind Hotelwaley — India\'s first vernacular microlearning platform for the 40 million frontline workers who run the country\'s hotels and restaurants.',
    'url'         => 'https://www.devoedutech.com',
    'location'    => 'Hubli, Karnataka',
    'email'       => 'ajay@devoedutech.com',
    'platform'    => 'https://www.hotelwaley.com',
    'platform_label' => 'www.hotelwaley.com',
    'cin'         => 'U80301KA2022PTC160866',
    'address'     => 'Amrit Building, 2nd Cross, Hosur, Dharwad, Karnataka 580021',
    'year'        => 2026,
];

$nav_links = [
    ['href' => '#about',       'label' => 'About'],
    ['href' => '#recognition', 'label' => 'Recognition'],
    ['href' => '#founder',     'label' => 'Founder'],
    ['href' => '#contact',     'label' => 'Contact'],
];

$stats = [
    ['number' => '40M+', 'label' => 'Workers We Serve'],
    ['number' => '4.2M', 'label' => 'Establishments'],
    ['number' => '7',    'label' => 'Indian Languages'],
    ['number' => '₹18L', 'label' => 'Karnataka Elevate Grant'],
    ['number' => '2026', 'label' => 'Full Launch'],
];

$what_we_do = [
    [
        'icon'  => 'bi-translate',
        'title' => 'Vernacular Microlearning',
        'text'  => 'Short-form, job-ready modules in English, Hindi, Kannada and six other Indian languages. Built for the mobile-first worker. Immediately applicable on the floor.',
    ],
    [
        'icon'  => 'bi-patch-check',
        'title' => 'Compliance-Anchored Content',
        'text'  => 'Curriculum aligned with FoSTaC, NSDC, THSC, and PMKVY standards. Training that counts toward certification and regulatory requirements.',
    ],
    [
        'icon'  => 'bi-diagram-3',
        'title' => 'Bharat-First Distribution',
        'text'  => "Platform partnerships with Petpooja, Shiftz, and India's leading hospitality associations — reaching workers through the tools they already use.",
    ],
    [
        'icon'  => 'bi-megaphone',
        'title' => 'Standards Movement',
        'text'  => 'Hotelwaley is not just a course platform. It is a category-defining movement to establish what world-class hospitality training looks like for real India.',
    ],
];

$credentials = [
    [
        'icon'  => 'bi-trophy-fill',
        'title' => 'Startup Karnataka Elevate 2023 — Grant Winner',
        'desc'  => 'Selected from hundreds of applicants across Karnataka as a high-potential, category-defining startup. Received Rs. 18 Lakhs in grant funding from the Government of Karnataka.',
    ],
    [
        'icon'  => 'bi-patch-check-fill',
        'title' => 'DPIIT Recognised Startup',
        'desc'  => 'Recognised by the Department for Promotion of Industry and Internal Trade under the Startup India initiative. CIN: U80301KA2022PTC160866.',
    ],
    [
        'icon'  => 'bi-search',
        'title' => 'Structurally Unserved Market — Validated',
        'desc'  => 'Competitive scan of global hospitality training platforms including Cornell University, AHLEI, and Typsy confirms that Bharat-first, vernacular, mobile, frontline hospitality training is a structurally unoccupied category.',
    ],
    [
        'icon'  => 'bi-people-fill',
        'title' => 'Institutional Network',
        'desc'  => 'Active engagement with FHRAI, SIHRA, KSHA, NSDC, THSC, and PMKVY. FoSTaC empanelment process initiated. Advisory network includes senior leaders from Club Mahindra, The Park Hotels, Intellistay, and India\'s leading hospitality institutions.',
    ],
];

$founder = [
    'name'     => 'Ajay Handa',
    'initials' => 'AH',
    'title'    => 'Founder and Managing Director, Devo Edutech Pvt Ltd',
    'caption'  => 'Ajay Handa — Hubli, Karnataka',
    'quote'    => 'Sometimes all it takes is vision, leftover tiles, and a lot of guts.',
    'highlights' => [
        ['icon' => 'bi-trophy', 'label' => 'Elevate 2023 Grant Winner'],
        ['icon' => 'bi-mic', 'label' => 'Toastmasters Alumnus'],
        ['icon' => 'bi-geo-alt', 'label' => 'Hubli, Karnataka'],
    ],
    'story'    => [
        "In the 1990s, Ajay Handa was building a bar inside his family's hotel in Hubli and ran out of money before he could hire a bartender. He drove 400 kilometres to Bangalore, spent days shadowing bartenders at the city's top venues, came back, trained two local boys in everything he had learned, and opened The Zebra Crossing — North Karnataka's first youth nightlife venue.",
        'Three decades later, the same instinct drives Devo Edutech. Ajay identified that 40 million frontline hospitality workers across Tier 2 and Tier 3 India had never had access to practical, vernacular, job-ready training. No one was building for Bharat. So he did.',
        "Ajay brings deep roots in Karnataka's hospitality, logistics, and startup ecosystem. He is a Toastmasters Presentation Mastery alumnus, a Startup Karnataka Elevate grant winner, and a practitioner whose understanding of India's real hospitality industry shapes every decision at Hotelwaley.",
    ],
];

$contacts = [
    [
        'icon'      => 'bi-buildings',
        'label'     => 'Partnerships',
        'title'     => 'Hotel Owners and Operators',
        'text'      => "Looking to train your frontline team? Reduce attrition? Meet compliance requirements? Let's talk about what Hotelwaley can do for your property.",
        'link'      => $site['platform'],
        'link_text' => 'Visit Hotelwaley',
    ],
    [
        'icon'      => 'bi-mortarboard',
        'label'     => 'Institutions',
        'title'     => 'Associations and Skilling Bodies',
        'text'      => 'FHRAI, SIHRA, NSDC, and industry bodies looking to deploy scalable vernacular training for India\'s hospitality workforce are welcome to reach out.',
        'link'      => 'mailto:' . $site['email'],
        'link_text' => 'Contact Ajay',
    ],
    [
        'icon'      => 'bi-graph-up-arrow',
        'label'     => 'Investors',
        'title'     => 'Investor Enquiries',
        'text'      => 'Building category-defining infrastructure for a 40 million plus workforce market with 14% CAGR. If this interests you, we would love to share more.',
        'link'      => 'mailto:' . $site['email'],
        'link_text' => 'Get in Touch',
    ],
];

/** Escape helper for output. */
function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
