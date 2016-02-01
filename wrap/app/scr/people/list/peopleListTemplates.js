App.module("PeopleApp.List.Templates", function(Templates, App, Backbone, Marionette, $, _) {

    Templates.Persons = `
		<!-- Default panel contents -->
		<div class="panel-heading">People</div>
		<div class="panel-body">

	  	<!-- Table -->
		<table class="table">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Palindrome</th>
					<th>Authorised</th>
					<th>Enabled</th>
					<th>Colours</th>
				</tr>
			</thead>
			<tbody></tbody>
	  	</table>
	`;

    Templates.Person = `
		<td><%- id %></td>
		<td><a href="#" class="js-person-edit"><%- fullName %></a></td>
		<td class='<% isPalindrome ? print('green') : print('red') %>'><%- isPalindrome %></td>
		<td class='<% isAuthorised ? print('green') : print('red') %>'><%- isAuthorised %></td>
		<td class='<% isEnabled ? print('green') : print('red') %>'><%- isEnabled %></td>
		<td><%- coloursString %></td>
	`

});