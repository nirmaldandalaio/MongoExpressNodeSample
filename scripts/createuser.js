$(document).ready(function(){
    let user = {}, group = {};

    function init() {
        $("#createUserBtn").on("click", createUser);
        $("#createGroupBtn").on("click", createGroup);
    }

    function createUser() {
        let username = $("#username").val();
        let email = $("#email").val();
        let url = "http://localhost:3000/users";
        user.username = username;
        user.email = email;
        serviceCall(user, url, "POST");
    }

    function createGroup() {
        let groupname = $("#group-name").val();
        let members = $("#group-members").val();
        let url = "http://localhost:3000/groups";
        group.groupname = groupname;
        group.members = members.split(",");
        serviceCall(group, url, "POST");
    }

    function serviceCall(data, url, method) {
        $.ajax({
            method: method,
            url: url,
            data: data
        })
        .done(function( msg ) {
            alert( "Created successfully!!" );
        });
    }

    init(); 
});