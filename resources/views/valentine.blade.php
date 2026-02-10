<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Will You Be My Valentine?</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    <link rel="stylesheet" href="{{ asset('css/valentine.css') }}">
</head>
<body>
    <div id="root"></div>
</body>
</html>