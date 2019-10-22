<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Resource Management</title>
</head>
<body>
	<div align="center">
        <h1>Create New Profile</h1>
        <br />
        <form action="/saveProfile" object="${profile}"
            method="post">
 
            <table border="0" cellpadding="10">
                <tr>
                    <td>First Name:</td>
                    <td><input type="text" field="*{firstName}" /></td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td><input type="text" field="*{lastName}" /></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="text" field="*{email}" /></td>
                </tr>
                <tr>
                    <td>About:</td>
                    <td><input type="text" field="*{about}" /></td>
                </tr>
                <tr>
                    <td>File:</td>
                    <td><input type="file" field="*{file}" /></td>
                </tr>                           
                <tr>
                    <td colspan="2"><button type="submit">Save</button> </td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>