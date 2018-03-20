<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Flappy Nerd</title>

        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.8.10/themes/smoothness/jquery-ui.css" type="text/css">
        <script type="text/javascript" src="//ajax.aspnetcdn.com/ajax/jquery.ui/1.8.10/jquery-ui.min.js"></script>
        <script$.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
            });>
        </script>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}" ></script>

        @if (count($errors) > 0)
            <div class="alert alert-success hideMe">
                    <strong>{{ $errors->first() }}</strong>
            <div>
        @endif
    </body>
</html>
