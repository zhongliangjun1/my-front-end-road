
$(function(){

	// var compiled = _.template("hello: <%= name %>");	
	// compiled({name : 'moe'});

	var compiled = _.template(
				'<div id="this-desc"> \
					<span class="desc">now <%=desc%> is </span> \
					<span class="value"><%= name %></span>. \
				</div>'
				);	

	$('.container').on('click', function(e){

		var self = $(this);
		var trigger = $(e.target);

		var this_name = recognizeCurrentNode(self);
		var this_dom = compiled({ desc:'$(this)', name:this_name});

		var trigger_name = recognizeCurrentNode(trigger);
		var trigger_dom = compiled({ desc:'event.target', name:trigger_name});

		var content = $('.content');
		content.empty();
		content.append(this_dom);
		content.append(trigger_dom);

	});

	var recognizeCurrentNode = function(node) {
		var tagNodes = node.find('.tag');
		var tagValue = 'inner';
		if ( tagNodes && tagNodes.length>0 ) {
			var tagNode = $(tagNodes[0]);
			tagValue = tagNode.text();
		};
		return tagValue;
	}

});
