$(function() {
    $('#passwordField').after($('#firstNameField'));
    $('#firstNameField > label').innerHTML = 'Name<span aria-hidden="true">*</span>';
    $('#lastNameField').closest(".js-unknown-user-field").remove();
});