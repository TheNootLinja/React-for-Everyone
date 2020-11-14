import PropTypes from 'prop-types';

export function Movie({ movie }) {
    return (
        <li key={movie.name}>{movie.name}</li>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
}