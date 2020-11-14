import PropTypes from 'prop-types';

export function Filter({setFilter, filter}) {
    return (
        <label>
        Filter:
        <input
        name="search" 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        />
        </label>
    )
}

// Below we are declaring what type of prop the
// component should be expecting.
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
}