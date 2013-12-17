<%inherit file="/layouts.mako/html.html" />
<%block name="head">
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" />
</%block>

<script src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.9/require.min.js"></script>
<script>require(['app/app'], function () { require(['app/page']); });</script>
</body></html>
