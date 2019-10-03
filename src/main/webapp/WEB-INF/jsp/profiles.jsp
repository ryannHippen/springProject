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
    <h1>Profile List</h1>
    <a href="/newProfile">Create New Profile</a>
    <br/><br/>
    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>Profile ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>About</th>
                <th>File</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        	<c:forEach items="${listProfiles}" var="profile">
	            <tr> 
	                <td${profile.profileId}></td>
	                <td${profile.firstName}></td>
	                <td${profile.lastName}></td>
	                <td${profile.email}></td>
	                <td${profile.about}></td>
	                <td>File></td>
	
	                <td>
	                    <a th:href="/@{'/edit/' + ${profile.profileId}}">Edit</a>
	                    &nbsp;&nbsp;&nbsp;
	                    <a th:href="/@{'/delete/' + ${profile.profileId}}">Delete</a>
	                </td>
	                
	            </tr>
            </c:forEach>
        </tbody>
    </table>
</div>   
</body>
</html>