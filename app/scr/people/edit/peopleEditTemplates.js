App.module("PeopleApp.Edit.Templates", function(Templates, App, Backbone, Marionette, $, _) {

    Templates.Person = `
		<form>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">Update <%= fullName %></h3>
				</div>
				<div class="panel-body">
				
					<h2 class="panel-title">User Details</h3>
					<hr class="divider">
					<div class="form-group">
						<label for="person-authorised" class="control-label js-person-authorised">Authorised</label>
						<input id="person-authorised" type="checkbox" class="form-item" name="isAuthorised" <%=  (isAuthorised === true) ? 'checked' : '' %>/>
					</div>
					<div class="form-group">
						<label for="person-enabled" class="control-label js-person-enabled">Enabled</label>
						<input id="person-enabled" type="checkbox" class="form-item" name="isEnabled" <%=  (isEnabled === true) ? 'checked' : '' %>/>
					</div>

					<h2 class="panel-title">Favourite Colours</h3>
					<hr class="divider">
					<div class="form-group ">
						<label for="person-enabled2" class="control-label">Blue</label>
						<input id="person-enabled2" type="checkbox" class="form-item" name="blue" <%=  (getColor('3').isChecked === true) ? 'checked' : '' %>/>
					</div>
					<div class="form-group ">
						<label for="person-enabled3" class="control-label">Green</label>
						<input id="person-enabled3" type="checkbox" class="form-item" name="green" <%=  (getColor('2').isChecked === true) ? 'checked' : '' %>/>
					</div>
					<div class="form-group ">
						<label for="person-enabled4" class="control-label">Red</label>
						<input id="person-enabled4" type="checkbox" class="form-item" name="red" <%=  (getColor('1').isChecked === true) ? 'checked' : '' %>/>
					</div>
				</div>
			</div>
			<a class="btn btn-default pull-right js-cancel" href="#">Cancel</a>
			<button class="btn btn-primary pull-right js-submit">Save Changes</button>
		</form>
	`;

});