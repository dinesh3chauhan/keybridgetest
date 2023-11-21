const {Task} = require("./Task")

exports.saveTask = function(req, res ){
    
    Task.create({
        created_by: req.body.createdBy,
        cleint : req.body.client,
        project_name: req.body.project,
        task_title: req.body.title,
        status: req.body.status,
        assignee : req.body.assignee,
        task_type: req.body.taskType,
        priority: req.body.priority,
        notes: req.body.notes,
        email_notes: req.body.emailNotes

    }).then(p=>{
       res.send(p);
    }).catch(e=>{
        res.send(e);
    })
}