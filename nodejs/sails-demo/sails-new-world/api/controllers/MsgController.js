/**
 * MsgController
 *
 * @description :: Server-side logic for managing Msgs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	load : function(req, res) {

		Msg.find({}).exec( function(err, msgs) {

			sails.log('begin---');

				if (err) {
					res.view('500.ejs');
					sails.log.error(err);
					return;
				};

				res.view('msgpage', {
	                'title':'EJS - Template Engine', 
					'messages':msgs 
	            });

		});
	},

	add : function(req, res) {
		var messages =  [
			{ name:'pangpang', sex:'male', img:'image_1.jpg', msg:"AngularJS is one of the most popular Javascript frameworks available today. One of AngularJS's goals is to simplify the development process which makes it great for prototyping small apps, but its power allows scaling to full featured client side applications. " },
			{ name:'tutu', sex:'female', img:'image_2.jpg', msg:"The combination ease of development, breadth of features, and performance has led to wide adoption, and with wide adoption comes many common pitfalls. This list captures common AngularJS mistakes, especially when scaling an app." }
		];

		for (var i = 0; i < messages.length; i++) {
			var message = messages[i];
			Msg.create(message).exec( function(err, msg) {
				if (err) {
					sails.log.error(err);
					return;
				} else {
					sails.log(msg);
				}
			} );
		};

		res.json(messages, 200);
	}
	
};

