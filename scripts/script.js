React.render(
    <h1>Hello, World!</h1>,
    document.getElementById('example')
);

React.render(
    React.createElement('h1', null, 'Dom Dom Dom'),
    document.getElementById('ex_1')
);


var Comment = React.createClass({
	render: function() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
			</div>
		);
				}
				});

var CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">1st commnt o f the dat</Comment>
				<Comment author="Licky he">Lickitung!</Comment>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
		  <div className="commentForm">
			Hello, world! I am a CommentForm.
		  </div>
		);
	}
});

var CommentBox = React.createClass({
	render: function() {
		  return (
			<div className="commentBox">
			  <h1>Comments</h1>
			  <CommentList />
			  <CommentForm />
			</div>
		);
	}
});

React.render(
    <CommentBox/>,
    document.getElementById('content')
);


