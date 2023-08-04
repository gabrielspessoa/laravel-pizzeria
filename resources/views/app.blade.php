<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'Laravel') }}</title>

  <!-- Fonts -->
  <link rel="preload" href="/fonts/Inter.ttf" as="font" type="font/ttf" crossorigin />
  <link rel="preload" href="/fonts/BebasNeue.ttf" as="font" type="font/ttf" crossorigin />
  <link rel="preload" href="/fonts/Lobster.ttf" as="font" type="font/ttf" crossorigin />

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
  @inertiaHead
</head>

<body class="font-sans antialiased bg-gray-100 text-gray-800">
  @inertia
</body>

</html>
