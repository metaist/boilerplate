<%inherit file="/layouts.mako/html.html" />
<%block name="head">
  <link rel="stylesheet" href="http://code.jquery.com/qunit/qunit-1.12.0.css" />
</%block>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>

<script src="http://code.jquery.com/jquery.min.js"></script>
<script src="http://code.jquery.com/qunit/qunit-1.12.0.js"></script>
<script src="../jquery/jquery.plugin.js"></script>
<script>
test('boilerplate', function () {
  ok($.fn.plugin, 'Expect plugin to be present.');
  equal(1, $('#qunit').plugin().length, 'Expect plugin to chain jQuery.');
});
</script>