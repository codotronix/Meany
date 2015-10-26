exports.render = function(req, res){
	//res.send('Sending Hello from index.server.controller... How Cool !!! :) ');
	var lastVisit = 'Not available in this session...';
	if(req.session.lastVisit){
		lastVisit = req.session.lastVisit;
	}

	req.session.lastVisit = new Date();

	res.render('index', {
		title: 'Hello EJS',
		text: "It's working... Can you believe it?",
		lastVisit: lastVisit
	});
};