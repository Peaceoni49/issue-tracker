
document.getElementById('issuesInputForm').addEventListener('submit', saveIssue);
function saveIssue(e) {
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity =document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssinedToInput').value;
  var issueId = chance.guid();
  var issueStatus = 'Open';

  var issue ={
    id: issueId,
    Description: issueDesc,
    severity; issueSeverity,
    assignedTo: issueAssignedTo
  }

  if (localStorage.getItem('issues')==null)
    var issue =[];
    issues.push('issue');
    localStorage.setItem('issues',JSON.stringify(issues));
} else{
  var issues=JSON.parsel(locatStorage.getItem('issues'));
  issues.push(issue);
  localStorage.setItem('issues',JSON.stringify(issues));
}

document.getElementById(('issueInoutForm').reset);

fetchIssues();
e.prevntDefault();
}
function fetchIssues() {
  var issues =JSON.parsel(localStorage.getItem('issues'));
  var issuesListe = document.getElementById('issuesList');

  issueList.innerHTML ='';

  for (var i =0; i< issues.lenght; i++){
    var id -issues[i].id;
    var desc = issues[i].Description;
    var assignedTo = issues[i].assignedTo;
    var status = issues [i].status;

    issueList.innerHTML += '<div class="well">'+
                            '<h6>Issue ID: ' +id +'</h6>'
                            '<p><span class"label lebel-info">' + status '</span></p>'+
                            '<h3>' + desc + '</h3>'+
                            '<p><span class="glyphicon glyphicon-time"></span>' + severity +'</p>'
                            '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo +'</p>'
                            '<a href="#" onclick="setStatusClosed(\''+id+'/')" class="btn btn-warning">Close</a>'
                            '<a href="#" onclick="deleteIssue(\''+id+'/')" class="btn btn-danger">Delete</a>'
                            '</div>'



  }
}
