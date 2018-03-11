
var movies = [
	{
		id: 1,
		title: 'Pulp Fiction',
		desc: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
		year: '1994',
		poster: 'images/pulpfiction.jpg'
	},
	{
		id: 2,
		title: 'Inglourious Baterds',
		desc: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
		year: '2009',
		poster: 'images/inglorious.jpg'
	},
	{
		id: 3,
		title: 'Kill Bill',
		desc: "The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.",
		year: '2003',
		poster: 'images/killbill.jpg'
	},
	{
		id: 4,
		title: 'Django Unchained',
		desc: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
		year: '2012',
		poster: 'images/django.jpg'
	},
	{
		id: 5,
		title: 'The Hateful Eight',
		desc: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
		year: '2015',
		poster: 'images/hateful.jpg'
	}
];

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	}
});

var MovieYear = React.createClass({
	propTypes: {
		year: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.year)
		);
	}
});

var MoviePoster = React.createClass({
	propTypes: {
		poster: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('img', {src: this.props.poster})
		);
	}
});

var MovieList = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return(
			React.createElement('li', {src: this.props.movie.id},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieYear, {year: this.props.movie.year}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement(MoviePoster, {poster: this.props.movie.poster})
			)
		);
	}
});

var moviesElements = movies.map(function(movie) {
	return React.createElement(MovieList, {key: movie.id, movie: movie});
});

var MoviesList = React.createClass({
	render: function() {
		return (React.createElement('ul', {}, moviesElements));
	}
});

var element =
	React.createElement('div', {},
    	React.createElement('h1', {}, "Tarantino's movies"),
    	React.createElement(MoviesList, {})
    );

ReactDOM.render(element, document.getElementById('app'));